import React from "react";
import { culturalHeritages, touristPlaces } from "../../constants"; // Import both datasets
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

// This is the Explore Page
function Link3() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/details/${id}`); // Navigate to the details page
  };

  // Combine both culturalHeritages and touristPlaces into one array
  const combinedPlaces = [...culturalHeritages, ...touristPlaces];

  return (
    <section className="p-4 bg-gray-100">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Explore Cultural Heritages & Tourist Places
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {combinedPlaces.map((place) => (
          <Card
            data={place}
            key={place.id}
            onClick={() => handleCardClick(place.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default Link3;
