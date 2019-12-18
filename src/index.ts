import { LitElement, html, customElement } from "lit-element";
import "./shell/header/header";
import "./shell/footer";
import { global } from "./styles/global.css";

@customElement('root-el')   
export class WebApp extends LitElement {
    static get styles() {
        return global
    }
    render() {
        return html`
            <div class="">
                <app-header></app-header>
                <main>
                    <p>Nothing to see</p>
                </main>
                <app-footer></app-footer>
            </div>    
        `;
    }
};