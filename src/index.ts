import { LitElement, html, customElement } from "lit-element";
import "./shell/header/header";
import "./shell/footer";
import "./components/todo-list";
import { global } from "./styles/global.css";

@customElement('root-el')   
export class WebApp extends LitElement {
    static get styles() {
        return global;
    }
    render() {
        return html`
            <app-header></app-header>
            <main>
                <app-todo-list></app-todo-list>
            </main>
            <app-footer></app-footer>   
        `;
    }
};