import { bindingAtributo } from './bindingAtributo.js';
import { bindingBoolean } from './bindingBoolean.js';
import { bindingEvento } from './bindingEvento.js';
import { BindingsExamples } from './BindingsExamples.js';

customElements.define('bindings-examples', BindingsExamples);
customElements.define('bindings-atributo',bindingAtributo);
customElements.define('bindings-boolean',bindingBoolean);
customElements.define('bindings-evento',bindingEvento);