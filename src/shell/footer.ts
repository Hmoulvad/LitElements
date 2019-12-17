import { LitElement, html, customElement } from "lit-element";
import { typography } from "../styles/typography"

customElement("app-footer");
export class Footer extends LitElement {

    static get styles() {
        return [
            typography,
        ];
    }

    render() {
        return html`
            <footer>
                <p>This is the Footer of the Web Application</p>
            </footer>
        `;
    }
}