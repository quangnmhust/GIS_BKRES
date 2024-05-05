import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
// import "./AreaCharts.scss";

const data = [
  {
    id: 1,
    name: "Jeans",
    percentValues: 70,
  },
  {
    id: 2,
    name: "Shirts",
    percentValues: 40,
  },
  {
    id: 3,
    name: "Belts",
    percentValues: 60,
  },
  {
    id: 4,
    name: "Caps",
    percentValues: 80,
  },
  {
    id: 5,
    name: "Others",
    percentValues: 20,
  },
];

const position = [51.505, -0.09];

const AreaProgressChart = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Map</h4>
        <div className="progress-bar">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default AreaProgressChart;
