import Map from "../../components/map/Map"
import "./contactUs.scss"
import { FaFax } from "react-icons/fa";
import { PiMailboxBold } from "react-icons/pi";



const ContactUs = () => {
  return (
    <div className="contact">
      <h1>اتصل بنا</h1>
      <div className="up">
        <form action="">
          <input type="text" placeholder="الإسم*" />
          <input type="email" placeholder="البريد الإلكتروني*" />
          <input type="text" placeholder="رقم الهاتف*" />
          <input type="text" placeholder="عنوان الرسالة*" />
          <textarea rows={6} name="" id="" placeholder="نص الرسالة*"></textarea>
          <button>إرسال بريد إلكتروني</button>
        </form>
        <div className="map">
          <Map lat={24.7916345} lng={46.7729359} zoom={16} />
        </div>
      </div>

      <div className="down">
        <div className="right">
          <FaFax className="icon"/>
          <h2>الهاتف والفاكس</h2>
          <span>
            <img className="flag" src="./flag.png" alt="" />
            643002916
          </span>
        </div>
        <div className="left">
          <PiMailboxBold className="icon"/>
          <h2>العنوان</h2>
          <span>
            <img className="flag" src="./flag.png" alt="" />
            الرياض - حي الورود - العليا - مبنى رقم 6483
          </span>
        </div>
      </div>
    </div>
  )
}

export default ContactUs