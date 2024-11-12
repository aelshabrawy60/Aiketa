import React, { useState } from 'react'

import './Home.css'
import Templates from '../Templates/Templates'
import { IoSearchOutline } from "react-icons/io5";
import {templates_} from '../../Templates_'

  
  
function Home() {

  const [searchInput, setSearchInput] = useState()

  return (
    <div className='home_container h-100 w-100 d-flex px-md-5 px-3 p-4 justify-content-center'>
        <div className='w-100 mt-4'>
            <h3 className='text-center gradient-text'>What do you want to create today ?</h3>
            <div className='search-box-container mb-4 mt-5'>
                <IoSearchOutline className='search__icon'/>
                <input className='w-100' onChange={(e)=> setSearchInput(e.target.value)}></input>
            </div>
            <Templates templates={templates_} searchQuery={searchInput}/>
        </div>
    </div>
  )
}

export default Home