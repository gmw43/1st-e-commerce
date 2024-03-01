import React from 'react'
import '../sharedComponent/sharedButton.css'

const SharedCartBtn = ({ btn }) => {
  return (
    <>
      <div>
        <button className="button2">
          {btn.icon}
          {btn.title}
        </button>
      </div>
    </>
  )
}

export default SharedCartBtn
