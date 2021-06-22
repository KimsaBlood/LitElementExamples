import { LitElement,html,css } from "lit-element";

export class bindingEvento extends LitElement{
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

    doChange(e){
        this.activo=e.target.checked;
    }
    
    render(){
        return html`
            <p>
                ${this.activo?'Activo':'Inactivo'}
                <input type="checkbox" ?checked="${this.activo}" @change="${this.doChange}">
            </p>
        `;
    }
}