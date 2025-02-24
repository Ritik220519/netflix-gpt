import React from 'react'

import GptSearchBar from './GptSearchBar'
import GptMovieSuggesstion from './GptMovieSuggesstion'
import { netflix_bg_img } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
       <div className='absolute'>
       <img src={netflix_bg_img} alt="bg-img" />
     </div>
     <GptSearchBar/>
    <GptMovieSuggesstion/>
   
    </div>
  )
}

export default GptSearch
