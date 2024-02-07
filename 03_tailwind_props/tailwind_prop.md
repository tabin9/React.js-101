# 1. Tailwind CSS
    Install as intructed on the website.
    When copying some component, all tags must be closed. img tag is usually not
    closed make sure to close the tag, by adding / before >.

# 2. Props
    Props make components reusable.
    React seperates files based on their use. Say we build a card, we put entire
    HTML, CSS and JS in that one file and then we can use it as many times.

    Now, when we reuse the component we made. Both of them will have the same content.
    Here's where Props come into play.

### Passing Props: 
```javascript
let myObj = {
    username: 'Tabin',
    age: 21
  }
  let newArr = [1, 2, 3, 4]

<Card username='react-101' someObj={myObj} someArr={newArr} />
```

### Accesing Props:
```javascript
function Card({username, btnText="visit me"})   // direct access to username
// btnText="visit me" => here visit me is the default value of btnText, if in some Card btnText is not
                      // passed, the default value will take place of btnText otherwise btnText will display
// or
function Card(props)
props.username      // to access username
```


What we learned:
Tailwind, Tailwind Components, Own components, passed values into components, handling passed values, props,
and default values.