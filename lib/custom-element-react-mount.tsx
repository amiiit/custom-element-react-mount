import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  src: string;
}

interface State {
}

export default class CustomElementReactMount extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log('jolly');
  }

  static mountScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
  }

  componentDidMount() {
    let CER = window.customElements;
    if (!CER) {
      throw 'CustomElementsRegistry is not set. Please use polyfills or a browser that supports the WebComponents API';
    }
    const elementName = this.props.children.toString();
    if (!CER.get(elementName)) {
      this.mountScript(this.props.src);
    }
  }

  render() {
    return <>{this.props.children}</>;
  }
}