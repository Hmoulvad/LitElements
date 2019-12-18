import { LitElement, html, customElement } from "lit-element";
import { global } from "../../styles/global.css";

@customElement("app-footer")
class Footer extends LitElement {

    static get styles() {
        return global
    }

    render() {
        return html`
            <footer>
                <p>This is the Footer of the Web Application</p>
            </footer>
        `;
    }
}

export default Footer;