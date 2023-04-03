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

const technologies: any = [
    html,
    css,
    react,
    typescript,

    bootstrap,
    tailwind,
    sass,
    firebase,
    git 
];

const About = () => {
    return (
        <section className='about'>
            <div className='about__textbox'>
                <div className='about__header'>
                    <FaUserAlt className='about__logo' />
                    <div>
                        <p>About me</p>
                        <div></div>
                        
                    </div>
                </div>
                <span className='about__anotation'>A quick introduction</span>

                <p className='about__text'>I am a Systems Engineering student and Front End developer, passionate about web development. I acquired most of my knowledge through self-learning. My passion lies in creating attractive and intuitive user interfaces that make users feel at home. I am always learning about new technologies that allow me to push my creations to the maximum.
                    I love working on personal projects and experimenting with different designs and functionalities to continue improving my skills. I enjoy challenging myself and I am constantly seeking ways to exceed my limits.</p>

                <div className='about__header'>
                    <BsTools className='about__logo' />
                    <div>
                        <p>Skills</p>
                        
                        <div></div>
                    </div>
                </div>
                <span className='about__anotation'>Most used technologies</span>

                <div className='about__skills'>
                    {technologies.map((tech: any, index: any) => {
                        return (
                            <div className='about__skill' key={index}>
                                <img src={tech} alt="" />
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
