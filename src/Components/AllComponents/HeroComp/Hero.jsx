import React, { Children, createContext, useState } from 'react'
import jakub from '../../../assets/images/jakub.jpg'
import SharedBtn from '../sharedComponent/SharedButton'
import '../sharedComponent/sharedButton.css'
import '../HeroComp/Hero.css'
import { useNavigate } from 'react-router-dom'

export const passHeight = createContext()

const Hero = ({ children }) => {
  const Navigation = useNavigate()
  const fakebtn = {
    titlebtn1: 'Fruit Collection',
    titlebtn2: 'Contact Us',
  }

  function handleClickBtn1() {
    Navigation('/ShoppingPage')
  }
  function handleClickBtn2() {
    Navigation('/ContactUs')
  }

  return (
    <div style={{ position: 'relative' }}>
      <div
        className="hero"
        style={{
          height: '90vh',
          backgroundImage: `url(${jakub})`,
          // marginTop: '-160px',

          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '-1',
        }}
      ></div>

      <div
        className="text_div"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'absolute',
          // zIndex: '10',
          top: '35%',
          left: '30%',
        }}
      >
        <h5> FRESH & ORGANIC</h5>
        <h1>Delicious Seasonal Fruits</h1>
        <div className=" d-flex">
          <button className="button2 mx-1" onClick={handleClickBtn1}>
            Fruit Collection
          </button>
          <button className="button2 mx-1" onClick={handleClickBtn2}>
            Contact Us
          </button>
        </div>

        {/* <div className="btn" onClick={handleClickBtn1}>
          <SharedBtn bttn={fakebtn} />
        </div>
        <div className="btn" onClick={handleClickBtn2}>
          <SharedBtn bttn={fakebtn} />
        </div> */}
      </div>
    </div>
  )
}

export default Hero
