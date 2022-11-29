import React from 'react'
import './Home.css';
import Me from '../images/me.png'
import Capture from '../images/Capture.JPG'
import Furniture from'../images/furniture.JPG'

const Home = () => {
  return (
    <div className='home'>
      <div className="layout">
        <div className="profile">
          <h1 className='name'>Rauf</h1>
          <img src={Me} alt="profile" className='image-profile'/>
        </div>
        <div className="introduction">
          <h4 className='full-stack'>Full-stack web developer</h4>
          <h6 className='skills'>Node JS | React JS | PostgreSQL | MongoDB</h6>
          <p className='projects'>See my projects:</p>
          <div className="recent-project">
            <ul>
              <li>
                <a href="https://furniture-shop.rauf-fullstack.com" target='#'>
                  <img src={Furniture} alt="furniture" className='furniture'/>
                </a>
              </li>
              <li>
                <a href="https://tourist-destination.rauf-fullstack.com/" target='#'>
                  <img src={Capture} alt="tourist-destination" className='capture' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
