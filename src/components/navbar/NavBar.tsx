import React, { useState } from 'react';
import "./navBar.scss";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {

  const [opMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="nav-bar">
      <header>
        <div className="phone">
          <LocalPhoneIcon/>
          <span>+212633502726</span>
        </div>
        <div className="phemailone">
          <EmailIcon/>
          <span>mohamedtea22@gmail.com</span>
        </div>
      </header>
      <nav>
        <div className="left">
          <a href='' className="logo">
            <img src="3aqar.png" alt="" />
            <Link to={"/"}><span>3aqar.<i>city</i></span></Link>
          </a>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/agents"}>Agents</Link>
          </div>
        </div>
        <div className="right">

          <img onClick={() => setOpenMenu(!opMenu)} className='menu-img' src="menu.png" alt="" />

          <div className={opMenu ? 'menu active' : 'menu'}>
          <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/agents"}>Agents</Link>
            <Link to={"/login"}>Sign in</Link>
            <Link to={"/register"}>Sign up</Link>
          </div>

          <Link to={"/login"} className='button'>Sign in</Link>
            <Link to={"/register"} className='button'>Sign up</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar