import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

export class condicionales2 extends LitElement {
    static get properties() {
        return {
          title: { type: String },
          nombre:{ type:String},
          email:{ type:String},
          verMas:{type:Boolean}
        }
    }

    static get styles() {
        return css`
            .tarjeta{
                background-color:#f7f7f7;
                width:200px;
                margin-left:20%;
                border: 2px #00FFFF solid;
                border-radius:10px;
                display:block !important;
                font-size:15px;
                margin-top:5px;
            }
            h1{
                font-size:1.2em;
                font-weight:normal;
            }`
    }

    constructor() {
        super();
        this.title = 'My app';
        this.verMas=false;
    }

    render(){
        return html`
            <div class="tarjeta">
                <h1>${this.nombre}</h1>
                <p><a href="#" @click="${this.toggle}">Ver más</a></p>
                
                ${this.verMas?
                    html`Email: ${this.email}`:
                    ''
                }
            </div>
        `;
    }

    toggle(e){
        e.preventDefault();
        this.verMas=!this.verMas;
    }
}