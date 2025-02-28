import React, { useState, useEffect } from "react";
import { CiLight, CiDark } from "react-icons/ci";
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
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full text-black transition-all"
    >
      {isDark ? <CiLight className="text-2xl" /> : <CiDark className="text-2xl" />}
    </button>
  );
}
