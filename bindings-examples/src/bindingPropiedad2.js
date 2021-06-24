import { LitElement,html,css } from "lit-element";
import { bindingPropiedad } from "./bindingPropiedad";

export class bindings2 extends LitElement{
    static get properties(){
        return{
            colors: {type:Array}
        };
    }

    static get styles(){

    }

    constructor(){
        super();
        this.colors=["Rojo","Verde","Amarillo","Azul"];
    }

    render(){
        return html`
            <bindings-propiedad-list .items="${this.colors}"></bindings-propiedad-list>
        `;
    }
}