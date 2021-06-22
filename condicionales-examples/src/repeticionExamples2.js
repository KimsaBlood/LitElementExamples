import { LitElement,html,css } from "lit-element";
import { openWcLogo } from './open-wc-logo.js';
import './condicionales2.js';

export class repeticiones2 extends LitElement{
    static get properties(){
        return{
            title:{type:String},
            contactos:{type:Array}
        }
    }

    static get styles(){
        return css`
            
            li{
                width:200px;
            }
        `;
    }

    constructor(){
        super();
        this.title="repeticiones2";
        this.contactos=[
            {nombre:'Miguel Angel Alvarez',email:'miguel.angel@hotmail.com'},
            {nombre:'Alvaro Martinez',email:'alvaro.martinez@gmail.com'},
            {nombre:'Jhon Doe',email:'jhon.doe@ax.com'}
        ];
    }

    render(){
        return html`
            <div>
                ${this.contactos.map(
                    contacto=>html`<condicionales-examples2 email="${contacto.email}" nombre="${contacto.nombre}"></condicionales-examples2>`
                )}
            </div>
        `;
    }
}