import { LitElement, html, customElement, property } from "lit-element";
import { global } from "../../styles/global.css";
import { header } from "./header.css";

@customElement("lep-header")
class Header extends LitElement {
    @property({ type: String }) author = "Hannibal B. Moulvad";

    static get styles() {
        return [
            global,
            header
        ]
    }

    render() {
        return html`
            <header class="header">
                <section class="header__section">
                </section>
            </header>
        `;
    }
}

export default Header;