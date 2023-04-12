import React from 'react'
import "./arrowback.scss"
import { useState } from "react"
import {AiOutlineArrowUp} from "react-icons/ai"

const ArrowBack = () => {

    const [arrowBack, setArrowBack] = useState<any>(false)

    window.addEventListener("scroll", () => {
        if (window.scrollY < 3000) {
            setArrowBack(false)
          console.log("false")
        }
        else{
            setArrowBack(true)
          console.log("true")
        }
     })
    


  return (
    <div>
        
            {arrowBack?
            <div className='arrow__holder'>
                    <a href='#home'>
                <AiOutlineArrowUp className='arrowback'/>
            </a> 

            </div>
          
            :
            null

            }
           
            
      

      
    </div>
  )
}

export default ArrowBack
