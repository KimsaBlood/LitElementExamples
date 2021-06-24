import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

export class NativeMethods extends LitElement {
  static get properties() {
    return {
      title: { type: String, reflect:true },
      prop1:{type:String}
    };
  }

  static get styles() {
    
  }

  constructor() {
    super();
    this.prop1="Inicialización de una propiedad";
  }

  attributeChangedCallback(att,oldvalue,newvalue){
    console.log("Cambio: ",att);
    super.attributeChangedCallback(att,oldvalue,newvalue);
    
  }

  onClick(){
    this.prop1='nuevo valor';
    
    this.updateComplete.then(()=>{
      console.log('El template se ha actualizado ya!');
    });
  }

  render() {
    return html`
      <p>Probando</p>
      <button @click="${this.onClick}">Pruebame</button>
    `;
  }
}
