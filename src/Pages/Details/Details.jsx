import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { culturalHeritages, touristPlaces } from "../../constants";
import axios from "axios";
import Map from "../../components/Map/Map";
import {
  FaWifi,
  FaSwimmingPool,
  FaCoffee,
  FaParking,
  FaUtensils,
  FaCogs,
} from "react-icons/fa";
// Hotel Card Component
const HotelCard = ({ hotel }) => {
  // A helper function to determine the icon for each amenity
  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <FaWifi className="text-blue-500" />;
      case "swimming pool":
        return <FaSwimmingPool className="text-blue-500" />;
      case "coffee":
        return <FaCoffee className="text-brown-500" />;
      case "parking":
        return <FaParking className="text-gray-600" />;
      case "restaurant":
        return <FaUtensils className="text-red-500" />;
      default:
        return <FaCogs className="text-gray-500" />; // Default icon for unknown amenities
    }
  };

  return (
    <div className="hotel-card p-4 bg-white rounded-lg shadow-lg flex flex-col items-start max-w-xs mx-auto">
      <img
        src={hotel.img}
        alt={hotel.name}
        className="w-full h-32 object-cover rounded-lg mb-4 shadow-sm"
      />
      <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
      <p className="text-gray-600 text-sm">{hotel.location}</p>
      <p className="text-gray-700 mt-2 text-sm">{hotel.description}</p>

      <div className="mt-3 w-full">
        <h4 className="text-md font-medium text-gray-800 mb-2">Amenities:</h4>
        <ul className="list-inside text-gray-600">
          {hotel.amenities.map((amenity, index) => (
            <li key={index} className="flex items-start mb-2">
              <span className="mr-2">{getAmenityIcon(amenity)}</span>
              <span className="text-sm">{amenity}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 w-full text-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

const Details = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [distance, setDistance] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [placeCoordinates, setPlaceCoordinates] = useState(null);

  const geocodingApiKey = "1930f5e639b649d99651106ac130c5a2";

  useEffect(() => {
    const placeData = [...culturalHeritages, ...touristPlaces].find(
      (item) => item.id === parseInt(id)
    );
    setPlace(placeData);

    if (placeData) {
      const placeLocation = placeData.location;
      fetchCoordinates(placeLocation);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setUserLocation(position.coords),
        (error) => console.error("Error getting user location:", error)
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [id]);

  const fetchCoordinates = async (locationName) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${locationName}&key=${geocodingApiKey}`
      );
      const result = response.data.results[0];
      if (result) {
        const { lat, lng } = result.geometry;
        setPlaceCoordinates({ lat, lng });
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const handleRouteCalculated = (routeData) => {
    if (routeData && routeData.distance) {
      setDistance((routeData.distance / 1000).toFixed(2));
    }
  };

  return (
    <section className="p-4 bg-gray-100 rounded-lg shadow-md">
      {place ? (
        <div>
          {/* Video Player */}
          <div className="w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-4">
            {place.vid ? (
              <video
                className="w-full h-[350px] object-cover"
                src={place.vid}
                autoPlay
                controls
                playsInline
                preload="auto"
                poster={place.imageUrl}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={place.imageUrl}
                alt={place.name}
                className="w-full h-[350px] object-cover"
              />
            )}
          </div>

          {/* Place Details */}
          <h1 className="text-2xl font-bold text-[#333]">{place.name}</h1>
          <h2 className="text-lg text-gray-600 mb-2 font-semibold">
            Location: {place.location}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {place.detailedDescription}
          </p>

          {/* Hotel Cards */}
          <h1 className="text-2xl font-bold">Nearby Hotels</h1>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-3">
            {place.hotels && place.hotels.length > 0 ? (
              place.hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))
            ) : (
              <p>No hotels available for this place.</p>
            )}
          </div>

          <h1 className="text-2xl font-bold mt-8 mb-2 text-[#333]">Map</h1>
          {/* Distance Information */}
          {distance ? (
            <p className="text-sm font-semibold text-blue-600">
              The distance from your current location to{" "}
              <span className="font-bold text-xl">{place.name}</span> is{" "}
              <span className="font-bold text-xl">{distance}</span> km.
            </p>
          ) : (
            <p className="text-sm text-gray-500">Loading distance...</p>
          )}

          {/* Map */}
          {userLocation && placeCoordinates && (
            <Map
              userLocation={userLocation}
              placeCoordinates={placeCoordinates}
              onRouteCalculated={handleRouteCalculated}
            />
          )}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading place details...</p>
      )}
    </section>
  );
};

export default Details;
