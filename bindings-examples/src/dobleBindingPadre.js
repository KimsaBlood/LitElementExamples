import { LitElement,html,css } from "lit-element";

export class dobleBindingPadre extends LitElement{
    static get properties(){
        return{
            miDato:{type:String}
        };
    } 
    
    static get styles(){

    }

    constructor(){
        super();
        this.miDato="Valor de inicialización";
    }

    render(){
        return html`
            <p>Soy my element</p>
            <doble-binding-hijo .value=${this.miDato} @change="${this.inputCambiado}"></doble-binding-hijo>
            <p>El dato escrito es ${this.miDato}</p>
            <button @click=${this.resetTexto}>Borrar texto</button>
        `;
    }

    inputCambiado(e){
        this.miDato=e.detail;
    }

    resetTexto(){
        this.miDato='';
    }
}