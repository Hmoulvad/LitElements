import { ITodoItem } from "./../todo-list.mockdata";
import { LitElement, html, customElement, property } from "lit-element";
import { global } from "../../../styles/global.css";
import { todoitem } from "./todo-item.css";

@customElement("app-todo-item")
class TodoItem extends LitElement {

    @property({ type: Object }) props: ITodoItem = {
        task: "",
        author: "",
        date: 0,
    } 

    static get styles() {
        return [
            global,
            todoitem
        ]
    }

    render() {
        const { task, author, date } = this.props;
        return html`
            <div class="todo-item">
                <p class="todo-item__value">${task}</p>
                <p class="todo-item__value">${author}</p>
                <p class="todo-item__value">${date}</p>
                <button>Done</button>
            </div>
        `;
    }
}

export default TodoItem;