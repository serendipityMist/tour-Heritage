import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { culturalHeritages, touristPlaces } from "../../constants"; // Import your data
import axios from "axios"; // For making API requests
import Map from "../../components/Map/Map"; // Import the Map component

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
    ); // Find the place by ID
    setPlace(placeData);

    if (placeData) {
      const placeLocation = placeData.location;
      fetchCoordinates(placeLocation);
    }

    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position.coords);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [id]);

  // Fetch coordinates for a location (place) using the OpenCage API
  const fetchCoordinates = async (locationName) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${locationName}&key=${geocodingApiKey}`
      );
      const result = response.data.results[0]; // Get the first result
      if (result) {
        const { lat, lng } = result.geometry;
        setPlaceCoordinates({ lat, lng });
      } else {
        console.error("No coordinates found for the location");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  // Callback to update distance when route is calculated
  const handleRouteCalculated = (routeData) => {
    if (routeData && routeData.distance) {
      setDistance((routeData.distance / 1000).toFixed(2)); // Convert meters to kilometers
    }
  };

  return (
    <section className="border border-red-700 p-2">
      {place ? (
        <div>
          {/* the following div is a video holder */}
          <div className="w-full border bg-red-400">
            {/* <video src=""></video> */}
            <img src={place.imageUrl} alt="" className="w-full h-[350px]" />
          </div>
          <h1 className="text-2xl font-bold">{place.name}</h1>
          <h2 className="text-xl font-bold">{place.location}</h2>
          <p className="text-lg">{place.description}</p>

          {distance ? (
            <p>
              The distance from your current location to {place.name} is{" "}
              {distance} km.
            </p>
          ) : (
            <p>Loading distance...</p>
          )}

          {/* Pass user location and place coordinates to the Map */}
          {userLocation && placeCoordinates && (
            <Map
              userLocation={userLocation}
              placeCoordinates={placeCoordinates}
              onRouteCalculated={handleRouteCalculated} // Pass the callback
            />
          )}
        </div>
      ) : (
        <p>Loading place details...</p>
      )}
    </section>
  );
};

export default Details;
