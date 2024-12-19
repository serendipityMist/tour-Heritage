import { useEffect, useRef, useCallback, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// Function to format distance
const formatDistance = (distanceMeters) => {
  if (distanceMeters < 1000) {
    return `${Math.round(distanceMeters)} m`;
  }
  return `${(distanceMeters / 1000).toFixed(2)} km`;
};

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
    // Validate user location and destination coordinates
    if (
      !userLocationMemo.latitude ||
      !userLocationMemo.longitude ||
      !placeCoordinatesMemo.lat ||
      !placeCoordinatesMemo.lng
    ) {
      console.warn(
        "User location or destination coordinates are not available."
      );
      return;
    }

    // Ensure previous map is cleaned up
    cleanupMap();

    // Create new map instance with zooming enabled
    mapRef.current = L.map(mapContainerId.current, {
      center: [userLocationMemo.latitude, userLocationMemo.longitude],
      zoom: 13,
      attributionControl: true,
      zoomControl: true,
      dragging: true,
      touchZoom: true,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      zoomAnimation: true,
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
      .bindPopup("Your Location");

    // Create destination marker
    const destinationMarker = L.marker([
      placeCoordinatesMemo.lat,
      placeCoordinatesMemo.lng,
    ])
      .addTo(mapRef.current)
      .bindPopup("Destination");

    markersRef.current.push(userMarker, destinationMarker);

    // Automatically create routing control with distance display
    routingControlRef.current = L.Routing.control({
      waypoints: [
        L.latLng(userLocationMemo.latitude, userLocationMemo.longitude),
        L.latLng(placeCoordinatesMemo.lat, placeCoordinatesMemo.lng),
      ],
      routeWhileDragging: true,
      show: true,
      addWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      // Custom line style
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: 0.7,
            weight: 5,
          },
        ],
      },
      // Enable distance display
      createMarker: function (i, waypoint, n) {
        return L.marker(waypoint.latLng, {
          draggable: true,
          // Optionally customize marker icons
          icon: L.divIcon({
            className: "route-marker",
            html: `<div style="background-color: blue; width: 12px; height: 12px; border-radius: 50%;"></div>`,
            iconSize: [12, 12],
          }),
        });
      },
    }).addTo(mapRef.current);

    // Handle route calculation
    routingControlRef.current.on("routesfound", (event) => {
      const routes = event.routes;
      if (routes && routes.length > 0) {
        const route = routes[0];

        // Extract distance directly from route summary
        const routeDistance = route.summary.totalDistance; // in meters
        const routeTime = route.summary.totalTime; // in seconds

        onRouteCalculated &&
          onRouteCalculated({
            distance: routeDistance,
            formattedDistance: formatDistance(routeDistance),
            time: routeTime / 60, // convert to minutes
            rawRouteTime: routeTime,
            coordinates: route.coordinates,
          });

        // Fit map to show entire route
        if (mapRef.current) {
          const bounds = L.latLngBounds([
            [userLocationMemo.latitude, userLocationMemo.longitude],
            [placeCoordinatesMemo.lat, placeCoordinatesMemo.lng],
          ]);
          mapRef.current.fitBounds(bounds, {
            padding: [50, 50],
            maxZoom: 15,
          });
        }
      }
    });

    // Error handling
    routingControlRef.current.on("routingerror", (error) => {
      console.error("Routing error:", error);
    });

    // Cleanup function
    return () => {
      // Comprehensive cleanup
      cleanupMap();
    };
  }, [userLocationMemo, placeCoordinatesMemo, cleanupMap, onRouteCalculated]);

  return (
    <div
      className="m-1 mb-4"
      id={mapContainerId.current}
      style={{
        height: "50%",
        width: "100%",
        minHeight: "400px",
        position: "relative",
        zIndex: 1,
      }}
    />
  );
}
