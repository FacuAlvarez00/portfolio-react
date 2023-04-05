import React from 'react'
import "./projects.scss"
import Project from './Project'
import { BsRocket } from 'react-icons/bs'
import project1 from "../../assets/projects/RPS/rpss.png"
import project2 from "../../assets/projects/Random People/Screenshot_3.png"
import css from "../../assets/skills/icons8-css3.svg"
import html from "../../assets/skills/icons8-html-5.svg"
import react from "../../assets/skills/icons8-react-native.svg"
import typescript from "../../assets/skills/icons8-typescript.svg"
import bootstrap from "../../assets/skills/icons8-bootstrap.svg"
import tailwind from "../../assets/skills/icons8-tailwindcss.svg"
import sass from "../../assets/skills/icons8-sass.svg"
import firebase from "../../assets/skills/icons8-firebase.svg"
import git from "../../assets/skills/icons8-git.svg"

const Projects = () => {
  return (
    <section className='projects'>
      <div>
        <h1>My projects</h1>
        <p>Recent ones</p>

      </div>

      <Project name={"ROCK, PAPER AND SCISSORS"} projectLink1={"https://github.com/FacuAlvarez00/RockPaperScissors---REACT"}  projectLink2={"https://rock-paper-scissors-react-two.vercel.app/"} img={project1} desc={"A web application for playing the game of rock-paper-scissors, which allows users to log in, select a personalized avatar, access their game statistics, view a leaderboard to track progress of all players, and features a user-friendly UI design that is adaptable to any device."} techIcon1={react} techIcon2={typescript} techIcon3={css} techIcon4={firebase}/>

       <Project name={"Random People"} projectLink1={"https://github.com/FacuAlvarez00/RandomUser-REACT"} projectLink2={"https://random-user-react-mu.vercel.app/"} img={project2} desc={"This app consumes an API which generates random people, with filters to separate them by gender and name."} techIcon1={react} techIcon2={typescript} techIcon3={css} techIcon4={tailwind}/> 

{/*       <Project name={"ROCK, PAPER AND SCISSORS"} img={project1} desc={"dasdasadsadsadasdsadasdasdsaasddsadadasdsadsadasdasdasdadasdsadas"} techIcon1={react} techIcon2={typescript} techIcon3={css} techIcon4={firebase}/>
      */}
      
    </section>
  )
}

export default Projects
