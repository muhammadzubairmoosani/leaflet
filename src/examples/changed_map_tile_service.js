import { MapContainer, TileLayer } from "react-leaflet";

const defaultCenter = [38.8972, -77.0369];
const defaultZoom = 4;

export function ChangedMapTileService() {
  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom}>
      <TileLayer
        url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
        attribution="NASA Blue Marble, image service by OpenGeo"
        maxNativeZoom={8}
      />
    </MapContainer>
  );
}
