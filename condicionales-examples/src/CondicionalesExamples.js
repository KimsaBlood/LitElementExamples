import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

export class CondicionalesExamples extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      activo: {type: Boolean},
      hora: {type:Date},
      horaDescanso: {type:Date},
    };
  }

  static get styles() {
    
  }

  constructor() {
    super();
    this.title = 'My app';
    this.activo=false;
    this.horaDescanso=new Date();
  }

  activar(){
    if(this.activo==false){
      this.activo=true;
      this.hora=new Date();
    }else if(this.activo==true){
      this.activo=false;
      this.horaDescanso=new Date();
    }
  }

  render() {
    return html`
      <div>
        <button @click="${this.activar}">
          ${this.activo?'Desactivar':'Activar'}
        </button>
      </div>
      <div>
        ${this.activo?'Estoy activo!':'Estoy inactivo'}
      </div>
      <div>
        ${this.activo
          ?html`<p>Estoy activo a las
           ${this.hora.getHours()+":"+this.hora.getMinutes()+":"+this.hora.getSeconds()}
          </p>`
          :html`<p>Estoy inactivo desde las 
          ${this.horaDescanso.getHours()+":"+this.horaDescanso.getMinutes()+":"+this.horaDescanso.getSeconds()}
          </p>`
        }
      </div>
    `;
  }
}
