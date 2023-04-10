
import "./sideinfo.scss"
import github from "../../assets/contact/github (2).svg"
import linkedin from "../../assets/contact/linkedin (1).svg"
import whatsapp from "../../assets/contact/whatsapp (1).svg"
import instagram from "../../assets/contact/icons8-instagram.svg"
import { useState } from "react"


const SideInfo = () => {

  const [asideBar, setasidebar] = useState<boolean>(true)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 2000) {
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
            <li><a><img src={linkedin}/></a></li>
            <li><a><img src={github}/></a></li>
            <li><a><img src={whatsapp}/></a></li>
            <li><a><img src={instagram}/></a></li>

            
            
        </ul>

        <div className='aside__line'></div>
        

      
    </div>
  )
}

export default SideInfo
