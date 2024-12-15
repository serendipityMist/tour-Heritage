import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { culturalHeritages, touristPlaces } from "../../constants";
import { FiSearch } from "react-icons/fi"; // Import the search icon

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false); // New: To control expansion
  const searchBarRef = useRef(null); // Ref to detect clicks outside
  const navigate = useNavigate();

  useEffect(() => {
    // Close search bar when clicking outside
    const handleClickOutside = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        setIsExpanded(false);
        setFilteredResults([]); // Clear results when collapsing
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === "") {
      setFilteredResults([]);
      return;
    }

    // Combine culturalHeritages and touristPlaces and filter based on location
    const combinedData = [...culturalHeritages, ...touristPlaces];
    const filtered = combinedData.filter(
      (item) =>
        item.location.toLowerCase().includes(input.toLowerCase()) ||
        item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  const handleResultClick = (id) => {
    navigate(`/details/${id}`);

    setFilteredResults([]);
  };

  return (
    <div ref={searchBarRef} className="relative w-full max-w-md mx-auto m-2">
      {
        <input
          type="text"
          placeholder="Search location"
          value={query}
          onChange={handleInputChange}
          className="w-full p-2 border border-black  rounded-xl focus:outline-black text-black"
          autoFocus
        />
      }

      {/* Dropdown List */}
      {filteredResults.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded shadow-lg mt-1 max-h-60 overflow-y-auto">
          {filteredResults.map((item) => (
            <li
              key={item.id}
              onClick={() => handleResultClick(item.id)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              <strong>{item.name}</strong> <span>({item.location})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
