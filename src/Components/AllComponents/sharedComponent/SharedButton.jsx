import React from 'react'
import '../sharedComponent/sharedButton.css'

const SharedBtn = ({ bttn }) => {
  if (!bttn) {
    return null
  }
  return (
    <>
      <div>
        <button className="button2">{bttn.title}</button>
      </div>
    </>
  )
}

export default SharedBtn
