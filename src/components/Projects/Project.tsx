import React from 'react'
import "./project.scss"
import github from "../../assets/projects/buttons/github.svg"
import link from "../../assets/projects/buttons/link-solid.svg"
import { UserAuth } from '../../context/AppContext'

type props = {
    name: string;
    img: string;
    desc: string;
    techIcon1: string;
    techIcon2: string;
    techIcon3: string;
    techIcon4: string;
    projectLink1: string;
    projectLink2: string


}

const Project: React.FC<props> = ({name, img, desc, techIcon1, techIcon2, techIcon3, techIcon4, projectLink1, projectLink2  }) => {
    const {spanish} = UserAuth()


  return (
    <article className='project'>
        <div>
            <div className='project__img__container'>
                <img src={img}/>
            </div>
            
            <div className='project__info'>

           
                <span className='project__title'>{name}</span>
                <div>
                <p className='project__desc'>{desc}</p>
                </div>
            
           
           

            <div className='project__icons'>
                <div>
                    

                    <img src={techIcon1}/>
                </div>

                <div>
                    <img src={techIcon2}/>
                </div>

                <div>
                    <img src={techIcon3}/>
                </div>

                <div>
                    <img src={techIcon4}/>
                </div>                
                
                
                
            </div>
            
            <div className='project__buttons'>
                <div>
                    <a target="_Blank" href={projectLink1}>
                            <button><span><img src={github}/></span>{spanish? "Codigo" : "Code"}</button>
                    </a>
                    
                </div>

                <div>
                <a target="_Blank" href={projectLink2}>
                    <button><span><img src={link}/></span>Deploy</button>
                </a>
                    
                </div>
               
                
            </div>
             </div>
            
        </div>
    </article>
  )
}

export default Project
