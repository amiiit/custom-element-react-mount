import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CustomElementReactMount from '../lib/custom-element-react-mount'

CustomElementReactMount.addComponentURLMapping({
  'my-custom-element': '/my-custom-element.js'
})

const App = () => {
  return <div>
    <header>
      This is a test app for custom elements via React
    </header>
    <section>
      <span>
        In the next section we will mount <pre>my-custom-element</pre>
      </span>
      <hr/>
    </section>
    <section>
      <CustomElementReactMount>
        <my-custom-element/>
      </CustomElementReactMount>
    </section>
  </div>
}

window.onload = ()=> {
  ReactDOM.render(<App/>, document.getElementById('example-container'))
}
