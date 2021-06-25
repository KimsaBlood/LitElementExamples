import { LitElement,html } from "lit-element";
import {store} from './redux/store';
import {incrementarContador,decrementarContador,cambiarAppName} from './redux/actions/actions';

export class CounterUserInterface extends LitElement{
    static get properties(){
        return{
            name:{type:String}
        }
    }

    constructor(){
        super();
        this.name='';
    }

    render(){
        return html`
            <hr>
            <button @click="${this.incrementar}">Incrementar</button>
            <button @click="${this.decrementar}">Decrementar</button>
            <input @change=${this.changeApp}>
        `;
    }

    changeApp(e){
        this.name=e.target.value;
        store.dispatch(cambiarAppName(this.name));
    }

    incrementar(){
        store.dispatch(incrementarContador());
    }

    decrementar(){
        store.dispatch(decrementarContador());
    }
}