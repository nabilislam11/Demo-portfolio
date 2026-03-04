import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2 
        rounded-lg 
        bg-gray-200 dark:bg-gray-800 
        text-black dark:text-white
      "
    >
      {theme === "light" ? "🌙 Dark" : "☀ Light"}
    </button>
  );
};

export default ThemeToggle;