import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    function onSuccess(pos) {
      setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      console.log("User Location:", pos.coords);
    }

    function onError(err) {
      setError(`Error retrieving location: ${err.message}`);
      console.error(err);
    }

    const watcher = geo.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true, // Requests more accurate positioning
      timeout: 10000, // Maximum time allowed to get position
      maximumAge: 0, // Prevent caching of location
    });

    return () => geo.clearWatch(watcher);
  }, []);

  return { position, error };
}
