# Revising Context API and Introduction to Local Storage:

1. Creating context. Same steps as before.

   - create a file.
   - createContext. Set default values in a object.
   - create a custom hook which returns useContext.
   - notice here, the values we pass in are objects in an array.
   - context has 1 array of values and 4 methods (without functionality).
   - lastly, create a provider. We will wrap out jsx inside of provider in App.jsx.

   ```js
   import { createContext, useContext } from "react";

   // create context with default values
   export const TodoContext = createContext({
     todos: [
       {
         id: 1,
         todo: " Todo msg",
         completed: false,
       },
     ],
     addTodo: (todo) => {},
     updateTodo: (id, todo) => {},
     deleteTodo: (id) => {},
     toggleComplete: (id) => {},
   });

   // custom hook to return context
   export const useTodo = () => {
     return useContext(TodoContext);
   };

   // export provider also
   export const TodoProvider = TodoContext.Provider;

   // usage of provider in App.jsx:
   <TodoProvider
      value={{ todos, addTodo, updateTodo, toggleComplete, deleteTodo }}
    >
        <!-- JSX here -->
   </TodoProvider>
   ```

2. Editing App.jsx:

   - get UI for the todo app.
   - define functionality of the 4 methods, this is interesting.
   - notice usage of map and filter in functionality of some of these methods.

   ```jsx
   const [todos, setTodos] = useState([]);

   /* add todo: The logic here?
   we don't want to overwrite all todos with new todo, use callback in
   useState method to spread prev todos and add new todo after (or before)
   the spread, we set a unique id to the new todo by using Date.now() which 
   will have unique value every time we add a todo */
   const addTodo = (todo) => {
     // setTodos(todo)   --> this would overwrite all prev todos, instead:
     setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
   };

   /* update todo: The logic here?
   remember todos is an array of todo, we loop through it.
   match id of the todo we want to edit with id in array.
   if matched setTodos to todo else setTodos to prevTodo */
   const updateTodo = (id, todo) => {
     setTodos((prev) =>
       prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
     );
   };

   /* delete todo: Logic here?
   Loop through the todos array using filter. Why filter?
   We want to filter out the todo we want to delete. */
   const deleteTodo = (id) => {
     setTodos((prev) => prev.filter((todo) => todo.id !== id));
   };

   /* Completed todo: */
   const toggleComplete = (id) => {
     setTodos((prev) =>
       prev.map((prevTodo) =>
         prevTodo.id === id
           ? { ...prevTodo, completed: !prevTodo.completed }
           : prevTodo
       )
     );
   };
   ```

3. Local Storage:

   - Local storage is used primarily for persisting data across browser sessions.
     Without local storage, if you refresh the page, the data stored in memory by
     your JavaScript application will typically be lost, as the browser will reload
     the page and reset the application state.
   - Storing data locally allows you to provide a more seamless user experience by
     preserving data between page refreshes. Users can continue where they left off
     without losing their work or having to re-enter information.
   - When storing non-string data types such as objects or arrays in local storage,
     you need to convert them to JSON format using 'JSON.stringify()' before storing them.
     Local storage can only store data as strings, so converting your data to a JSON
     string allows you to preserve its structure and content.
   - When retrieving data from local storage, you'll also need to parse the JSON
     string back into its original data type using 'JSON.parse()'.
   - Syntax for localStorage:
     localStorage.setItem("key", "value");
     localStorage.getItem("key");

   - In our project, when the page loads getItem("todos") from Local Storage. Be
     sure to add convert the Items we get to JSON. Then set the data we got.

     ```jsx
     useEffect(() => {
       const todos = JSON.parse(localStorage.getItem("todos"));

       if (todos && todos.length > 0) {
         setTodos(todos);
       }
     }, []);
     ```

   - Updating the local storage - newer element should be added / setItem.
     This is a case when we use useEffect two times, we want to update storage,
     whenever there is a change in todos.
     ```jsx
     useEffect(() => {
       localStorage.setItem("todos", JSON.stringify(todos));
     }, [todos]);
     ```