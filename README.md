# custom-element-react-mount

A React component that helps you to mount your WebComponents.
 
## Prerequisites:

1. You have the CustomElement script available under a known URL that you're able to pass down as prop to `<CustomElement>`


## How to use:

There are two ways to use `CustomElementReactMount`: by specifying the url directly as a prop, 
or by conveniently configuring all elements that you might use in this all at bootstrap. The scripts
will load on the first use of its respective element.

```jsx harmony
import CustomElementReactMount from 'custom-element-react-mount'

const App = () => {
  CustomElementReactMount.addComponentURLMapping({
    'my-custom-element': 'path-to/my-custom-element.js',
    'foo-element': 'https://example.com/foo-element.js',
  });
  
  return (
    <div>
      <MyActualApp /> // somewhere here you'll can mount your custom-elements 
    </div>
  )
}

// for example: 
const MyActualApp = () => (<div>
  <header><MyHeader /></header>
  <section>
    <CustomElementReactMount>
      <my-custom-element></my-custom-element> // no need to pass src as it's already configured
    </CustomElementReactMount>
  </section>
</div>)
```

Alternatively you can pass the src directly as a prop. This will override the above configuration if exists:
```jsx harmony
import CustomElementReactMount from 'custom-element-react-mount'

const myComponent = () => {
    return <CustomElementReactMount src="path-to/my-custom-element.js">
              <my-custom-element/>
           </CustomElementReactMount>
}
``` 

Add a feature that will allow setting a map 
 
# Creating custom elements

If you are using babel to transpile your custom element classes, the browser might fail with the following error:
```bash
Uncaught TypeError: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.
```
The reason lies in the way babel tanspiles the code. this can be fixed by adding the following plugin babel to your setup:

[transform-custom-element-classes](https://github.com/github/babel-plugin-transform-custom-element-classes)


