import "./postDetails.scss";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ConstructionIcon from '@mui/icons-material/Construction';
import PaymentIcon from '@mui/icons-material/Payment';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MosqueIcon from '@mui/icons-material/Mosque';
import HeatPumpOutlinedIcon from '@mui/icons-material/HeatPumpOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import Map from "../map/Map";




const PostDetails: React.FC = () => {
  return (
    <div className='details-wrapper'>

      <section className="general-details">
        <h2>General</h2>
        <div className="inner">

          <div className="item">
            <WarehouseIcon fontSize="large" />
            <div>
              <span>Ware House</span>
              <p>Available</p>
            </div>
          </div>

          <div className="item">
            <ConstructionIcon fontSize="large" />
            <div className="">
              <span>Utilities</span>
              <p>Renter is responsible</p>
            </div>
          </div>

          <div className="item">
            <PaymentIcon fontSize="large" />
            <div className="">
              <span>Payment type</span>
              <p>Monthly</p>
            </div>
          </div>

          <div className="item">
            <FamilyRestroomIcon fontSize="large" />
            <div className="">
              <span>Families or Singles</span>
              <p>Families</p>
            </div>
          </div>
          <div className="item">
            <MosqueIcon fontSize="large" />
            <div className="">
              <span>Mosque</span>
              <p>90m away</p>
            </div>
          </div>

          <div className="item">
            <ApartmentOutlinedIcon fontSize="large" />
            <div className="">
              <span>Floor</span>
              <p>ground</p>
            </div>
          </div>

          <div className="item">
            <img src="./school.png" alt="" />
            <div className="">
              <span>School</span>
              <p>120m away</p>
            </div>
          </div>

          <div className="item">
            <HeatPumpOutlinedIcon fontSize="large" />
            <div className="">
              <span>conditioner</span>
              <p>Available</p>
            </div>
          </div>

        </div>
      </section>

      <section className="property-details">
        <h2>Property Details</h2>
        <div className="inner">
          <div className="item">
            <img src="./size.png" alt="" />
            <span>120 m</span>
          </div>
          <div className="item">
            <BathtubOutlinedIcon fontSize="large" />
            <span>2 Bathroom</span>
          </div>
          <div className="item">
            <BedOutlinedIcon fontSize="large" />
            <span>2 Bedroom</span>
          </div>
        </div>
      </section>

      <section className="map-section">
        <Map/>
      </section>




    </div>
  )
}

export default PostDetails