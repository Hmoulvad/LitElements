import { urbanitem } from "./urban-item.css";
import { LitElement, html, customElement, property } from "lit-element";
import { global } from "../../../styles/global.css";

interface IUrbanDictionary {
    definition: string;
    permalink: string;
    thumbs_up: number;
    thumbs_down: number;
    example: string;
    written_on: string;
    author: string;
    word: string;
}

@customElement("lep-urban-item")
class UrbanDictionary extends LitElement {

    @property({ type: Object }) props: IUrbanDictionary = {
        definition: "",
        permalink: "",
        thumbs_up: 0,
        thumbs_down: 0,
        example: "",
        written_on: "",
        author: "",
        word: "",
    }

    @property({ type: Number }) index: number = 0;

    static get styles() {
        return [
            global,
            urbanitem
        ]
    }

    get descriptionElement() {
        let editstring = this.props.definition;
        const regex = new RegExp(/\[(.*?)\]/, "g");
        const matches = [ ...this.props.definition.matchAll(regex)]
        for ( const match of matches) {
            editstring = editstring.replace(match[0], `<a class="urban-item__header-link" href="https://www.urbandictionary.com/define.php?term=${match[1]}">${match[0]}</a>`)
        }
        const definitionHtml = document.createElement("p");
        definitionHtml.innerHTML = editstring;
        return definitionHtml;
    }

    render() {
        const { permalink, thumbs_up, thumbs_down, example, written_on, author, word } = this.props;
        return html`
            <section class="urban-item">
                <header>
                    <h4>"${word}"</h4>
                </header>
                <section>
                    ${this.descriptionElement}
                    <p><b>Example of use:</b> ${example}</p>
                </section>
                <a href=${permalink}>Link to Website</a>
                <footer>
                    <p>Submitted by: <b>${author}</b>, written on: <b>${(new Date(written_on)).toLocaleDateString()}</b></p>
                    <p>Upvotes: ${thumbs_up}, Downvotes: ${thumbs_down}</p>
                </footer>
            </section>
        `;
    }
}

export default UrbanDictionary;