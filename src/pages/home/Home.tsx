import "./home.scss"
import Filter from '../../components/filter/Filter'
import Header from "../../components/header/Header"
import Card from "../../components/card/Card"
import { Link } from "react-router-dom"

const Home = () => {


  return (
    <div className='home'>
      <Filter />
      <Header />
      <div className="cards-container">
        <Link to={"/4324"}>
        <Card />
        </Link>
        <Card />
        <Card />
        <Card />
      </div>
      <div className="pagination">
        <img className="icon" src="./right.png" alt="" />
        <span className="page">1</span>
        <span className="page">2</span>
        <span className="page">3</span>
        <span className="page">4</span>
        <img className="icon" src="./left.png" alt="" />
      </div>
    </div>
  )
}

export default Home