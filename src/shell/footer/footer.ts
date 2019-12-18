import { LitElement, html, customElement, property } from "lit-element";
import { resolve } from "path";
import { global } from "../../styles/global.css";

@customElement("app-footer")
class Footer extends LitElement {

    @property() test = resolve(__dirname, "./footer.css");

    static get styles() {
        return global
    }

    render() {
        console.log("Test", this.test);
        return html`
            <footer>
                <p>This is the Footer of the Web Application</p>
            </footer>
        `;
    }
}

export default Footer;