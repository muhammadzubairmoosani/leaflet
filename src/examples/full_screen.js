import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const location = [0, 0];
const zoom = 4;

export function FullScreen() {
  const mapRef = useRef();

  return (
    <MapContainer
      fullscreenControl={true}
      ref={mapRef}
      center={location}
      zoom={zoom}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
