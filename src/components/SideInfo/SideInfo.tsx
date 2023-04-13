
import "./sideinfo.scss"
import github from "../../assets/contact/github (2).svg"
import linkedin from "../../assets/contact/linkedin (1).svg"
import whatsapp from "../../assets/contact/whatsapp (1).svg"
import instagram from "../../assets/contact/icons8-instagram.svg"
import { useState } from "react"


const SideInfo = () => {

  const [asideBar, setasidebar] = useState<boolean>(true)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 2400) {
      setasidebar(false)
      console.log("false")
    }
    else{
      setasidebar(true)
      console.log("true")
    }
 })


  return (
    
    <div className={asideBar? 'aside__socials' : "aside__socials-hide"}>
        <ul>
            <li><a href='https://www.linkedin.com/in/facundoalvarezzz/' target="_Blank"><img src={linkedin}/></a></li>
            <li><a href='https://github.com/FacuAlvarez00' target="_Blank"><img src={github}/></a></li>
            <li><a href='https://api.whatsapp.com/send?phone=541155617969' target="_Blank"><img src={whatsapp}/></a></li>
            <li><a href="https://www.instagram.com/facualvarezzz/" target="_Blank"><img src={instagram}/></a></li>

            
            
        </ul>

        <div className='aside__line'></div>
        

      
    </div>
  )
}

export default SideInfo
