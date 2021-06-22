import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

export class BindingsExamples extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      text:{type:String}
    };
  }

  static get styles() {
    return css`
      body{
        background-color:white;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <p>${this.text}</p>
    `;
  }
}
