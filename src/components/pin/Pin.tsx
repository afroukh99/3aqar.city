import { Marker, Popup } from 'react-leaflet'
import { dataType } from '../../types/types'
import "./pin.scss"
import { Link } from 'react-router-dom'

const Pin = (props : dataType) => {
    return (
        <Marker  position={[props.latitude, props.longitude]}>
            <Popup>
                <div className="pin-container">
                    <img className='estate-img' src={props.img} alt="" />
                    <div className="pin-details">
                        <Link to={`/${props.id}`}>{props.title}</Link>
                        <span className='bedroom'>{props.bedroom} Bedroom</span>
                        <b className='price'>${props.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin