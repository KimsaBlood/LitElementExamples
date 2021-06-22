import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

export class repeticiones extends LitElement {
    static get properties(){
        return{
            title:{type:String},
            frutas:{type:Array}
        }
    }

    static get styles(){
        return css`
            li{
                color:blue;
                list-style:none;
            }
        `;
    }

    constructor(){
        super();
        this.title="repeticiones";
        this.frutas=["papaya","mango"];
    }

    render(){
        return html`
            <ul>
                ${this.frutas.map(fruta=>html`<li>${fruta}</li>`)}
            </ul>
        `;
    }
}