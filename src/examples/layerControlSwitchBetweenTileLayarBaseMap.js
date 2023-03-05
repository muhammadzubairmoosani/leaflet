import { MapContainer, TileLayer, LayersControl } from "react-leaflet";

const { BaseLayer } = LayersControl;
const defaultCenter = [38.8972, -77.0369];
const defaultZoom = 6;

export function LayerControlSwitchBetweenTileLayarBaseMap() {
  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom}>
      <LayersControl>
        <BaseLayer checked name="Open Street Map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>

        <BaseLayer name="NASA Blue Marble">
          <TileLayer
            url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
            attribution="NASA Blue Marble, image service by OpenGeo"
            maxNativeZoom={8}
          />
        </BaseLayer>
      </LayersControl>
    </MapContainer>
  );
}
