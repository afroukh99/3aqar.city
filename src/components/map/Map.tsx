import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "./map.scss"
import "leaflet/dist/leaflet.css"

const Map = (props: {
  lat: number,
  lng: number,
  zoom: number
}) => {

  return (
    <MapContainer className='map' center={[props.lat, props.lng]} zoom={props.zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[26.398797, 50.0906909]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map