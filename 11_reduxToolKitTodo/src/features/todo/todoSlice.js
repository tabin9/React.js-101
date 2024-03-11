import { createSlice, nanoid } from '@reduxjs/toolkit';

// initial state of store:
const initialState = {
    todos: []
}

// create slice:
export const todoSlice = createSlice({
    name: "todo",      // name property is in redux toolkit
    initialState,      // which was declared up top
    reducers: {
        addTodo: (state, action) => {
            // creating todo
            const todo = {
                id: nanoid(),   // for unique id
                text: action.payload     // 
            }
            // now we update state
            state.todos.push(todo)    // state => then access the state (todos) and push
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            // update state with todos excluding the id we want to remove
        },
    }
})

// export all functionalities as actions
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

// export all reducers to store
export default todoSlice.reducer