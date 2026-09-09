import { createContext, useState } from "react";
export const ThemeContext = createContext<any>(null);
function ThemeProvider(props: any) {
    const [theme, setTheme] = useState("light");
    function changeTheme() {
        if (theme === "light") {
         setTheme("dark");
        }
        else {
        setTheme("light");
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
         {props.children}
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;
