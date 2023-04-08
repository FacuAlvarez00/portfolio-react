import { useState } from 'react'
import './navbar.scss'
import ukflag from '../../assets/nav/Flag_of_the_United_Kingdom.svg'
import spainflag from '../../assets/nav/Flag_of_Spain.svg'
import {CiDark} from "react-icons/ci"
import {MdDarkMode} from "react-icons/md"
import {Link} from "react-router-dom"


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">

         <span>FA</span>
         
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            <span>X</span>
          
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

            <div className='navbar__language__switch__mobile'>
              <span><img src={spainflag}/></span>
              /
              <span><img src={ukflag}/></span>
            </div>

            <div className='navbar__color__switch__mobile'>
              <MdDarkMode className='switch__icons'/>
            </div>

          </ul>
        </div>

        <div className='navbar__language__switch'>
          <span><img src={spainflag}/></span>
          /
          <span><img src={ukflag}/></span>
        </div>

        <div className='navbar__color__switch'>
          <MdDarkMode className='switch__icons'/>
        </div>


      </div>
    </nav>
  )
}

export default Navbar