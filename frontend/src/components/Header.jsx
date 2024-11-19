import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaSearch, FaUser } from 'react-icons/fa'

const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false)
  const [dropdownMenu, setdropdownMenu] = useState(false)
  const naviagte = useNavigate()

  const toggleMenu = () => {
    setmenuOpened(!menuOpened)
  }
  return (
    <header className='max-padd-container flexBetween rounded-xl py-4'>
      {/* logo  */}
    <Link to={'/'} className='bold-24'>
      <div>
        Lease <span className='text-secondary'>Lodge </span> 
        </div>
    </Link>    
    {/* searchBar  */}

    <div className='bg-white ring-1 ring-slate-900/5 rounded-full p-2 px-4 w-44 sm:w-96 flexBetween gap-x-2 relative'>
      <input type="text" placeholder="Search Here ... " className='outline-none border-none w-full bg-white' />
      <button className='absolute right-0 h-full w-10 rounded-full bg-secondary text-white flexCenter cursor-pointer'> 
        <FaSearch /> 
        </button>
    </div>
      {/* Dropdown Menu  */}
      <div>
        <div>
          <div> <FaUser/> </div>
        </div>
      </div>
    </header>
  )
}

export default Header
