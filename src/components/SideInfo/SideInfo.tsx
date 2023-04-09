import React from 'react'
import "./sideinfo.scss"
import github from "../../assets/contact/github (2).svg"
import linkedin from "../../assets/contact/linkedin (1).svg"
import whatsapp from "../../assets/contact/whatsapp (1).svg"
import instagram from "../../assets/contact/icons8-instagram.svg"

const SideInfo = () => {
  return (
    <div className='aside__socials'>
        <ul>
            <li><a><img src={linkedin}/></a></li>
            <li><a><img src={github}/></a></li>
            <li><a><img src={whatsapp}/></a></li>
            <li><a><img src={instagram}/></a></li>

            <div className='aside__line'></div>
            
        </ul>

      


      
    </div>
  )
}

export default SideInfo
