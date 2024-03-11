# Redux Toolkit Crash Course

### Flux => Redux => Redux Toolkit

### 1. Concepts in Redux / Redux Toolkit:

1. Store (Global Variable)
2. Reducers (Controls the change in store (mini portions of store))
3. useSelector (for selection some value from the store)
4. useDispatch (for dispatching some value to store)

### 2. Installation in an Existing App:

In terminal execute these two commands:

```js
npm install @reduxjs/toolkit
```

```js
npm install react-redux
```

### Setup

1. Create store:

   - in app folder create store.js
   - import configureStore from @reduxjs/toolkit
   - create store variable and export it as follows:
     ```js
     import { configureStore } from "@reduxjs/toolkit";

     export const store = configureStore({
     });
     ```
   - After creating reducers in todoSlice: be sure to import reducers
     ```js
     import { configureStore } from "@reduxjs/toolkit";

     export const store = configureStore({
       reducer: todoReducer, // imported reducers from todoSlice
     });
     ```
   - After we created AddTodo using useDispatch: now we need to list all todos we created.
    Where will we get all the todos from? We know the initial state of todos to be an array.
    We can loop through the array and get all the values. Where will we get the values from?
    From the store itself. But how do we take it from store?

2. Create Reducers / Slices:

   - in features/todo create a file todoSlice.js
   - import createSlice and nanoid (method to generate unique id)
   - initialState of store:

     ```js
     const initialState = {
       todos: [{ id: 1, text: "Hello World" }],
     };
     ```

   - create slice (just a bigger version of reducer) (reducer is just a functionality).
     Using createSlice create slice. createSlice method takes in objects. Naming slices
     should be done properly (they are displayed in the chrome extension of redux toolkit).
     As we see, createSlice method takes in name, initialState and reducers. Reducers contain
     properties and function. Reducers are responsible to update the store. Here is a
     difference between Context API and Redux toolkit, in Context API we only decalred
     methods and didn't define them. In Redux toolkit, we define the methods. The methods
     will have access to 2 things - state and action.

   - The 'state' represents the current state of the Redux slice being managed
     by the reducer, and 'action' represents the dispatched action object, which typically
     includes a type field indicating the action type and an optional payload field containing
     additional data. Actions is the only way your application can interact with the store.

     ```js
        export const todoSlice = createSlice({
          name: "todo", // name property is in redux toolkit
          initialState, // which was declared up top
          reducers: {
            addTodo: (state, action) => {
              // creating todo
              const todo = {
                id: nanoid(), // for unique id
                text: action.payload, //
              };
              // now we update state
              state.todos.push(todo); // state => then access the state (todos) and push
            },
            removeTodo: (state, action) => {
              state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
              );
              // update state with todos excluding the id we want to remove
            },
            updateTodo: (state, action) => {
              const todo = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                  return { ...todo, action.payload.text };
                }
                return todo;
              });
            },
          },
        });
     ```

   - In the end export all the functionalities. From todoSlice export all functionalities.

     ```js
     export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
     ```

   - Need to aware the store about all the reducers:

     ```js
     export default todoSlice.reducer;
     ```

   - Summary of Reducers / Slices:

     1. Importing createSlice and nanoid.
     2. Create the initial state as an object.
     3. create slice using createSlice.
     4. exporting all the functionalities.
     5. exporting all reducers (for store)

   - createSlice summary;
     1. name,
     2. initialState,
     3. reducers - to update state based on actions.
        - reducer_name = (state, action) => newState

3. Dispatch:

- Dispatch is way to add value in the store using reducers.
- In Redux Toolkit, you typically use the useDispatch hook to dispatch actions
  from your React components. Here's how you can use useDispatch in combination
  with React and Redux Toolkit:

  1. Import 'useDispatch': First, import the useDispatch hook from 'react-redux'.
     ```js
     import { useDispatch } from "react-redux";
     ```
  2. Call useDispatch: Next, call the useDispatch hook inside your functional
     component to get a reference to the dispatch function.
     ```js
     const dispatch = useDispatch();
     ```
  3. Dispatch Actions: You can now use the dispatch function to dispatch actions from
     your component. Typically, you dispatch actions in response to user interactions,
     lifecycle events, or asynchronous operations.
     ```js
     dispatch(someActionCreator());
     ```

- What we did in our todo project:

  1. Created components - AddTodo.jsx and Todo.jsx
  2. In AddTodo: 
      - Import useDispatch and import addTodo method from todoSlice
      - create a form having a input and a button
      - the form has a onSubmit handler method which will dispatch the addTodo method with value of
        action.payload as input.
      - syntax => dispatch(reducer(action.payload))

     ```jsx
     function AddTodo() {

       const [input, setInput] = useState("");
       const dispatch = useDispatch();

       const addTodoHandler = (e) => {
         e.preventDefault();
         dispatch(addTodo(input)); // calls addTodo method with value instead of action.payload as input
         setInput(""); // refresh input to empty
       };

       return (
         <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
           <input
             type="text"
             className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
             placeholder="Enter a Todo..."
             value={input}
             onChange={(e) => setInput(e.target.value)}
           />
           <button
             type="submit"
             className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
           >
             Add Todo
           </button>
         </form>
       );
     }
     export default AddTodo;
     ```

4. useSelector:

- For reading from the store.
- Now, we want to list all the todos, we access the data in the store which we stored in the store
  using useDispatcher.
- Here's how we use useSelector in react-redux:
  1. Import 'useSelector': First, import the 'useSelector' hook from the react-redux package.
    ```jsx
    import { useSelector } from 'react-redux';
    ```
  2. In the 'useDispatch' method, we get access to the 'state' within a callback function.
    ```jsx
    // say we want all the todos
    const todos = useSelector((state) => state.todos)
    ```

5. Finally, import store to main.jsx and import 'Provider' from react-redux and wrap <App /> in Provider.
  ```jsx
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  ```

## Summary:
1. Install Redux.
2. Create Store.
3. Create Slice / Reducers.
4. useDispatch.
5. useSelector.