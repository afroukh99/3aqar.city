import "./card.scss"


const post = {
  title : "شقة للإيجار في شارع الكوفة ، حي الياسمين ، الرياض ، منطقة الرياض",
  price : 1500,
  billingType : "mounthly",
      desc :   " شقه سكنيه مكونه من خمس غرف و صاله وغرفة سائق و غرفة مدبرة منزل و غرفة غسيل مع اطلاله جزئية على البحر و تراس بمجمع سكني فاخر خاص يحتوي على نادي رياضي رجالي و نسائي و قاعات للمناسبات و مسبح و جلسات عائليه و العاب"
  
} 

const Card = () => {
  return (
    <div className='card'>
      <div className="container">
        <div className="card-details">
          <h1>{post.title}</h1>
          <span className="price">1500 درهم / شهري</span>
          <div className="property-features">
            <span className=''>3 <img src="./bed.png" alt="" /></span>
            <span className=''>2 <img src="./bath.png" alt="" /></span>
            <span className=''>1 <img src="./sofa.png" alt="" /></span>
            <span>| 90 م2</span>
          </div>
          <p className="description">{post.desc.slice(0,90)} ....</p>
        </div>
        <img  className='cover' src="./sa.webp" alt="" />
      </div>
    </div>
  )
}

export default Card