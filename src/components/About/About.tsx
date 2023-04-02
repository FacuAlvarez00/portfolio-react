import React from 'react'
import "./about.scss"
import {FaUserAlt} from "react-icons/fa"
const About = () => {
  return (
    <section className='about'>
        <div className='about__textbox'>
            <div className='about__header'>
                <FaUserAlt className='about__logo'/>
                <div>
                    <p>About me</p>
                    <div></div>
                </div>
            </div>
            


        </div>
       


      
    </section>
  )
}

export default About
