import React from 'react'
import { UserAuth } from '../../context/AppContext'
import "./hero.scss"


const Hero = () => {
const {spanish, setSpanish} = UserAuth()

  return (

    
        <section className='hero' id='home'>
       
            <div className='hero__textbox'>
                <h1>{spanish?  "Hola!" : "Hi there!"}</h1>
                <h1>{spanish? "Soy Facundo Alvarez" : "I'm Facundo Alvarez"}</h1>
                <p>{spanish? "Un desarrollador de front-end apasionado por la tecnología y por crear experiencias de usuario intuitivas y dinámicas. Buscando participar en proyectos desafiantes." : "A front-end developer, passionate about technology and intuitive and dynamic user experiences. Looking to participate in challenging projects."} </p>
            </div>
            
            <div className='hero__button__container'>
                <button className='hero__button cv'>DOWNLOAD CV</button>
                <button className='hero__button'>CONTACT</button>
            </div>



      
        </section>
    
    
  )
}
export default Hero
