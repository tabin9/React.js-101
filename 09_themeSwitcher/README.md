# Context API:

Here we will discuss a different way to create a context.

1. Create a file with suitable name, here theme.js.
   - In this example we see we can put a initial value of context in createContext.
   - In last project we didn't put any initial values. Here, we use an object
     as initial value. We also put two methods as initial values.
   - We also created a Context Provider, which we will use to wrap our components.
   - Then we created a custom hook - useTheme, which will return the context and
     all the initial values in the context.
   - Notice that we don't add functionality to the methods, we just declare them.

```js
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// for wrap with ThemeProvider
export const ThemeProvider = ThemeContext.Provider;

// custom hook - useTheme returns context and the values in the context
export default function useTheme() {
  return useContext(ThemeContext);
}
```

2. Now go to App.jsx or main.jsx and wrap the jsx in ThemeProvider.
   With ThemeProvider we need to access the values.

```jsx
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in a theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
```
