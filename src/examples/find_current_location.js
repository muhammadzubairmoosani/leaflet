import L from "leaflet";
import { useCallback, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const location = [0, 0];
const zoom = 4;

export function FindCurrentLocation() {
  const mapRef = useRef();

  const getCurrentLocation = useCallback(() => {
    const { current: map } = mapRef;

    if (!map) return;

    map.locate({ setView: true });
    map.on("locationfound", handleOnLocationFound);
  }, [mapRef]);

  const handleOnLocationFound = (event) => {
    const { current: map } = mapRef;

    if (!map) return;

    const latlng = event.latlng;
    const radius = event.accuracy;
    const circle = L.circle(latlng, radius);

    circle.addTo(map);
  };

  useEffect(() => {
    setTimeout(() => {
      getCurrentLocation();
    }, 1000);
  }, [getCurrentLocation]);

  return (
    <MapContainer ref={mapRef} center={location} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
