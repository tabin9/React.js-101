# React Router DOM:

In this project we want the header and footer to remain the same always and just the main content
changes. One way is to call the heaeder and footer in every path, but is not the optimized way.
The second way is create a file usually named - Route or Layout.
This is a common scenario faced, react-router-dom gives us 'Outlet', import it.

```jsx
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```

Outlet uses this layout as a base, wherever there is an Outlet we can give it a change and rest remains
the same, like in the above case, Header and Footer will remain the same but the center part will
change whenever we want. Using react-router-dom we can do nesting of components.

Now how to use this Layout?
Follow the RouterProvider steps down below.

### Installation:

npm i react-router-dom

### Building components 1 by 1:

#### 1. Components:

1. We see couple of new tags - <Link> and <NavLink>, they come with react-router-dom. Import them.
2. Link and NavLink are almost same, NavLink has more functionality. Link is used in place of <a>
   tag (<a> tag refreshes whenever we use it, that's why we use Link tag).
3. In place of href in <a> tag, we use - to='/' in Link and NavLink.
4. Notice that in <NavLink> we wrote CSS classes as a callback and in backticks. Why use this way?
   Say we are on the Home page, we need to highlight the 'Home' text on the UI. How to do that?
   Manipulate the callback function. When we write classes in this way we have access to a variable
   called {isActive}, use as follows:

```javascript
className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
```

#### 2. RouterProvider:

1. self closing tag which always takes in a param - router. There are 2 ways to create router.

```javascript
<RouterProvider router={router} />
```

##### 2.1. Creating router:

syntax:

```javascript
const router = createBrowserRouter([]);
```

Two ways to create it:

1. Routing through Objects inside an Array:

```jsx
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
]);
```

2. Routing using createRoutesFromElements

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Route>
  )
);
```

#### Taking some params from the URL: (Creating Route)

Say we want to take my name from the URL - http://localhost:5173/users/tabin. How to do so?

```jsx
<Route path="user/:userid" element={<User />}></Route>
```

Notice the :userid => remember userid, we have to use the same name in other places as well.
Now, we can access the userid in it's component User.jsx. We need to import __useParams__
from react-router-dom. Then do as follows:

```jsx
function User() {
  const { userid } = useParams();
  return <div>User: {userid}</div>;
}
```

#### Handling APIs:

1. Using useEffect (when the component loads, here when 'Github' loads), then we fetch
   the API and retrieve the data. Study the API to get what data you require, then inject it.

   ```jsx
   const [data, setData] = useState([]);
   useEffect(() => {
     fetch("https://api.github.com/users/tabin9")
       .then((response) => response.json())
       .then((data) => {
         setData(data);
       });
   }, []);
   ```

2. Using Loader (available in react-router-dom):
   If we need to fetch any data, we can call APIs directly from loader. Fetching starts before
   clicking on the component, here when we hover over 'Github' text in the Nav bar, the data
   is fetched. Loader directly in main.jsx. It is a more faster and optimized way.
   How to use a Loader? Export a variable storing the API data from the component:

```jsx
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/tabin9");
  return response.json;
};
```

In <Route> tag along with path and element, add loader as the API data imported.

```jsx
<Route
      loader={githubInfoLoader}
      path='github'
      element={<Github/>}
      >
```

Finally in the Github component use a hook - __useLoaderData__ as follows:

```jsx
const data = useDataLoader();
```
