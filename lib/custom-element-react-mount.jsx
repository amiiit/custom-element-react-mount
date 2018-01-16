import React from 'react';

const mountScript= (src) => {
  const script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
};

export default class CustomElementReactMount extends React.Component {
  constructor(props) {
    super(props);
    if (!props.src) {
      throw 'no src'
    }
  }

  componentDidMount() {
    let CER = window.customElements;
    if (!CER) {
      throw 'CustomElementsRegistry is not set. Please use polyfills or a browser that supports the WebComponents API';
    }
    const elementName = this.props.children.type;
    if (!CER.get(elementName)) {
      mountScript(this.props.src);
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
