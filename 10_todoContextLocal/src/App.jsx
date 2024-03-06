import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  /* add todo: The logic here?
  we don't want to overwrite all todos with new todo, use callback in
  useState method to spread prev todos and add new todo after (or before)
  the spread, we set a unique id to the new todo by using Date.now() which 
  will have unique value every time we add a todo */
  const addTodo = (todo) => {
    // setTodos(todo)   --> this would overwrite all prev todos, instead:
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
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
  Mostly when we want to delete use filter loop.
  We want to filter out the todo we want to delete. 
  Delete todo with the id we passed and keep the rest of todos
  Which ever match the condition are filtered out and rest are set in new array */
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  /* Completed todo: Logic here?
  Loop through each todo object, check if the id matches.
  if matches => keep all the values in that particular todo and just change one value (completed)
                use spread operator then write the value you want to change, it overwrites.
  else => no change, keep it the same */
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // /* Local Storage */
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, toggleComplete, deleteTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
