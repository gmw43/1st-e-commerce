import React from 'react'
import '../OurNewsComp/OurNewsCard.css'
import SharedButton from '../sharedComponent/SharedButton'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NewsCard = ({ card }) => {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/OverView')
  }

  const cardbtn = {
    title: 'Read more',
  }

  return (
    <div className="cards-main">
      <div className="cards">
        <div className="cards-img">
          <div className="imgs" onClick={handleClick}>
            <img src={card.img} />
          </div>
        </div>

        <div className="cards-subtitle">
          <h3>{card.title}</h3>
          <span className="span">{card.desc}</span>

          <Link to="/OverView">
            <SharedButton bttn={cardbtn} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
