import { FaWhatsapp } from "react-icons/fa6";
import "./contract.scss"
import { IoMdCheckboxOutline } from "react-icons/io";



const Contract = () => {
  return (
    <div className="contract">
      <h1>عقود الإيجارالسكني والتجاري</h1>
      <section>
        <div className="top">
          <img src="./contract.png" alt="" />
          <p>تمكنك هذه الخدمة من توثيق عقود الإيجار من خلال منصة إيجار. سواء العقود السكنية أو التجارية</p>
        </div>
        <hr />
        <div className="down">
          <h2>لعمل عقد إيجار رسمي، الرجاء إرسال المستندات التالية عبر الواتساب:</h2>
          <div className="item">
            <img src="./checkmark.png" className="icon" alt="" />
            <span>صورة بطاقة المستأجر.</span>
          </div>
          <div className="item">
            <img src="./checkmark.png" className="icon" alt="" />
            <span>  صورة بطاقة المالك.</span>
          </div>
          <div className="item">
            <img src="./checkmark.png" className="icon" alt="" />
            <span>صورة الصك.</span>
          </div>
          <h2>ساعات العمل: </h2>
          <span>من الأحد الى الخميس.</span>
          <span>8 صباحاً - 4 عصراً</span>
          <button> <FaWhatsapp className='icon' />0500262899</button>
        </div>
      </section>
    </div>
  )
}

export default Contract