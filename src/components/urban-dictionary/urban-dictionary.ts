import { LitElement, html, customElement, property } from "lit-element";
import { global } from "../../styles/global.css";
import { lookUpWord } from "../../services/urban-dictionary.service";
import { urban } from "./urban-dictionary.css";
import { repeat } from "lit-html/directives/repeat";
import "./urban-item";

@customElement("lep-urban-dic")
class UrbanDictionary extends LitElement {

    static get styles() {
        return [
            global,
            urban
        ]
    }

    @property({ type: Array }) list: any[] = [];

    async _onSearch() {
        const searchParam = (this.shadowRoot!.getElementById("searchQuery")! as HTMLInputElement).value;
        const urbanDictionaryList = await lookUpWord(searchParam);
        const { list } = urbanDictionaryList;
        this.list = list;
    }

    render() {
        const { list, _onSearch } = this;
        return html`
            <section class="urban">
                <div class="urban__search">
                    <label class="urban__label" for="urban">Search Urban Dictionary</label>
                    <div class="urban__input">
                        <input id="searchQuery" value="" name="urban" type="text">
                        <button @click=${_onSearch} type="button">Search</button>
                    </div>
                </div>
                ${!!list && repeat(list, item => html`
                    <lep-urban-item .props=${item}></lep-urban-item>
                `)}
            </section>
        `;
    }
}

export default UrbanDictionary;