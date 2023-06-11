import React from 'react'
import { useState, useEffect } from 'react'
import { UserAuth } from '../../context/AppContext'
import "./hero.scss"
import CV from "../../assets/CV - Facundo Alvarez.pdf"
import 'animate.css';


const Hero = () => {
  const { spanish } = UserAuth()
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);

  /* const handleMenuToggle = () => {
      setMenuVisibility(!isMenuVisible);
    } */

  /*   useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 1000);
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []); */

  const handleSizeState = () => {
    if (window.innerWidth > 400)
      setIsLargeScreen(true);
    else setIsLargeScreen(false);
  };

  useEffect(() => {
    /*  window.addEventListener('resize', handleSizeState);
     handleSizeState();
     return () => window.removeEventListener('resize', handleSizeState); */
    handleSizeState();
  }, [window.innerWidth]);




  return (


    <section className='hero ' id='home'>

      

      <div className={isLargeScreen ? 'hero__textbox animate__animated animate__fadeInLeft'
        : "hero__textbox animate__animated animate__fadeInDown"}>
        <h1>{spanish ? "Hola!" : "Hi there!"}</h1>
        <h1>{spanish ? "Soy Facundo Alvarez" : "I'm Facundo Alvarez"}</h1>
        <p>{spanish ? "Un desarrollador de front-end apasionado por la tecnología y por crear experiencias de usuario intuitivas y dinámicas. Buscando participar en proyectos desafiantes." : "A front-end developer, passionate about technology and intuitive and dynamic user experiences. Looking to participate in challenging projects."} </p>
      </div>

      <div className='hero__button__container'>
        <a href={CV} download="CV - Facundo Alvarez">
          <button className='hero__button cv animate__animated animate__headShake'>{spanish ? "DESCARGAR CV" : "DOWNLOAD CV"}</button>
        </a>

        <a href='#contact'>
          <button className='hero__button animate__animated animate__headShake'>{spanish ? "CONTACTO" : "CONTACT"}</button>
        </a>

      </div>


    </section>


  )
}
export default Hero
