import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})

// for wrap with ThemeProvider
export const ThemeProvider = ThemeContext.Provider;

// custom hook - useTheme returns context and the values in the context
export default function useTheme() {
    return useContext(ThemeContext)
}