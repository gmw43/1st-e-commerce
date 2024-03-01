import React from 'react'
import '../sharedComponent/card.css'
import SharedCartBtn from './SharedCartBtn'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const Card = ({ card }) => {
  const cardbtn = {
    title: 'Add to Cart',
    icon: (
      <ShoppingCartOutlinedIcon
        style={{ fontSize: 20, marginRight: '10px', lineHeight: 'normal' }}
      />
    ),
  }

  return (
    <div className="card-main">
      <div className="card">
        <div className="card-img">
          <div className="img">
            <img src={card.img} />
          </div>
        </div>

        <div className="card-subtitle">
          <h3>{card.title}</h3>
          <span className="span">{card.kg}</span>
          <p>{card.Price}</p>
          <SharedCartBtn btn={cardbtn} />
        </div>
      </div>
    </div>
  )
}

export default Card
