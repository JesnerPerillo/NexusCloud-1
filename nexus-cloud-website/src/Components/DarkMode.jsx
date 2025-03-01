import { useState, useEffect } from "react";
import '../darkmode.css';

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set the theme based on the saved preference or system preference
    const theme = savedTheme ? savedTheme : systemTheme ? "dark" : "light";
    setIsDark(theme === "dark");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      if (!savedTheme) {
        const newTheme = e.matches ? "dark" : "light";
        setIsDark(e.matches);
        document.documentElement.classList.toggle("dark", e.matches);
        localStorage.setItem("theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
        <input className="sr-only peer" type="checkbox" />
        <div onClick={toggleTheme}
            className="w-20 h-10 rounded-full bg-gradient-to-r from-white to-gray-400 peer-checked:from-white peer-checked:to-black transition-all duration-500 after:content-['🌙'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['☀️'] after:shadow-md after:text-lg"
        ></div>
        <span className="ml-3 text-sm font-medium text-gray-900"></span>
    </label>


  );
}
