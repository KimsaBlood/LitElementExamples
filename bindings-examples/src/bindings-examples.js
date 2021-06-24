import { bindingAtributo } from './bindingAtributo.js';
import { bindingBoolean } from './bindingBoolean.js';
import { bindingEvento } from './bindingEvento.js';
import { bindingPropiedad } from './bindingPropiedad.js';
import { bindings2 } from './bindingPropiedad2.js';
import { BindingsExamples } from './BindingsExamples.js';
import { dobleBinding } from './dobleBinding.js';
import { dobleBindingPadre } from './dobleBindingPadre.js';

customElements.define('bindings-examples', BindingsExamples);
customElements.define('bindings-atributo',bindingAtributo);
customElements.define('bindings-boolean',bindingBoolean);
customElements.define('bindings-evento',bindingEvento);
customElements.define('bindings-propiedad-list',bindingPropiedad);
customElements.define('bindings-propiedad',bindings2);
customElements.define('doble-binding-hijo',dobleBinding);
customElements.define('doble-binding-padre',dobleBindingPadre);