import { Link } from "react-router-dom"
import "./header.scss"



const result = [
  " شقق للإيجار في مراكش (12) ",
  "شقق للإيجار في الدار البيضاء (32)",
  "شقق للإيجار في طنجة (22)",
  "شقق للإيجار أغادير (40)",
  "شقق للإيجار في الرباط (54)",
  "شقق للإيجار في فاس (13)",
  "المزيد"
]

const Header = () => {
  return (
    <div className='header'>
      <div className="header-links">
        <Link to={""}> الرئيسية</Link>
        {">"}
        <Link to={""}>فلل للبيع</Link>
      </div>
      <div className="results">
        {
          result.map(item => (
            <span key={item} className="item">{item}</span>
          ))
        }
      </div>
    </div>
  )
}

export default Header