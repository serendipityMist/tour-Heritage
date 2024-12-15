import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { culturalHeritages, touristPlaces } from "../../constants"; // Import your data
import axios from "axios"; // For making API requests
import Map from "../../components/Map/Map"; // Import the Map component

const Details = () => {
  const { id } = useParams(); // Get the id from URL params
  const [place, setPlace] = useState(null);
  const [distance, setDistance] = useState(null); // State to hold the distance
  const [userLocation, setUserLocation] = useState(null); // State to hold user's current location
  const [placeCoordinates, setPlaceCoordinates] = useState(null); // State to hold the place's coordinates

  const geocodingApiKey = "1930f5e639b649d99651106ac130c5a2"; // Replace with your API key

  useEffect(() => {
    // Fetch the place details based on the id from URL
    const placeData = [...culturalHeritages, ...touristPlaces].find(
      (item) => item.id === parseInt(id)
    ); // Find the place by ID
    setPlace(placeData);

    // Fetch place coordinates based on the location name
    if (placeData) {
      const placeLocation = placeData.location; // Assuming location is just the name (e.g., "Kathmandu")
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

  useEffect(() => {
    // Once the user's location and place data are available, calculate the distance
    if (userLocation && placeCoordinates) {
      const { latitude, longitude } = userLocation;
      const { lat, lng } = placeCoordinates;

      // Ensure both coordinates are available before calculating distance
      if (latitude && longitude && lat && lng) {
        const userLatLng = L.latLng(latitude, longitude);
        const placeLatLng = L.latLng(lat, lng);

        // Calculate the distance in kilometers
        const distanceInKm = userLatLng.distanceTo(placeLatLng) / 1000; // Distance in kilometers
        setDistance(distanceInKm.toFixed(2)); // Store the distance with 2 decimal points
      } else {
        console.error("Invalid coordinates for user or place");
      }
    }
  }, [userLocation, placeCoordinates]);

  return (
    <div>
      {place ? (
        <div>
          <h2>{place.name}</h2>
          <p>{place.location}</p>
          <p>{place.description}</p>

          {distance && userLocation ? (
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
            />
          )}
        </div>
      ) : (
        <p>Loading place details...</p>
      )}
    </div>
  );
};

export default Details;
