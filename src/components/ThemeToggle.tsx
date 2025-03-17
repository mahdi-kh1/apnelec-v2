"use client";

import { useTheme } from "@/context/ThemeContext";
import LineMdMoonTwotoneAltLoop from "../../public/icons/LineMdMoonTwotoneAltLoop";
import LineMdSunRisingTwotoneLoop from "../../public/icons/LineMdSunRisingTwotoneLoop";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
    >
      {theme === "dark" ? (
        <LineMdMoonTwotoneAltLoop />
      ) : (
        <LineMdSunRisingTwotoneLoop />
      )}
    </button>
  );
};

export default ThemeToggle;