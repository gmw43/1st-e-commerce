import React from 'react'
import news_2 from '../../../assets/images/news-bg-2.jpg'
import news_1 from '../../../assets/images/news-bg-1.jpg'
import news_3 from '../../../assets/images/news-bg-3.jpg'

import NewsCard from './OurNewsCard'

const OurNews = () => {
  const fakeData = [
    {
      img: news_1,
      title: 'You will vainly look for fruit on it in autumn.',
      desc: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
    },
    {
      img: news_2,
      title: "A man's worth has its season, like tomato.",
      desc: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
    },
    {
      img: news_3,
      title: 'Good thoughts bear good fresh juicy fruit.',
      desc: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
    },
  ]
  return (
    <>
      <div className="product-main">
        <div className="product-heading">
          <h3>
            {' '}
            <span style={{ color: '#F28123' }}>Our </span>News
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            fuga quas itaque eveniet beatae optio.
          </p>
        </div>

        <div className="container product">
          {fakeData.map((data, index) => {
            return (
              <div key={index}>
                <NewsCard card={data} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default OurNews
