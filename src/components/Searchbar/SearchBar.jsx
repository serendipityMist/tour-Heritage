import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { culturalHeritages, touristPlaces } from "../../constants";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const searchBarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        setIsExpanded(false);
        setFilteredResults([]);
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
      setIsExpanded(false); // Collapse if input is empty
      return;
    }

    const combinedData = [...culturalHeritages, ...touristPlaces];
    const filtered = combinedData.filter(
      (item) =>
        item.location.toLowerCase().includes(input.toLowerCase()) ||
        item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredResults(filtered);
    setIsExpanded(filtered.length > 0); // Expand if there are results
  };

  const handleResultClick = (id) => {
    navigate(`/details/${id}`);
    setIsExpanded(false); // Close the search bar
    setFilteredResults([]); // Clear results
    setQuery(""); // Optionally clear the query
  };

  return (
    <div
      ref={searchBarRef}
      className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:max-w-md md:max-w-lg text-center"
    >
      <input
        type="text"
        placeholder="Search location"
        value={query}
        onChange={handleInputChange}
        className="w-full p-3 bg-transparent placeholder-white border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-300 text-white"
      />
      {/* Heading */}
      <p className="relative z-10 mt-4 text-2xl font-serif sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
        Where Would You Like To Go?
      </p>

      {/* Dropdown List */}
      {isExpanded && filteredResults.length > 0 && (
        <ul className="absolute z-10 w-full sm:max-w-md md:max-w-lg bg-gray-800/80 backdrop-blur-lg border border-gray-600/50 rounded shadow-lg mt-2 max-h-60 overflow-y-auto">
          {filteredResults.map((item) => (
            <li
              key={item.id}
              onClick={() => handleResultClick(item.id)}
              className="p-2 text-white hover:bg-gray-700 cursor-pointer"
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
