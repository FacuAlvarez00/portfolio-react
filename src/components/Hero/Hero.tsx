import React from 'react'
import { UserAuth } from '../../context/AppContext'
import "./hero.scss"
import CV from "../../assets/CV.pdf"


const Hero = () => {
const {spanish} = UserAuth()

  return (

    
        <section className='hero' id='home'>
       
            <div className='hero__textbox'>
                <h1>{spanish?  "Hola!" : "Hi there!"}</h1>
                <h1>{spanish? "Soy Facundo Alvarez" : "I'm Facundo Alvarez"}</h1>
                <p>{spanish? "Un desarrollador de front-end apasionado por la tecnología y por crear experiencias de usuario intuitivas y dinámicas. Buscando participar en proyectos desafiantes." : "A front-end developer, passionate about technology and intuitive and dynamic user experiences. Looking to participate in challenging projects."} </p>
            </div>
            
            <div className='hero__button__container'>
                <a href={CV} download="CV - Facundo Alvarez">
                <button className='hero__button cv'>{spanish? "DESCARGAR CV" : "DOWNLOAD CV"}</button>
                </a>
                
                <a href='#contact'>
                    <button className='hero__button'>{spanish? "CONTACTO" : "CONTACT"}</button>
                </a>
                
            </div>


        </section>
    
    
  )
}
export default Hero
