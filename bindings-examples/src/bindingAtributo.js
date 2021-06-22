import { LitElement,html,css } from "lit-element";

export class bindingAtributo extends LitElement{
    static get properties(){
        return{
            url:{type:String}
        };
    }

    static get style(){
        return css`
            
        `;
    }

    constructor(){
        super();
        this.url=(Math.round(Math.random()))?'https://desarrolloweb.com':'https://escuela.it';
    }

    render(){
        return html`
            <a href="${this.url}">Enlace aleatorio</a>
        `;
    }
}