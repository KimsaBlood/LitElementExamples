import { LitElement,html,css } from "lit-element";

export class dobleBinding extends LitElement{
    static get properties(){
        return{
            value:{type:String}
        }
    }

    static get styles(){

    }

    constructor(){
        super();
    }

    render(){
        return html`
            <p>
                <input type="text". .value="${this.value}" @input="${this.inputChange}">
            </p>
        `;
    }

    inputChange(e){
        this.value=e.target.value;
        this.dispatchEvent(new CustomEvent('change',{
            detail:this.value
        }))
    }
}