import { useState } from "react";
import "./login.scss"
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {

  const [active, setActive] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <div className='login'>
      <h1>انضم إلى سكني</h1>
      <form action="">
        <div className="buttons">
          <span onClick={() => setActive("")} className={`${active === '' && 'active'}`}>تسجيل الدخول</span>
          <Link to={"/signup"}>
            <span onClick={() => setActive("signup")} className={`${active === 'signup' && 'active'}`} >إنشاء حساب</span>
          </Link>
        </div>
        <label htmlFor="">رقم الجوال</label>
        <input type="text" placeholder='الرجاء كتابة رقم الجوال ...' />
        <label htmlFor="">كلمة المرور</label>
        <div className="password">
          <input type={`${showPass ? 'text' : 'password'}`} placeholder='الرجاء كتابة كلمة المرور ...' />
          {
            showPass ?
              <FaEye onClick={() => setShowPass(false)} className="eye" />
              :
              <FaEyeSlash onClick={() => setShowPass(true)} className="eye" />
          }
        </div>

        <button className="">دخول</button>
        <span>هل نسيت كلمة المرور؟</span>
      </form>
    </div>
  )
}

export default Login