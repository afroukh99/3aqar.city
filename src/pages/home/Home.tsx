import React from 'react'
import "./home.scss"
import SearchSection from '../../components/searchSection/SearchSection'



const Home: React.FC = () => {
  return (
    <main>
      <section className='texts-section'>
        <div className="container">
          <h1>Discover Real Estate & Get Your Dream Home</h1>
          <p>Explore a diverse range of real estate options and uncover your ideal home sweet home. From cozy apartments to spacious houses, our estate listings offer something for every dreamer. Start your journey to finding the perfect place today</p>
          <SearchSection />

          <div className="details">
            <div className="item">
              <h2>1600+</h2>
              <span>Years Of Experience</span>
            </div>
            <div className="item">
              <h2>200</h2>
              <span>Awards Gained</span>
            </div>
            <div className="item">
              <h2>2000+</h2>
              <span>Proprety Ready</span>
            </div>
          </div>
        </div>
      </section>

      <section className='img-section'>
          <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </section>
    </main>
  )
}

export default Home