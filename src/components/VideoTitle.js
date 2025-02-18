import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pl-8 w-screen aspect-video pt-[15%] px-24  text-white absolute bg-gradient-to-r from-black '>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-4 w-1/3 text-lg'>{overview}</p>

      <div>
        <button className='bg-white p-4 px-10 rounded-lg text-black font-bold hover:bg-opacity-60'>▶️ Play</button>
        <button className='mx-2 bg-gray-400 p-4 px-8 rounded-lg text-black font-bold bg-opacity-60 hover:bg-opacity-80'>ℹ️ More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
