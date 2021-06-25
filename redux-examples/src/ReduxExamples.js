import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import {connect} from 'pwa-helpers';
import {store} from './redux/store'
import './counterUserInterface.js';
import './showCounter.js';

export class ReduxExamples extends connect(store)(LitElement) {
  static get properties() {
    return {
      title: { type: String },
      appName:{type:String},
      counter:{type:Number}
    };
  }

  static get styles() {
    
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  stateChanged(state){
    console.log('statechanged',state);
    this.appName=state.appName;
    this.counter=state.counter;
  }

  render() {
    return html`
      <h1>${this.appName}</h1>
      <show-counter counter="${this.counter}"></show-counter>
      <counter-user-interface></counter-user-interface>
    `;
  }
}
