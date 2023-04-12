import React from 'react'
import "./projects.scss"
import Project from './Project'
import { BsRocket } from 'react-icons/bs'
import project1 from "../../assets/projects/RPS/rpss.png"
import project2 from "../../assets/projects/Random People/Screenshot_3.png"
import project3 from "../../assets/projects/levisoft/Screenshot_3.png"
import css from "../../assets/skills/icons8-css3.svg"
import html from "../../assets/skills/html-5-svgrepo-com.svg"
import react from "../../assets/skills/icons8-react-native.svg"
import typescript from "../../assets/skills/icons8-typescript.svg"
import bootstrap from "../../assets/skills/icons8-bootstrap.svg"
import tailwind from "../../assets/skills/icons8-tailwindcss.svg"
import javascript from "../../assets/skills/icons8-javascript.svg"
import sass from "../../assets/skills/icons8-sass.svg"
import firebase from "../../assets/skills/icons8-firebase.svg"
import git from "../../assets/skills/icons8-git.svg"
import { UserAuth } from '../../context/AppContext'


const Projects = () => {
  const {spanish} = UserAuth()
  return (
    <section className='projects' id='projects'>
      <div>
        <h1>{spanish? "Mis proyectos" : "My projects"}</h1>
        <p>{spanish? "Más recientes" : "Recent ones"}</p>

      </div>

      <Project name={"Rock, paper and scissors"} projectLink1={"https://github.com/FacuAlvarez00/RockPaperScissors---REACT"}  projectLink2={"https://rock-paper-scissors-react-two.vercel.app/"} img={project1} desc={ spanish? "Una aplicación web para jugar al juego de piedra, papel o tijera que cuenta con un inicio de sesión, la posibilidad de personalizar tu propio avatar, acceso a estadísticas del juego y ver una tabla de puntuaciones con el progreso de todos los jugadores registrados hasta el momento. Además, cuenta con una UI amigable y detallada que se adapta a cualquier dispositivo." : "A web application for playing the game of rock-paper-scissors, which allows users to login, select a personalized avatar, access their game statistics, view a leaderboard to track progress of all players, and features a user-friendly UI design that is adaptable to any device."} techIcon1={react} techIcon2={typescript} techIcon3={css} techIcon4={firebase}/>

       <Project name={"Random People"} projectLink1={"https://github.com/FacuAlvarez00/RandomUser-REACT"} projectLink2={"https://random-user-react-mu.vercel.app/"} img={project2} desc={spanish? "Aplicación web que consume una API que genera personas con datos al azar. Cuenta con filtros para separar por nombre y género, y un buscador por nombre." : "This app consumes an API which generates random people, with filters to separate them by gender and name."} techIcon1={react} techIcon2={typescript} techIcon3={css} techIcon4={tailwind}/> 

    <Project name={"Levisoft"} projectLink1={"https://github.com/matiasillaness/proyecto-lv"} projectLink2={"https://matiasillaness.github.io/proyecto-lv/"} img={project3} desc={spanish? "Pagina estatica para publicitar un servicio freelance de armado de sitios web, hecho junto a otros 2 desarrolladores." : "Static web page built to promote freelance services for web pages, made with 2 other devs."} techIcon1={html} techIcon2={css} techIcon3={javascript} techIcon4={sass}/> 
      
      
    </section>
  )
}

export default Projects
