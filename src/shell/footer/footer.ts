import { LitElement, html, customElement } from "lit-element";
import { global } from "../../styles/global.css";

@customElement("lep-footer")
class Footer extends LitElement {

    static get styles() {
        return global
    }

    render() {
        return html`
            <footer>
            </footer>
        `;
    }
}

export default Footer;