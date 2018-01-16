import React from 'react';

const mountScript= (src) => {
  const script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
};

export default class CustomElementReactMount extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let CER = window.customElements;
    if (!CER) {
      throw 'CustomElementsRegistry is not set. Please use polyfills or a browser that supports the WebComponents API';
    }
    const elementName = this.props.children.type;
    const src = this.props.src || CustomElementReactMount.getMappingForElementName(elementName)
    if (!src) {
      throw `No src prop and no mapping found for custom-element <${elementName}>`;
    }
    if (!CER.get(elementName)) {
      mountScript(src);
    }
  }

  static addComponentURLMapping(mapping) {
    if (mapping) {
      Object.assign(CustomElementReactMount.prototype.internals.componentURLMapping, mapping)
    }
  }

  static getMappingForElementName(tagName) {
    return CustomElementReactMount.prototype.internals.componentURLMapping[tagName]
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

CustomElementReactMount.prototype.internals = {
  componentURLMapping: {}
}
