import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const position = [12.9716, 77.5946]; // Bangalore

export default function MapPreview({ radiusKm }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      {/* Map wala hissa */}
      <div className="min-w-0 flex-1 sm:min-w-50">
        <MapContainer
          center={position}
          zoom={11}
          zoomControl={false}
          style={{ height: "220px", width: "100%", borderRadius: 8 }}
        >
 <TileLayer
  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution="&copy; OpenStreetMap contributors"
  className="light-tiles"
/>   <Marker position={position} />
          <Circle
            center={position}
            radius={radiusKm * 1000}
            pathOptions={{ color: "#f59e0b", fillColor: "#f59e0b", fillOpacity: 0.15 }}
          />
        </MapContainer>
      </div>

      {/* Info card */}
      <div
        style={{
          width: "100%",
          maxWidth: 220,
          background: "#000000",
          color: "#fff",
          border: "1px solid #eee",
          borderRadius: 8,
          padding: 12,
          fontSize: 12,
        }}
      >
        <p style={{ margin: "0 0 10px" }}>
          <b>Your Location</b>
          <br />
          Bangalore, Karnataka
        </p>
        <p style={{ margin: "0 0 10px" }}>
          <b>Service Radius</b>
          <br />
          {radiusKm} km
        </p>
        <p style={{ margin: 0 }}>
          <b>Coverage Area</b>
          <br />
          Nearby areas will be shown to customers.
        </p>
      </div>
    </div>
  );
}