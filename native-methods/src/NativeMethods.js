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

  removeElement(){
    super.remove();
  }

  attributeChangedCallback(att,oldvalue,newvalue){
    console.log("Cambio: ",att);
    super.attributeChangedCallback(att,oldvalue,newvalue);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._handleResize);
    console.log("conectado");
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._handleResize);
    super.disconnectedCallback();
    console.log("desconectado");
    super.appendChild()
  }

  onClick(){
    this.prop1='nuevo valor';
    this.removeElement();
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
