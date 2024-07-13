import "./footer.scss";
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";
import { ImCalculator } from "react-icons/im";
import { IoStatsChartSharp, IoPerson, IoNewspaperSharp } from "react-icons/io5";
import { FaFileSignature ,FaSquareInstagram  , FaXTwitter } from "react-icons/fa6";
import { BiSolidConversation } from "react-icons/bi";
import { FaFacebookSquare  ,FaLinkedin} from "react-icons/fa";





const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <section className="company">
            <img src="./3aqar.png" alt="" />
            <p>استكشف سوق العقارات مع <b>سكني</b> واحصل على العرض المناسب لك</p>
          </section>

          <section className="search-options">
            <h1>خيارات البحث</h1>
            <div className="options-wrapper">
              <ul className="options">
                <li><Link to={"/"}>شقق للإيجار</Link> </li>
                <li> <Link to={""}>فلل للإيجار</Link> </li>
                <li> <Link to={""}>دور للإيجار</Link> </li>
                <li> <Link to={""}>فلل للبيع</Link> </li>
              </ul>
              <ul className="options">
                <li> <Link to={"/"}>شقق للإيجار</Link> </li>
                <li> <Link to={""}>فلل للإيجار</Link> </li>
                <li> <Link to={""}>دور للإيجار</Link> </li>
                <li> <Link to={""}>فلل للبيع</Link> </li>
              </ul>
            </div>
          </section>

          <section className="search-options">
            <h1> روابط سريعة</h1>
            <div className="options-wrapper">
              <div className="options">
                <span className="active">
                  <IoMdAddCircle className="icon" />
                  <Link to={"/"}> إضافة إعلان</Link>
                </span>
                <span>
                  <IoMdAddCircle className="icon" />
                  <Link to={""}> دفع الرسوم</Link>
                </span>
                <span>
                  <ImCalculator className="icon" />
                  <Link to={""}> التمويل العقاري</Link>
                </span>
                <span>
                  <IoStatsChartSharp className="icon" />
                  <Link to={""}> متوسط الأسعار</Link>
                </span>

              </div>
              <div className="options">
                <span>
                  <FaFileSignature className="icon" />
                  <Link to={"/"}>عقود الإيجار</Link>
                </span>
                <span>
                  <IoPerson className="icon" />
                  <Link to={""}> شركاء النجاح</Link>
                </span>
                <span>
                  <IoNewspaperSharp className="icon" />
                  <Link to={""}>اتفاقية الاستخدام</Link>
                </span>
                <span>
                  <BiSolidConversation className="icon" />
                  <Link to={""}> اتصل بنا</Link>
                </span>
              </div>
            </div>
          </section>


        </div>
        <hr />
        <div className="down">
          <p className="copy-rights">كافة الحقوق محفوظة لتطبيق <b>سكني</b> 2024</p>
          <div className="social-links">
            <FaXTwitter className="icon" />
            <FaSquareInstagram className="icon" />
            <FaFacebookSquare className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer