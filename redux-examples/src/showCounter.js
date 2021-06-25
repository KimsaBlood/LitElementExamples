import { LitElement,html,css } from "lit-element";

export class showCounter extends LitElement{
    static get properties(){
        return{
            counter:{type:Number}
        }
    }

    static get styles(){

    }

    constructor(){
        super();
        this.counter=0;
    }

    render(){
        return html`
            <p>Contador ${this.counter}</p>
        `;
    }
}