import React from 'react'
import '../sharedComponent/deal.css'
import SharedCartBtn from './SharedCartBtn'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import DealTime from '../DealOfMonthComp/DealTime'

import { DataToCart } from '../GlobalContextComp/GlobalContext'
import { useContext } from 'react'

const DealCard = ({ OurDeal, btn }) => {
  const obj = useContext(DataToCart)
  const dealtime = [
    {
      day: 'Days',
      hour: 'Hours',
      min: 'Minutes',
      sec: 'Seconds',
      digits: '00',
    },
  ]

  const cardbtn = {
    title: 'Add to Cart',
    icon: (
      <ShoppingCartOutlinedIcon
        style={{ fontSize: 20, marginRight: '10px', lineHeight: 'normal' }}
      />
    ),
  }
  return (
    <>
      <div className="container deal-main">
        <div className="img">
          <img src={OurDeal.img} alt="" />
        </div>
        <div className="text-side">
          <h3 className="color-heading">{OurDeal.color_heading}</h3>
          <h3 className="heading">{OurDeal.heading}</h3>
          <h6 className="title">{OurDeal.title}</h6>
          <p className="desc">{OurDeal.desc}</p>
          <div className="times">
            {dealtime.map((time, index) => {
              return (
                <div key={index}>
                  <DealTime time={time} />
                </div>
              )
            })}
          </div>
          <div
            onClick={() => {
              obj.setAddData((prev) => ({ ...prev, ...OurDeal }))
            }}
          >
            <SharedCartBtn btn={cardbtn} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DealCard
