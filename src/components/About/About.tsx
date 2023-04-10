import React from 'react'
import "./about.scss"
import { FaUserAlt } from "react-icons/fa"
import {BsTools} from "react-icons/bs"
import css from "../../assets/skills/icons8-css3.svg"
import html from "../../assets/skills/icons8-html-5.svg"
import react from "../../assets/skills/icons8-react-native.svg"
import typescript from "../../assets/skills/icons8-typescript.svg"
import bootstrap from "../../assets/skills/icons8-bootstrap.svg"
import tailwind from "../../assets/skills/icons8-tailwindcss.svg"
import sass from "../../assets/skills/icons8-sass.svg"
import firebase from "../../assets/skills/icons8-firebase.svg"
import git from "../../assets/skills/icons8-git.svg"
import { UserAuth } from '../../context/AppContext'


const technologies: any = [
    {"img": html,
    "name": "HTML"},
    {"img": css,
    "name": "CSS"},
    {"img": react,
    "name": "React"},
    {"img": typescript,
    "name": "Typescript"},
    {"img": bootstrap,
    "name": "Bootstrap"},
    {"img": tailwind,
    "name": "Tailwind"},
    {"img": sass,
    "name": "Sass"},
    {"img": firebase,
    "name": "Firebase"},
    {"img": git,
    "name": "Git"}
];

const About = () => {
    const {spanish} = UserAuth()
    return (
        <section className='about' id='about'>
            <div className='about__textbox'>
                <div className='about__header'>
                    <FaUserAlt className='about__logo' />
                    <div>
                        <p>{spanish? "Sobre mi": "About me"}</p>
                        <div></div>
                        
                    </div>
                </div>
                <span className='about__anotation'>{spanish? "Una breve introducción" : "A quick introduction"}</span>

                <p className='about__text'>{spanish? "Soy un estudiante universitario y desarollador Front End, apasionado por el mundo IT, adquiri la mayoria de mis conocimientos como autodidacta. Mi pasion esta en crear interfaces atractivas e intuitivas para que los usuarios se sientan como en casa. Estoy siempre aprendiendo sobre nuevas tecnologias que me permitan llevar mis proyectos a otro nivel. Me encanta trabajar en proyectos personales y experimentar con distintos diseños y funcionalidades para asi mejorar mis habilidades. Desafiarme a mi mismo es mi objetivo para exceder mis limites y mejorar. " : "I am a university student and Front End developer, passionate about the IT world. I acquired most of my knowledge through self-learning. My passion lies in creating attractive and intuitive user interfaces that make users feel at home. I am always learning about new technologies that allow me to push my creations to the maximum. I love working on personal projects and experimenting with different designs and functionalities to continue improving my skills. I enjoy challenging myself and I am constantly seeking ways to exceed my limits."}</p>

                <div className='about__header2'>
                    <BsTools className='about__logo' />
                    <div>
                        <p>{spanish? "Habilidades" : "Skills"}</p>
                        
                        <div></div>
                    </div>
                </div>
                <span className='about__anotation'>{spanish? "Tecnologias mas usadas" : "Most used technologies"}</span>

                <div className='about__skills'>
                    {technologies.map((tech: any, index: any) => {
                        return (
                            <div className='about__skill' key={index}>
                                <img src={tech.img} alt="" />
                                <span className='skills_name'>{tech.name}</span>
                            </div>
                        )
                    })
                    }    
                </div>
            </div>
        </section>
    )
}

export default About
