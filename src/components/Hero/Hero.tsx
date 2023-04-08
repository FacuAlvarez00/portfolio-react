import React from 'react'
import "./hero.scss"

const Hero = () => {
  return (
    
        <section className='hero' id='home'>
       
            <div className='hero__textbox'>
                <h1>Hi there!</h1>
                <h1>I'm FACUNDO ALVAREZ</h1>
                <p> A front end developer, passionate about technology and intuitive and dynamic user experiences. Looking to participate in challenging projects.</p>
            </div>
            
            <div className='hero__button__container'>
                <button className='hero__button cv'>DOWNLOAD CV</button>
                <button className='hero__button'>CONTACT</button>
            </div>



      
        </section>
    
    
  )
}
export default Hero
