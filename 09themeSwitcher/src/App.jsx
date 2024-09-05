import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeBtn";
import { ThemeProvider } from "./Context/Theme";
import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const htmlTag = document.querySelector("html");
    htmlTag.classList.remove("light", "dark");

    htmlTag.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-slate-500">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justif-center mb-4">
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
