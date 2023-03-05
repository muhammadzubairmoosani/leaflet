import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import { useCallback, useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const location = [0, 0];
const zoom = 4;

export function FullScreen() {
  const mapRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     const { current: map } = mapRef;
  //     map.on("fullscreenchange", handleOnToggleFullScreen);
  //   }, 1000);
  // }, []);

  // const handleOnToggleFullScreen = useCallback(() => {
  //   const { current: map } = mapRef;
  //   if (!map) return;

  //   console.log(`FullScreen: ${map.isFullsreen() ? "yes" : "no"}`);
  // }, [mapRef]);

  useEffect(() => {
    const { current: map } = mapRef;
    map?.on("fullscreenchange", handleOnToggleFullscreen);
  }, []);

  function handleOnToggleFullscreen() {
    const { current: map } = mapRef;
    console.log(`Fullscreen: ${map.isFullscreen() ? "yes" : "no"}`);
  }

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
