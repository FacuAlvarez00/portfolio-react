import React from 'react'
import "./contact.scss"
import github from "../../assets/contact/github (2).svg"
import linkedin from "../../assets/contact/linkedin (1).svg"
import whatsapp from "../../assets/contact/whatsapp (1).svg"
import message from "../../assets/contact/envelope-solid.svg"

const Contact = () => {
  return (
    <section className='contact'>
        <div>
            <div className='contact__form'>
                <h1>Wanna talk?</h1>
                <form>
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button>Send</button>
                </form>



            </div>

            <div className='contact__info'>
                <h2>Other ways</h2>
                <p>Do not hesitate in contacting me by any means!</p>

                <ul>
                    <li><img src={whatsapp}/>+54 11 55617969</li>
                    <li><img src={linkedin}/>facundoalvarezzz</li>
                    <li><img src={github}/>FacuAlvarez00</li>
                    <li><img src={message}/>facundoalvarezzh@gmail.com</li>
                </ul>



            </div>
        </div>
      
    </section>
  )
}

export default Contact
