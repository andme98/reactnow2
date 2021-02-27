import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../index.css'
import {faMailBulk, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contacto = () => {
    return (
        <div>
            <h2>Contáctanos</h2>
            <img className='main-image' src="../contactus.jpg" alt="ra"/>
            <div className='card'>
                <FontAwesomeIcon style={{marginTop:'20px'}} icon={faPhone} size='xs'/>        
                <h3>- Teléfono Fijo -</h3>
                <h5 className='soft'>(01) 611 - 9840</h5>
                <h5 className='soft'>(01) 505 - 0505</h5>
                <hr></hr>
                <FontAwesomeIcon style={{marginTop:'20px'}} icon={faMobile} size='xs'/>        
                <h3>- Móvil -</h3>
                <h5 className='soft'>(+51) 955 318 599</h5>
            
                <h3>- WhatsApp -</h3>
                <h5 className='soft'>(+51) 955 318 599</h5>
                <h5 className='soft'>(+51) 957 227 259</h5>
                <hr></hr>
                <FontAwesomeIcon style={{marginTop:'20px'}} icon={faMailBulk} size='xs'/>
                <h3>- Correo electrónico -</h3>
                <h5 className='soft'>dev_group@gmail.com</h5>
            </div>
            <img src="../cat.png" alt="cat"></img>  
        </div>
        
    )
}

export default Contacto;
