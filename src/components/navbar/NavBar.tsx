import React, { useState } from 'react';
import "./navBar.scss";
import { Link } from 'react-router-dom';


const NavBar: React.FC = () => {


  const [openMenu, setOpenMenu] = useState<boolean>(false)



  return (
    <div className="navbar">
      <nav>
        <img
          onClick={() => setOpenMenu(true)}
          src="./menu-icon.png"
          alt="" className="menu"
        />
        <Link to={"/"}>
          <h1 className='logo-name'>سكني</h1>
        </Link>
        <div className="nav-links">
          <Link to={"/"}>الرئيسية</Link>
          <Link to={"/companies"}>الشركات العقارية</Link>
          <Link to={"/contract"}>طلب عقد إلكتروني</Link>
          <Link to={"/about"}>من نحن</Link>
          <Link to={"/contactUs"}>تواصل معنا</Link>
        </div>

        <div className="nav-btns">
         <Link to={"/add-proprety"}> <button> إضافة عقار </button></Link>
          <Link to={"/signin"}><button>تسجيل الدخول</button></Link>
        </div>
      </nav>

      <div className={`mobile-nav ${openMenu && 'active'}`}>
        <span onClick={() => setOpenMenu(false)} className="exit">X</span>
        <div className="wrapper">
          <Link to={"/"}>الرئيسية</Link>
          <Link to={"/companies"}>الشركات العقارية</Link>
          <Link to={"/contract"}>طلب عقد إلكتروني</Link>
          <Link to={"/about"}>من نحن</Link>
          <Link to={"/contactUs"}>تواصل معنا</Link>
        </div>
      </div>


    </div>
  )
}

export default NavBar