import "./singlePage.scss"
import Filter from '../../components/filter/Filter'
import Map from '../../components/map/Map'
import Card from "../../components/card/Card";
import Features from "../../components/features/Features";
import { FaArrowCircleLeft, FaArrowCircleRight, FaWhatsapp, FaShare } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiFillFlag } from "react-icons/ai";
import { Link } from 'react-router-dom'





const proprety = {
  title: " شقة للإيجار في شارع 3 (ب) ، حي النزهة ، الدمام ، الدمام",
  price: 1500,
  billingType: "mounthly",
  desc: [
    "شقة للإيجار في حي الياقوت بجدة",
    " غرف كبيرة، ٥.٥*٥ و ٤*٥",
    " مكونة من 4 غرف + صالة + مطبخ + 2 دورات مياه",
    " تشطيبات فاخر",
    " شبابيك كبيرة (لا تحتاج إضاءة في النهار)",
    " أسقف مرتفعة",
    "  مطبخ كبير وحمام كبير مع بانيو",
    "  بلك عازل للصوت والحرارة والرطوبة",
    "عداد كهرباء مستقل",
    "إنارة ليد موفرة للطاقة (أبيض وأصفر)",
    " التكييف إسبليت (مواسير النحاس راكبة)",
    " أمام المسجد، خلف مجمع المدارس الجديد والخدمات",
    " ستالايت مركزي جاهز",
    "  سخان مركزي لجميع الحمامات والمطبخ",
    "  جبس كامل",
    " يوجد مصعد",
  ]

}


const advertiserInfos = {
  id: 23,
  name: "محمد أفروخ",
  profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  totalStars: 30,
  starsNumber: 9
}




const SinglePage = () => {
  return (
    <div className='single-page'>
      <Filter />
      <div className="header-links">
        <Link to={""}> الرئيسية</Link>
        {">"}
        <Link to={""}>فلل للبيع</Link>
      </div>

      <h1 className='title'>{proprety.title} </h1>

      <div className="imgs-container">
        <div className="main">
          <img className='main-img' src="./main.webp" alt="" />
          <div className="img-count">
            <img className='icon' src="./image.png" alt="" />
            <span>الصور (14)</span>
          </div>
        </div>
        <div className="others">
          <img src="./1.webp" alt="" />
          <img src="./2.webp" alt="" />
          <img src="./3.webp" alt="" />
          <img src="./4.webp" alt="" />
        </div>
      </div>
      <span className="price">{proprety.price} درهم /{proprety.billingType === "mounthly" ? "شهري" : "سنوي"} </span>

      <div className="details">
        {
          proprety.desc.map(item => (
            <p className="detail" key={item}>{item}</p>
          ))
        }
      </div>

      <Features />

      <Map lat={26.398797} lng={50.0906909} zoom={13} />

      <div className="advertiser-infos">
        <h3>معلومات المعلن</h3>
        <div className="infos">
          <img src={advertiserInfos.profilePic} alt="" className="avatar" />
          <Link to={"/profile/12"}>
            <span className="name">
              <img src="./correct.png" alt="" />
              {advertiserInfos.name}
            </span>
          </Link>
          <div className="stars">
            {
              Array(Math.round(advertiserInfos.totalStars / advertiserInfos.starsNumber))
                .fill(0)
                .map((item, i) => (
                  <img key={i} src="./star.png" alt="" className="star" />
                ))
            }
            <span>({advertiserInfos.starsNumber})</span>
          </div>

          <div className="btns">
            <button> <IoMdCall className='icon' /> اتصال</button>
            <button> <FaWhatsapp className='icon' /> مراسلة</button>
          </div>

        </div>
      </div>

      <div className="services">
        <div className="service">
          <FaArrowCircleRight className="icon arrow" />
          السابق
        </div>
        <div className="service">
          <CiHeart className="icon" />
          المفضلة
        </div>
        <div className="service">
          <FaShare className="icon share" />
          مشاركة
        </div>
        <div className="service">
          <AiFillFlag className="icon report" />
          إبلاغ
        </div>
        <div className="service">
          <FaArrowCircleLeft className="icon arrow" />
          التالي
        </div>
      </div>

      <div className="similar-posts">
        <h3>إعلانات مشابهة</h3>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  )
}

export default SinglePage