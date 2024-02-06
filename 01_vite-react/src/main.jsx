import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. App.jsx is just a method, can we directly write a method here which returns 
function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// 2. an object
const Element = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit Google'
}

// evaluated expression or just a variable
const anotherUser = "Tabin Tariq"

// 3. creating a element using React.createElement()
const reactElement = React.createElement(
  'a',     // tag
  {href: 'https://google.com', target: '_blank'},       // object attributes
  'visit Google',          // direct text to display
  anotherElement           // evaluated expression
)     // strictly follows this flow only => 1. tag, 2. attributes, 3. direct text, 4. evaluated expression

// 4. HTML in a variable
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>              // jsx syntax
  // <MyApp />        // works!
  // MyApp()         // also works => but NOT recommended
  // Element         // does NOT work => object literal syntax not applicable with render method
  // anotherElement  // works => converts into object (or tree)
  // reactElement     // works => used React to create a element
)


/* 
                                    NOTES
1. Writing a function in main file instead of another file (App.jsx):
    We tested if App we import here is just a function that returns HTML
    We add a MyApp in the main file to check if works, and voila it does!

    React uses a BUNDLER => behind the scene does a lot of things
    The HTML returned is parsed into a tree (an object)

2. Trying to render an object:
    It does NOT work, syntax is not applicable with render method

3. create an element using React method createElement:
    It did work, althought the syntax is very strict. Tag => attribute object => direct text
    => evaluated expression. If the element has no attributes, keep its object empty {}

4. HTML inside a variable:
    It also works, converts it into an object (or tree)


Summary: Rendering of a component can be done in few ways. 
         The above listed are the ones.
*/