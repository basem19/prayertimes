import { useState, useEffect, useRef } from "react";
import allGovernorates from "../data/index"; 

// eslint-disable-next-line react/prop-types
export default function SearchBasicExample({ cityNameValue }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const wrapperRef = useRef(null);
  const suggestionsRef = useRef(null);
  const activeSuggestionRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredSuggestions = allGovernorates.filter(
      (item) => item.name.toLowerCase().includes(value.toLowerCase()) // تعديل لتصفية حسب الاسم
    );
    setSuggestions(filteredSuggestions);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.name); // تحديث لعرض اسم المدينة
    setSuggestions([]);
    setShowSuggestions(false);
    cityNameValue(suggestion.name); // تمرير اسم المدينة فقط
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      if (activeSuggestionIndex < suggestions.length - 1) {
        setActiveSuggestionIndex((prevIndex) => prevIndex + 1);
      }
    } else if (e.key === "ArrowUp") {
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex((prevIndex) => prevIndex - 1);
      }
    } else if (e.key === "Enter") {
      const selectedSuggestion = suggestions[activeSuggestionIndex];
      if (selectedSuggestion) {
        setInputValue(selectedSuggestion.name); // عرض اسم المدينة
        setSuggestions([]);
        setShowSuggestions(false);
        cityNameValue(selectedSuggestion.name); // تمرير اسم المدينة فقط
      }
    }
  };

  useEffect(() => {
    if (activeSuggestionRef.current) {
      activeSuggestionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeSuggestionIndex]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative mb-3 m-auto rounded-lg pt-4 p-2 w-full md:w-1/2 lg:w-1/3 ltr"
    >
      <div className="relative flex w-full items-stretch ">
        <input
          type="search"
          className="block h-10 w-full flex-auto rounded-l-lg border border-r-0 border-solid bg-gray-950 px-3 py-2 text-base font-normal leading-6 text-white outline-none transition duration-200 ease-in-out border-blue-500 focus:text-white placeholder:text-gray-400"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          aria-label="Search"
          aria-describedby="button-addon1"
        />
        <button
          className="flex items-center rounded-r-lg bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800"
          type="button"
          id="button-addon1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul
          ref={suggestionsRef}
          className="bg-gray-700 text-white rounded-lg mt-2 absolute z-10 w-[97%;] h-[660px] overflow-y-auto"
          style={{ maxHeight: `${Math.min(suggestions.length * 40, 660)}px` }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              ref={index === activeSuggestionIndex ? activeSuggestionRef : null}
              className={`p-2 hover:bg-gray-600 cursor-pointer overflow-auto ${
                index === activeSuggestionIndex ? "bg-gray-600" : ""
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
