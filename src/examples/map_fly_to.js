import { useCallback, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const zoom = 12;
const magicKingdomLatLng = [28.3852, -81.5639];

export function MapFlyTo() {
  const mapRef = useRef();

  const flyToMagicKingdom = useCallback(() => {
    const { current: map } = mapRef;
    if (!map) return;
    map?.flyTo(magicKingdomLatLng, 14, { duration: 3 });
  }, [mapRef]);

  useEffect(() => {
    setTimeout(flyToMagicKingdom, 1000);
  }, [flyToMagicKingdom]);

  return (
    <MapContainer ref={mapRef} center={[39.5, -98.35]} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
