import { useState } from 'react'
import './navbar.scss'
import ukflag from '../../assets/nav/Flag_of_the_United_Kingdom.svg'
import ukflagopacity from "../../assets/nav/ukFlagOpacity.svg"
import spainflag from '../../assets/nav/Flag_of_Spain.svg'
import spainflagopacity from "../../assets/nav/spainFlagOpacity.svg"
import {CiDark} from "react-icons/ci"
import {MdDarkMode} from "react-icons/md"
import { UserAuth } from '../../context/AppContext'



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const {spanish, setSpanish} = UserAuth()


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleSpanish = () => {
    setSpanish(!spanish)
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
              <a href='#home'>{spanish? 'Inicio' : 'Home'}</a>
            </li>
            <li>
              <a href="#about">{spanish? "Sobre mi" : "About me"}</a>
            </li>
            <li>
              <a href="#projects">{spanish? "Proyectos" : "Projects"}</a>
            </li>
            <li>
              <a href="#contact">{spanish?  "Contacto" : "Contact"}</a>
            </li>

            <div className='navbar__language__switch__mobile'>
            {spanish?
          <>
            <span><img src={spainflagopacity}/></span>
            <p>/</p>
            <span onClick={handleSpanish}><img src={ukflag}/></span>
          </>

          :
          <>
            <span onClick={handleSpanish}><img src={spainflag}/></span>
            <p>/</p>
            <span><img src={ukflagopacity}/></span>
          </>

          }
            </div>

           {/*  <div className='navbar__color__switch__mobile'>
              <MdDarkMode className='switch__icons'/>
            </div> */}

          </ul>
        </div>

        <div className='navbar__language__switch'>
          {spanish?
          <>
            <span><img src={spainflagopacity}/></span>
            <p>/</p>
            <span onClick={handleSpanish}><img src={ukflag}/></span>
          </>

          :
          <>
            <span onClick={handleSpanish}><img src={spainflag}/></span>
            <p>/</p>
            <span><img src={ukflagopacity}/></span>
          </>

          }
          
          
          
        </div>

        {/* <div className='navbar__color__switch'>
          <MdDarkMode className='switch__icons'/>
        </div>
 */}

      </div>
    
    </nav>
    
  )
}

export default Navbar