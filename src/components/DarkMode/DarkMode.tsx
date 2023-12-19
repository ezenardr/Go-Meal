import { useEffect, useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(getCurrentTheme());
  function getCurrentTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  useEffect(
    function () {
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
    [darkMode]
  );
  return (
    <div>
      {darkMode ? (
        <button onClick={() => setDarkMode(false)}>Light</button>
      ) : (
        <button onClick={() => setDarkMode(true)}>Dark</button>
      )}
    </div>
  );
}
