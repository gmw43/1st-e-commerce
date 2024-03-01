import React from 'react'
import '../sharedComponent/deal.css'

const DealTime = ({ time }) => {
  return (
    <>
      <div className="time ">
        <p>
          <span>{time.digits}</span>
          {time.day}
        </p>
        <p>
          <span>{time.digits}</span>
          {time.hour}
        </p>
        <p>
          <span>{time.digits}</span>
          {time.min}
        </p>
        <p>
          <span>{time.digits}</span>
          {time.sec}
        </p>
      </div>
    </>
  )
}

export default DealTime
