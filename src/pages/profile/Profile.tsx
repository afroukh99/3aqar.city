import { IoMdCall } from "react-icons/io"
import "./profile.scss"
import { Link } from "react-router-dom"
import Card from "../../components/card/Card"


const advertiserInfos = {
  id: 23,
  name: "محمد أفروخ",
  profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  totalStars: 30,
  starsNumber: 9
}


const Profile = () => {
  return (
    <div className='profile'>
      <div className="informations">
        <img src={advertiserInfos.profilePic} alt="" className="avatar" />
        <Link to={"/profile/12"}>
          <span className="name">
            <img src="/correct.png" alt="" />
            {advertiserInfos.name}
          </span>
        </Link>
        <p className="date">الإنضمام: 30 نوفمبر 2020</p>
        <p className="desc">نستقبل عروضكم و طلباتكم بيع - شراء - تأجير - إدارة أملاك اراضي - فلل - تجاري - خام - شقق تمليك - تاجير</p>
        <div className="stars">
          {
            Array(Math.round(advertiserInfos.totalStars / advertiserInfos.starsNumber))
              .fill(0)
              .map((item, i) => (
                <img key={i} src="/star.png" alt="" className="star" />
              ))
          }
          <span>({advertiserInfos.starsNumber})</span>
        </div>

        <button> <IoMdCall className='icon' /> اتصال</button>
      </div>

      <hr />

      <div className="posts">
        <h3>إعلانات المستخدم</h3>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Profile