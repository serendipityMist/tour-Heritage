import { useEffect, useRef } from "react";
import leaflet from "leaflet";
import "leaflet-routing-machine";

export default function Map({ userLocation, placeCoordinates }) {
  const divRef = useRef(); // Ref for the map container
  const mapRef = useRef(null); // Ref for the Leaflet map instance
  const userMarkerRef = useRef(null); // Ref for the user marker
  const placeMarkerRef = useRef(null); // Ref for the place marker

  useEffect(() => {
    if (!userLocation.latitude || !userLocation.longitude) {
      console.error("User location is not available.");
      return;
    }

    // Initialize the Leaflet map only if it hasn't been initialized already
    if (!mapRef.current) {
      mapRef.current = leaflet
        .map(divRef.current)
        .setView([userLocation.latitude, userLocation.longitude], 13);

      // Add the tile layer (OpenStreetMap tiles)
      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(mapRef.current);
    }

    // Add or update user marker
    if (userMarkerRef.current) {
      mapRef.current.removeLayer(userMarkerRef.current); // Remove old user marker
    }

    userMarkerRef.current = leaflet
      .marker([userLocation.latitude, userLocation.longitude])
      .addTo(mapRef.current)
      .bindPopup("User's Location");

    // Add or update place marker
    if (placeCoordinates && placeCoordinates.lat && placeCoordinates.lng) {
      if (placeMarkerRef.current) {
        mapRef.current.removeLayer(placeMarkerRef.current); // Remove old place marker
      }

      placeMarkerRef.current = leaflet
        .marker([placeCoordinates.lat, placeCoordinates.lng])
        .addTo(mapRef.current)
        .bindPopup("Place");

      // Add routing
      leaflet.Routing.control({
        waypoints: [
          leaflet.latLng(userLocation.latitude, userLocation.longitude),
          leaflet.latLng(placeCoordinates.lat, placeCoordinates.lng),
        ],
        routeWhileDragging: true,
      }).addTo(mapRef.current);
    }

    // Adjust map to fit both markers in the view
    if (placeCoordinates && placeCoordinates.lat && placeCoordinates.lng) {
      const bounds = leaflet.latLngBounds(
        [userLocation.latitude, userLocation.longitude],
        [placeCoordinates.lat, placeCoordinates.lng]
      );
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [userLocation, placeCoordinates]);

  return <div id="map" ref={divRef} style={{ height: "100vh" }}></div>;
}
