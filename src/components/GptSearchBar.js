import React from 'react'
import { useSelector } from 'react-redux'
import {language} from '../utils/languageConstant'

const GptSearchBar = () => {
    const  langKey = useSelector((store)=> store.config.lang);
    console.log(langKey)
  return (
    <div className='flex justify-center pt-[5%] relative '>
        <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 grid grid-cols-12 bg-black p-4 rounded-lg'>
            <input className='col-span-9 p-4 mx-2  rounded-lg'  type="text" placeholder={language[langKey].gptSearchPlaceholder} />
            <button className='bg-purple-600 text-white  col-span-3  rounded-lg' >{language[langKey].search}</button>
        </form>
      
    </div>
  )
}

export default GptSearchBar
