import { urbanitem } from "./urban-item.css";
import { LitElement, html, customElement, property } from "lit-element";
import { global } from "../../../styles/global.css";

@customElement("lep-urban-item")
class UrbanDictionary extends LitElement {

    @property({ type: Object }) props = {
        definition: "",
        permalink: "",
        thumbs_up: 0,
        thumbs_down: 0, 
    } 

    static get styles() {
        return [
            global,
            urbanitem
        ]
    }

    get addAnchors() {
        let editstring = this.props.definition;
        const regex = new RegExp(/\[(.*?)\]/, "g");
        const matches = [ ...this.props.definition.matchAll(regex)]
        for ( const match of matches) {
            editstring = editstring.replace(match[0], `<a href="https://www.urbandictionary.com/define.php?term=${match[1]}">${match[0]}</a>`)
        }
        const definitionHtml = document.createElement("div");
        definitionHtml.innerHTML = editstring;
        return definitionHtml;
    }

    render() {
        const { permalink, thumbs_up, thumbs_down } = this.props;
        return html`
            <section class="urban-item">
                ${this.addAnchors}
                <a href=${permalink}>Link to Website</a>
                <p>Thumbs Up: ${thumbs_up}</p>
                <p>Thumbs Down: ${thumbs_down}</p>
            </section>
        `;
    }
}

export default UrbanDictionary;