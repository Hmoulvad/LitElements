import { LitElement, html, customElement } from "lit-element";
import "./shell/header";
import "./shell/footer";
import { typography } from "./styles/typography.css";

@customElement('root-el')   
export class WebApp extends LitElement {
    static get styles() {
        return [
            typography,
        ];
    }
    render() {
        return html`
            <app-header></app-header>
            <main>
                <p>Nothing to see</p>
            </main>
            <app-footer></app-footer>    
        `;
    }
};