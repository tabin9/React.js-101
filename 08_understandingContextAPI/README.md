# Context API for state management:

The Context API in React is used for managing global state in an application. It
provides a way to pass data through the component tree without having to pass
props manually at every level.

"Global variable => Put all data in it"

1. Avoids prop drilling - passing props down multiple levels.
2. Centralized state management - makes it easier to share data between components.

### Redux:

Context API is React specific, redux is applicable in all other framework. It is a
powerful tool for managing the state of your application in a predictable way.

1. Redux for react - React-Redux
2. Redux easier version - Redux-Toolkit (RTK)
3. Zustand is also a library for state management.

### Steps for set up of Context API:

1. Create a context folder in source.
2. Create a file \_Name_Context.js. Mostly it is a JavaScript file, not jsx.

```js
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

In this file all we did was create a context, store it in a variable and export it. 3. Create a file \_Name_ContextProvider.jsx. It is a jsx file.
When we create a context we need to create a 'Provider'.

```js
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

- children: which ever props we want to keep the same; pass them as they are. (Jo bi
  aa raha hai usko as it is bejdo).
- Provider has a prop named 'value' which takes in values which are to be shared.

### Steps for consuming the Context API:

1. Can be done in App.jsx or even main.jsx.
2. Import UserContextProvider and wrap all other data inside of this.
3. Whatever component we put in between the UserContextProvider will have access.

```jsx
function App() {
  return (
    <UserContextProvider>
      <div className="bg-red-600">
        <h1 className="bg-gray-700 text-white p-5 text-4xl">
          Context API for State Management
        </h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}
```

4. Two components: 1 to learn how to send data and other to see how to access data.
   In Login component, we send data

- to send data in Login component:

```jsx
const [username, setUsername] = useState("");

const { setUser } = useContext(UserContext);

const handleSubmit = (e) => {
  e.preventDefault();
  setUser({ username, password });
};

return (
  <div>
    <h2 className="my-5 text-2xl underline bg-yellow-500 p-4">Login</h2>
    <input
      className="mx-5 pl-3 py-2"
      type="text"
      onChange={(e) => setUsername(e.target.value)}
      placeholder="username"
    />
    <button className="text-white py-2 px-5 bg-blue-700" onClick={handleSubmit}>
      Submit
    </button>
  </div>
);
```

- to access data in Profile component:

```jsx
const { user } = useContext(UserContext);

if (!user)
  return (
    <div className="text-2xl mt-4 underline  bg-yellow-500 p-4">
      Please Login
    </div>
  );

return (
  <>
    <div className="text-2xl mt-4 underline">Welcome {user.username}</div>
    <div>Password is {user.password}</div>
  </>
);
```
