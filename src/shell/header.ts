import { LitElement, html, customElement, property } from "lit-element";
import { typography } from "../styles/typography"

customElement("app-header");
export class Header extends LitElement {
    @property({ type: String }) author = "Hannibal B. Moulvad";
    @property({ type: Boolean }) openState = false;  

    static get styles() {
        return [
            typography,
        ];
    }

    render() {
        return html`
            <header>
                <section>
                    <h2>${this.author}</h2>
                    <button @click=${this._clickHandler}>${this.openState ? `close` : `open`}</button>
                </section>
            </header>
        `;
    }

    _clickHandler(event) {
        this.openState = !this.openState;
    }
}