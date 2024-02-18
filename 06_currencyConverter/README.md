# Currency Converter Project

### Custom Hooks:
- Custom hooks in a .js file is preferred.
- A standard good practice is to start the name of our custom hook with 'use'.
- We can use other built in hooks in our custom hook, like useState and useEffect.
- Hooks can and cannot take inputs and returns some data.
- In our example, we are calling an API and want to call it when a component is mounted
  (use 'useEffect' for this purpose).
- useEffect has a callback an array of dependencies (whenever dependencies change UI re-renders).
- useEffect has a dependency of currency, whenever currency changes call the API again.
- Now what to return? return data. And we export the entire method we just wrote using
  'export default useCurrencyInfo'.

### Handling APIs:
- Most of the APIs are of type 'string' always convert the API to JSON.
- using '.then'. '.then' takes in a callback. 
To covert into JSON use: 
  ```javascript
  .then((response) => {response.json()})
  ```
- now the response is in JSON format, we hold this data in some variable, use 'useState'.
  ```javascript
  .then((res) => setData(res[currency]))    // observe the API to know why we used [currency]
  ```

When using loops in react - be sure to use key


### InputBox:
- We are bulding a reuseable component, in this project we have two boxes. From box and To box.
- label => From / To  | We take this as input in this resuable input box.
- then we have a input box of type="number".
- then we have a 'p' tag for 'Currency Type'
- a 'select' tag to create a drop down list.
- line 20 has a special kind of CSS, in backticks {`{className}`} to let user pass some CSS, if
  he wants to.
- what do we pass into the InputBox:
  1. label,
  2. amount,
  3. onAmountChange (to change state of amount), 
  4. onCurrencyChange (to change state of currency),
  5. currencyOptions (default value set to empty []),
  6. selectCurrency (default set to 'usd'), 
  7. amountDisabled (default set to false) (optional), and
  8. currencyDisabled (default set to false) (optional).

#### InputBox <input> tag: 
- set type to "number"
- set placeholder to "Amount" (it's just the greyish text)
- disabled attribute - set to a boolean which we passed in earlier (default set to false)
- onChange - is an event handler which is triggered when the value of the input field changes.
  In this event, since no default value, there's a possibility of crash. To avoid, use syntax:
  It's just a checker to check if onAmountChange exists, then only use onChange.
  ```javascript
    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

    // javascript takes values as strings, so it's important to change it to Number.
  ``` 

#### InputBox <select> tag:
- This tag is used to create a dropdown list, here we need list of all currencies in our API.
- option tag in a select tag are for the various items in the dropdown.
- Current value set to currentValue (which was set to default to usd).
- onChange - same as in input tag, we use event handler. Then do the same to avoid crash.
  onChange of onCurrencyChange, set value of select to target value.
```javascript
    onChange={(e) => onCurrencyChange && onCurrencyChange(Number(e.target.value))}

    // javascript takes values as strings, so it's important to change it to Number.
```
- What would be the most intuitive approach is to add a loop on currencyOptions array.
- We use map loop. For performance purposes, remember to use 'key={}'. Then set the value to
  {currency}. Then display {currency}.

#### useId hook:
- for optimization.
- useId is a React Hook for generating unique IDs that can be passed to accessibility 
  attributes (Every HTML has accessibility attribute).