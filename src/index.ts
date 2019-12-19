import { LitElement, html, customElement } from "lit-element";
import "./shell/header/header";
import "./shell/footer";
import "./components/urban-dictionary";
import { global } from "./styles/global.css";

@customElement('lep-root')   
export class WebApp extends LitElement {
    static get styles() {
        return global;
    }
    render() {
        return html`
            <lep-header></lep-header>   
            <lep-urban-dic></lep-urban-dic>
            <lep-footer></lep-footer>
        `;
    }
};