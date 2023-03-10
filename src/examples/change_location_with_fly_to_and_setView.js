import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const defaultCenter = [38.9072, -77.0369];
const defaultZoom = 8;
const disneyWorldLatLng = [28.3852, -81.5639];
const disneyLandLatLng = [33.8121, -117.919];

export function ChangeLocationWithFlyToAndSetView() {
  const mapRef = useRef();

  const handleOnFlyTo = () => {
    const { current: map } = mapRef;
    map?.flyTo(disneyLandLatLng, 14, { duration: 2 });
  };
  const handleOnSetView = () => {
    const { current: map } = mapRef;
    map?.setView(disneyWorldLatLng, 14);
  };

  return (
    <div>
      <MapContainer ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <div className="sidebar">
        <h2>Disney World</h2>
        <p>Bay Lake, FL</p>
        <ul>
          <li>Lat: 28.3852</li>
          <li>Long: -81.5639</li>
        </ul>
        <p>
          <button onClick={handleOnSetView}>Set View to Disney World</button>
        </p>
        <h2>Disneyland</h2>
        <p>Anaheim, CA</p>
        <ul>
          <li>Lat: 33.8121</li>
          <li>Long: -117.9190</li>
        </ul>
        <p>
          <button onClick={handleOnFlyTo}>Fly to Disneyland</button>
        </p>
      </div>
    </div>
  );
}
