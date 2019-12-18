import { LitElement, html, customElement } from "lit-element";
import { repeat } from "lit-html/directives/repeat";
import { global } from "../../styles/global.css";
import { todolist } from "./todo-list.css";
import { mockdata, ITodoItem } from "./todo-list.mockdata";
import "./todo-item";

@customElement("app-todo-list")
class TodoList extends LitElement {

    static get styles() {
        return [
            global,
            todolist
        ]
    }

    render() {
        return html`
            <section class="todo-list">
                <header>
                    <h3>The today list of the week</h3>
                </header>
                ${repeat(mockdata, (todoitem: ITodoItem) => html`
                    <app-todo-item .props=${todoitem}></app-todo-item>
                `)}
            </section>
        `;
    }
}

export default TodoList;