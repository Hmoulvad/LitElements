import { LitElement, html, customElement, property } from "lit-element";
import { global } from "../../styles/global.css";
import { header } from "./header.css";

@customElement("app-header")
class Header extends LitElement {
    @property({ type: String }) author = "Hannibal B. Moulvad";
    @property({ type: Boolean }) openState = false;  

    static get styles() {
        return [
            global,
            header
        ]
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

    _clickHandler() {
        this.openState = !this.openState;
    }
}

export default Header;