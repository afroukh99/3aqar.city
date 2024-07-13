import MySlider from "../../components/carousel/MySlider";
import "./companies.scss"
import { FaMapMarkerAlt } from "react-icons/fa";


const Companies = () => {
    return (
        <div className="companies">
            <header>
                <div className="map-search">
                    <input type="text" placeholder="إدخل الموقع" />
                    <FaMapMarkerAlt className="pin" />
                </div>
                <input className="name-search" type="text" placeholder="إسم الشركة او المكتب" />
                <button>ابحث</button>
            </header>
            <hr />
            <section className="companies-list">
                <MySlider>
                    <div className="company">

                        <img src="https://images.bayut.sa/thumbnails/1144094-240x180.webp" alt="" />
                        <div className="text">
                            <h4 className="name">سكن المعالي للعقارات</h4>
                            <span>42 عقار للبيع</span>
                        </div>
                    </div>

                    <div className="company">
                        <img src="https://images.bayut.sa/thumbnails/3793050-240x180.webp" alt="" />
                        <div className="text">
                            <h4 className="name"> مؤسسة طويق الثانية العقارية</h4>
                            <span>65 عقار للبيع</span>
                            <span>43 عقار للاجار</span>
                        </div>
                    </div>

                    <div className="company">
                        <img src="https://images.bayut.sa/thumbnails/1484392-240x180.webp" alt="" />
                        <div className="text">
                            <h4 className="name"> إسكان سلمان للتسويق العقاري</h4>
                            <span>12 عقار للبيع</span>
                        </div>
                    </div>


                    <div className="company">
                        <img src="https://images.bayut.sa/thumbnails/3792434-240x180.webp" alt="" />
                        <div className="text">
                            <h4 className="name"> شركة صروح المدائن للعقارات</h4>
                            <span>123 عقار للبيع</span>
                            <span>65 عقار للاجار</span>
                        </div>
                    </div>

               
                    <div className="company">
                        <img src="https://images.bayut.sa/thumbnails/3746409-240x180.webp" alt="" />
                        <div className="text">
                            <h4 className="name"> شركة نهضة التطور العقارية</h4>
                            <span>76 عقار للبيع</span>
                        </div>
                    </div>



                </MySlider>
            </section>
        </div >
    )
}

export default Companies