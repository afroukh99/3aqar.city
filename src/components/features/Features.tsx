import "./features.scss"
import { FaRoad, FaBed, FaRegEye } from "react-icons/fa";
import { MdFamilyRestroom, MdNumbers } from "react-icons/md";
import { RiSofaFill } from "react-icons/ri";
import { FaBath, FaNewspaper } from "react-icons/fa6";
import { RxDimensions } from "react-icons/rx";

import { Property } from "../../types/types";



const properties =
{
    streetWidth: 15,
    area: 100,
    familiesOrSingles: "families",
    bedrooms: 3,
    livingRooms: 2,
    bathrooms: 2,
    floor: 2,
    propertyAge: 3,
    elevator: false,
    kitchen: true,
    dateAdded: "20/06/2024",
    views: 403,
    announceNum: 31234,
    License: 432434
}



const Features = () => {
    return (
        <div className="details-container">
            <div className="row">
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <FaRoad className='icon' />
                            <span> عرض الشارع</span>
                        </div>
                    </div>
                    <span className="value">
                        {properties.streetWidth} م
                    </span>
                </div>
                <div className="item">
                    <div className="prop">
                        <div className="name">
                            <RxDimensions className='icon' />
                            <span>  المساحة   </span>
                        </div>
                    </div>
                    <span className="value">
                        {properties.area} (م2)
                    </span>
                </div>
            </div>

            <div className="row">
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <MdFamilyRestroom className='icon' />
                            <span>عوائل أم عزاب</span>
                        </div>
                    </div>

                    <span className="value">
                        {
                            properties.familiesOrSingles === "families" ?
                                "عوائل" :
                                "عزاب"
                        }
                    </span>

                </div>
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <FaBed className='icon' />
                            <span>   غرف النوم   </span>
                        </div>
                    </div>

                    <span className="value">
                        {properties.bathrooms}
                    </span>

                </div>
            </div>

            <div className="row">
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <RiSofaFill className='icon' />
                            <span>  الصالات   </span>
                        </div>
                    </div>

                    <span className="value">
                        {properties.livingRooms}
                    </span>

                </div>
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <FaBath className='icon' />
                            <span>   عدد دورات المياة   </span>
                        </div>
                    </div>

                    <span className="value">
                        {properties.bathrooms}
                    </span>

                </div>
            </div>

            <div className="row">
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <span>   الدور   </span>
                        </div>
                    </div>

                    <span className="value">
                        {properties.floor}
                    </span>

                </div>
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <span>   عمر العقار   </span>
                        </div>
                    </div>

                    <span className="value">
                        {properties.propertyAge}
                    </span>

                </div>
            </div>

            <div className="row">
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <span>   مصعد   </span>
                        </div>
                    </div>
                    {
                        properties.elevator ?
                            <img className="icon" src="./check.png" alt="" /> :
                            <img className="icon" src="./cancel.png" alt="" />
                    }

                </div>
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <span>   مطبخ   </span>
                        </div>
                    </div>
                    {
                        properties.kitchen ?
                            <img className="icon" src="./check.png" alt="" /> :
                            <img className="icon" src="./cancel.png" alt="" />
                    }
                </div>
            </div>

            <div className="row">
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <span>   تاريخ الاضافة   </span>
                        </div>
                    </div>

                    <span className="value">
                        {properties.dateAdded}
                    </span>

                </div>
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <FaRegEye className="icon" />
                            <span>   المشاهدات   </span>
                        </div>
                    </div>
                    <span className="value">
                        {properties.views}
                    </span>
                </div>
            </div>


            <div className="row">
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <MdNumbers className="icon" />
                            <span>    رقم الإعلان   </span>
                        </div>
                    </div>

                    <span className="value">
                        {properties.announceNum}
                    </span>

                </div>
                <div className="item">

                    <div className="prop">
                        <div className="name">
                            <FaNewspaper className="icon" />
                            <span>   رخصة الإعلان   </span>
                        </div>
                    </div>
                    <span className="value">
                        {properties.License}
                    </span>
                </div>
            </div>

        </div>

    )
}

export default Features