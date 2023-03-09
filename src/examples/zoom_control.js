import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

const zoom = 8;
const location = [28.3852, -81.5639];

export function ZoomControlComponent() {
  return (
    <MapContainer center={location} zoom={zoom} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" zoomInText="🔥" zoomOutText="😊" />
    </MapContainer>
  );
}
