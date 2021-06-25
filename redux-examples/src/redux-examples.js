import { CounterUserInterface } from './counterUserInterface.js';
import { ReduxExamples } from './ReduxExamples.js';
import { showCounter } from './showCounter.js';

customElements.define('redux-examples', ReduxExamples);
customElements.define('counter-user-interface',CounterUserInterface);
customElements.define('show-counter',showCounter);