# Password Generator to understand some hooks:

## 1. useCallback:
- useCallback is a React Hook that lets you cache a function definition between
  re-renders.
- In React, the useCallback hook is used to memoize functions, preventing 
  unnecessary re-creations of those functions on each re-render.
- the useCallback hook is used to memoize functions, which means it returns a 
  memoized version of the function that only changes if one of the dependencies has changed.
- Mainly used to OPTIMIZE the performance. If a function is computationally expensive to 
  create or if it relies on values that change frequently, memoizing it with useCallback 
  can improve performance by avoiding the need to recreate the function on every render.

#### Role of dependecies in useCallback:
- Determining when to re-create the memoized function.
- Preventing unnecessary re-renders.

#### usage:
```javascript
const cachedFn = useCallback(fn, dependencies)
```
Dependencies in our case is to include=> Length, Numbers, Characters
Dependencies are passed in an array


## 2. useEffect:
- useEffect is a React Hook that lets you synchronize a component with an external system.
- useEffect used when some task is done we re-render the UI. Like in our case, whenever the
  slider is moved, whenever Numbers/Characters is pressed. The page re-renders with a new 
  password. Re-renders depending on the dependency given in the array.

  #### usage:
  ```javascript
  useEffect(fn, dependencies)
  ```
Dependencies in our case include => Length, Numbers, Characters => Re-render when these 3 change.
Each re-render generates a new password.
Dependencies are passed in an array.
Empty dependency array means this effect runs only once, after the initial render


## 3. useRef:
- kisi bi cheez ka reference lena hota hai, tab useRef hook ata hai.
- In our case, we used it to highlight the password we copied.

#### usage:
- use karne ke liye, need to create a variable


### Some components of the project we made:
#### 1. The input box:
```javascript
<input
    type="text"             // type of input
    value={password}        // save value in password variable
    className="outline-none w-full py-1 px-3"   // styling using Tailwind CSS
    placeholder="Password"  // have 'password' written in the box, light gray colored
    readOnly                // read only, can't select or edit the 'password'
    ref={passwordRef}       // reference for useRef hook
/>
```
#### 2. The copy button:
```javascript
<button
    className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"    // style
    onClick={copyPasswordToClipboard}          // onClick run the copyPasswordToClipboard method
    >                                                 
    copy
</button>
```
#### 3. The slider:
```javascript
<input
    type="range"                // input type - range 
    min={8}                     // min value of range
    max={30}                    // max value of range
    value={length}              // save value of range in length variable
    className="cursor-pointer"  // style
    onChange={(e) => {          
    setLength(e.target.value);  // onChange in range, change the value of length variable
    }}
/>
```
#### 4. The Check Boxes:
```javascript
<input
    type="checkbox"             // input type checkbox
    defaultChecked={numberAllowed}  // default value set to a boolean variable
    onChange={() => {
    setNumberAllowed((prev) => !prev); // whatever the previous value reverse it
    }}
/>
```
#### 5. Copy to Clip Board method in window object:
```javascript
const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);         // copy to clipboard
    passwordRef.current?.select()   // using this we highlight the password
    // passwordRef.current?.setSelectionRange(0, 3)       // if say we only want to select first 3 values
}, [password]);
```