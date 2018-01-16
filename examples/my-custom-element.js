// import binaryImage from './kermitbinary';

class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    const p = document.createElement('p');
    p.innerHTML = 'hello world';
    this.appendChild(p);
  }
}
customElements.define('my-custom-element', MyCustomElement);