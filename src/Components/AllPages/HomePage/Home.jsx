import React from 'react'
import Hero from '../../AllComponents/HeroComp/Hero'
import Productpage from '../ProductPage/productpage'
import OurNewsPage from '../OurNewsPage/OurNewsPage'
import ShoppingPage from '../ShoppingPage/ShoppingPage'

const Home = () => {
  return (
    <>
      <Hero />
      <Productpage />
      <OurNewsPage />
      <ShoppingPage />
    </>
  )
}

export default Home
