import { useState } from "react";

function SortOrder({ isDark, setSortingCriteria }) {
  const [activeButton, setActiveButton] = useState("All");

  function handleClick(buttonName) {
    setSortingCriteria(buttonName);
    setActiveButton(buttonName);
  }

  return (
    <div
      className={`${isDark ? "bg-darkMode-primary " : "bg-lightMode-primary"} p-4  ${isDark ? "text-darkMode-secondary " : "text-lightMode-secondary"} mx-2 flex items-center justify-between h-16  py-4 rounded text-base z-50 sm:w-[600px]`}
    >
      <button
        className={`${activeButton === "All" ? "text-sky-500" : ""}`}
        onClick={() => handleClick("All")}
      >
        All
      </button>

      <button
        className={`${activeButton === "Active" ? "text-sky-500" : ""}`}
        onClick={() => handleClick("Active")}
      >
        Active
      </button>
      <button
        className={`${activeButton === "Completed" ? "text-sky-500" : ""}`}
        onClick={() => handleClick("Completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default SortOrder;
