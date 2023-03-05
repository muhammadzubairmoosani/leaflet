import { Circle, MapContainer, Polygon, TileLayer } from "react-leaflet";
import {
  circleLocation1,
  circleLocation2,
  circleLocation3,
  circleLocation4,
  circleLocation5,
  hollywoodStudiosPolygon,
} from "../utils/data";

const zoom = 12;

export function Polygons() {
  return (
    <MapContainer center={circleLocation1} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polygon
        color="blue"
        weight={10}
        opacity={0.8}
        positions={hollywoodStudiosPolygon}
      />

      <Circle center={circleLocation1} radius={400} color="magenta" />
      <Circle
        center={circleLocation2}
        color="green"
        dashArray="8"
        fillColor="cyan"
        radius={900}
      />
      <Circle
        center={circleLocation3}
        radius={400}
        color="magenta"
        className="circle-magic-kingdom"
      />
      <Circle center={circleLocation4} radius={400} color="teal" />
      <Circle
        center={circleLocation5}
        radius={400}
        stroke={false}
        color="red"
        opacity={1}
        fillOpacity={0.6}
        dashOffset={12}
      />
    </MapContainer>
  );
}
