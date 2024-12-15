import React from "react";
import SearchBar from "../../components/Searchbar/SearchBar";
import Map from "../../components/Map/Map";
const Home = () => {
  return (
    <section>
      <h1 className="text-red-600 text-2xl font-bold bg-orange-400 h-20">
        This is Home PAGE
      </h1>
      <div className="flex items-center justify-center absolute top-16 left-1/2 transform -translate-x-1/2">
        <SearchBar />
      </div>
      {/* <Map /> */}
    </section>
  );
};

export default Home;
