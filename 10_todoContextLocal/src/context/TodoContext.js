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
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
});

// custom hook to return context
export const useTodo = () => {
    return useContext(TodoContext);
};

// export provider also
export const TodoProvider = TodoContext.Provider;
