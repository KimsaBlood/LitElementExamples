import { LitElement,html,css } from "lit-element";

export class bindingBoolean extends LitElement{
    static get properties(){
        return{
            activo:{type:Boolean}
        };
    }

    static get styles(){

    }

    constructor(){
        super();
        this.activo=true;
    }

    render(){
        return html`
            <p>
                <input type="checkbox" ?checked="${this.activo}">
            </p>
        `;
    }
}