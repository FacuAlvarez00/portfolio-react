import React from 'react'
import "./contact.scss"
import github from "../../assets/contact/github (2).svg"
import linkedin from "../../assets/contact/linkedin (1).svg"
import whatsapp from "../../assets/contact/whatsapp (1).svg"
import message from "../../assets/contact/envelope-solid.svg"
import { UserAuth } from '../../context/AppContext'


const Contact = () => {

    const {spanish} = UserAuth()

  return (
    <section className='contact' id='contact'>
        <div>

            <div className='contact__form'>
                <h1>{spanish? "¿Conversamos?" : "Wanna talk?"}</h1>
                <form>
                    <input type="text" placeholder={spanish? "Nombre" : "Name"}/>
                    <input type="email" placeholder='Email'/>
                    <textarea placeholder={spanish? "Mensaje" : "Message"}></textarea>
                    <button>{spanish? "Enviar" : "Send"}</button>
                </form>
            </div>

            <div className='contact__info'>
                <h2>{spanish? "Otros medios" : "Other ways"}</h2>
                <p>{spanish? "No dudes en ponerte en contacto conmigo de cualquier forma!" : "Do not hesitate in contacting me by any means!"}</p>
                <ul>
                    <a href='https://api.whatsapp.com/send?phone=541155617969' target="_Blank"><li><img src={whatsapp}/>+54 1155617969</li></a>
                    <a href='https://www.linkedin.com/in/facundoalvarezzz/' target="_Blank"><li><img src={linkedin}/>facundoalvarezzz</li></a>
                    <a href='https://github.com/FacuAlvarez00' target="_Blank"><li><img src={github}/>FacuAlvarez00</li></a>
                    <a><li><img src={message}/>facundoalvarezzh@gmail.com</li></a>
                </ul>
            </div>

        </div>
      
    </section>
  )
}

export default Contact
