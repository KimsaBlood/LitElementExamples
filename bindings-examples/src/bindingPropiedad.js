import { LitElement,html,css } from "lit-element";

export class bindingPropiedad extends LitElement{
    static get properties(){
        return{
            items: {type: Array}
        };
    }

    static get styles(){

    }

    constructor(){
        super();
    }

    render(){
        return html`
            <ul>
                ${this.items.map(item=>html`<li>${item}</li>`)}
            </ul> 
        `;
    }
}