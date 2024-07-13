import { useState } from "react";
import "../login/login.scss"
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Signup = () => {

  const [active, setActive] = useState("signup");

  return (
    <div className='login'>
      <h1>انضم إلى سكني</h1>
      <form action="">
        <div className="buttons">
          <Link to={"/signin"}>
            <span onClick={() => setActive("")} className={`${active === '' && 'active'}`}>تسجيل الدخول</span>
          </Link>
          <span onClick={() => setActive("signup")} className={`${active === 'signup' && 'active'}`} >إنشاء حساب</span>
        </div>
        <label htmlFor="">رقم الجوال</label>
        <input type="text" placeholder='الرجاء كتابة رقم الجوال ...' />
        <button className="">إرسال رمز التحقق</button>
      </form>
    </div>
  )
}

export default Signup