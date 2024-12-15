import React, { useEffect, useRef, useCallback, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Map({
  userLocation,
  placeCoordinates,
  onRouteCalculated,
}) {
  // Unique identifier to prevent map container conflicts
  const mapContainerId = useRef(
    `map-${Math.random().toString(36).substr(2, 9)}`
  );

  // Refs to manage map and map-related objects
  const mapRef = useRef(null);
  const routingControlRef = useRef(null);
  const markersRef = useRef([]);

  // Memoize locations to prevent unnecessary re-renders
  const userLocationMemo = useMemo(
    () => ({
      latitude: userLocation?.latitude,
      longitude: userLocation?.longitude,
    }),
    [userLocation]
  );

  const placeCoordinatesMemo = useMemo(
    () => ({
      lat: placeCoordinates?.lat,
      lng: placeCoordinates?.lng,
    }),
    [placeCoordinates]
  );

  // Comprehensive cleanup function
  const cleanupMap = useCallback(() => {
    // Remove all markers
    if (markersRef.current) {
      markersRef.current.forEach((marker) => {
        if (mapRef.current) {
          mapRef.current.removeLayer(marker);
        }
      });
      markersRef.current = [];
    }

    // Remove routing control
    if (routingControlRef.current) {
      if (mapRef.current) {
        mapRef.current.removeControl(routingControlRef.current);
      }
      routingControlRef.current = null;
    }

    // Remove map entirely
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }
  }, []);

  useEffect(() => {
    // Validate user location
    if (!userLocationMemo.latitude || !userLocationMemo.longitude) {
      console.warn("User location is not available.");
      return;
    }

    // Ensure previous map is cleaned up
    cleanupMap();

    // Create new map instance
    mapRef.current = L.map(mapContainerId.current, {
      center: [userLocationMemo.latitude, userLocationMemo.longitude],
      zoom: 13,
      attributionControl: true,
      zoomControl: true,
      dragging: true,
      touchZoom: true,
      scrollWheelZoom: false,
    });

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
      minZoom: 3,
    }).addTo(mapRef.current);

    // Create user marker
    const userMarker = L.marker([
      userLocationMemo.latitude,
      userLocationMemo.longitude,
    ])
      .addTo(mapRef.current)
      .bindPopup("Your Location")
      .openPopup();

    markersRef.current.push(userMarker);

    // Create custom taxi icon
    const taxiIcon = L.icon({
      iconUrl: "/path/to/taxi-icon.png", // Replace with your icon path
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    // Add place marker if coordinates exist
    if (placeCoordinatesMemo.lat && placeCoordinatesMemo.lng) {
      const placeMarker = L.marker(
        [placeCoordinatesMemo.lat, placeCoordinatesMemo.lng],
        { icon: taxiIcon }
      )
        .addTo(mapRef.current)
        .bindPopup("Destination")
        .openPopup();

      markersRef.current.push(placeMarker);
    }

    // Map click event for routing
    const handleMapClick = (e) => {
      // Clear existing routing control
      if (routingControlRef.current) {
        mapRef.current.removeControl(routingControlRef.current);
      }

      // Create new markers
      const startMarker = L.marker([
        userLocationMemo.latitude,
        userLocationMemo.longitude,
      ]).addTo(mapRef.current);

      const endMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(
        mapRef.current
      );

      markersRef.current.push(startMarker, endMarker);

      // Create routing control
      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(userLocationMemo.latitude, userLocationMemo.longitude),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        routeWhileDragging: true,
        show: true,
        addWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,
      }).addTo(mapRef.current);

      // Handle route calculation
      routingControlRef.current.on("routesfound", (event) => {
        const routes = event.routes;
        if (routes && routes.length > 0) {
          const route = routes[0];
          onRouteCalculated &&
            onRouteCalculated({
              distance: route.summary.totalDistance,
              time: route.summary.totalTime,
              coordinates: route.coordinates,
            });

          // Optional: Animate marker along route
          const animateMarker = (marker, routeCoords) => {
            let currentIndex = 0;
            const animationInterval = setInterval(() => {
              if (currentIndex < routeCoords.length) {
                marker.setLatLng([
                  routeCoords[currentIndex].lat,
                  routeCoords[currentIndex].lng,
                ]);
                currentIndex++;
              } else {
                clearInterval(animationInterval);
              }
            }, 100);
          };

          animateMarker(endMarker, route.coordinates);
        }
      });

      // Error handling
      routingControlRef.current.on("routingerror", (error) => {
        console.error("Routing error:", error);
      });
    };

    // Add click event listener
    mapRef.current.on("click", handleMapClick);

    // Cleanup function
    return () => {
      // Remove click event
      if (mapRef.current) {
        mapRef.current.off("click", handleMapClick);
      }

      // Comprehensive cleanup
      cleanupMap();
    };
  }, [userLocationMemo, placeCoordinatesMemo, cleanupMap, onRouteCalculated]);

  return (
    <div
      id={mapContainerId.current}
      style={{
        height: "100%",
        width: "100%",
        minHeight: "400px",
        position: "relative",
        zIndex: 1,
      }}
    />
  );
}
