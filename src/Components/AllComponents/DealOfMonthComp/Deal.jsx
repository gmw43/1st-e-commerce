import React from 'react'
import DealCard from '../sharedComponent/DealCard'
import DealTime from './DealTime'
import dealimg from '../../../assets/images/deal.jpg'

const Deal = () => {
  const OurDeal = {
    color_heading: 'Deal',
    heading: 'of the month',
    title: 'HIKAN STRWABERRY',
    desc: 'Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant',
    img: dealimg,
    action: 'Remove',
    Price: '100$',
  }

  return (
    <>
      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '6rem 0',
          margin: '4rem 0',
        }}
      >
        <DealCard OurDeal={OurDeal} />
      </div>
    </>
  )
}

export default Deal
