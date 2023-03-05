import L from "leaflet";
import { useCallback, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import nationalParks from "../utils/national-parks.json";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const location = [39.5, -98.35];
const zoom = 4;

export function GeoJSONLocation() {
  const mapRef = useRef();

  const nationalParksCB = useCallback(() => {
    const { current: map } = mapRef;
    if (!map) return;

    const parksGeoJson = new L.GeoJSON(nationalParks, {
      onEachFeature: (feature = {}, layer) => {
        const { properties = {} } = feature;
        const { Name } = properties;
        if (!Name) return;
        layer.bindPopup(`<p>${Name}</p>`);
      },
    });
    parksGeoJson.addTo(map);
  }, [mapRef]);

  useEffect(() => {
    setTimeout(nationalParksCB, 1000);
  }, [nationalParksCB]);

  return (
    <MapContainer ref={mapRef} center={location} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
