import React from 'react'
import '../index.css'

const Contacto = () => {
    return (
        <div>
            <h2>Contáctanos</h2>
            <img className='main-image' src="../contactus.jpg" alt="ra"/>
            <div className='card'>
                <h3>-Teléfono Fijo-</h3>
                <h5 className='soft'>(01) 611 - 9840</h5>
                <h5 className='soft'>(01) 505 - 0505</h5>
                
                <h3>-Móvil-</h3>
                <h5 className='soft'>(+51) 955 318 599</h5>
                
                <h3>-WhatsApp-</h3>
                <h5 className='soft'>(+51) 955 318 599</h5>
                <h5 className='soft'>(+51) 957 227 259</h5>
                
                <h3>-Correo electrónico-</h3>
                <h5 className='soft'>dev_group@gmail.com</h5>
            </div>
            <img src="../cat.png" alt="cat"></img>  
        </div>
        
    )
}

export default Contacto;
