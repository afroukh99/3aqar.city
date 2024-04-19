import React from 'react'
import "./map.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import Pin from '../pin/Pin';
import { listData } from '../../lib/data';



const Map: React.FC = () => {
  return (
    <MapContainer className='map' center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        listData.map(data => (
          <Pin key={data.id}  {...data} />
        ))
      }
    </MapContainer>
  )
}

export default Map