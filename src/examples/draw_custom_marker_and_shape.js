import L from "leaflet";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";
import customMarkersAndShapsData from "../utils/geo-json.io.json";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const defaultCenter = [2.77427, 27.620817];
const defaultZoom = 8;

export function DrawCustomMarkerAndShape() {
  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={customMarkersAndShapsData} />
    </MapContainer>
  );
}
