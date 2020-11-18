import React from "react"
import ReactPlayer from "react-player"
import "./responsive-player.css"

const ResponsivePlayer = () => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=Rq5SEhs9lws'
        width='50%'
        height='100%'
        controls={true}
      />
    </div>
  )
}

export default ResponsivePlayer