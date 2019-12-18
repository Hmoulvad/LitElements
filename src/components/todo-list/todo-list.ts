import { LitElement, html, customElement } from "lit-element";
import { global } from "../../styles/global.css";
import { todolist } from "./todo-list.css";

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
            <section>
                <h1>This is the Todo List</h1>
            </section>
        `;
    }
}

export default TodoList;