import React from 'react'
import Comentario from '../components/Comentario'
import CommentBox from '../components/CommentBox'

const Comentarios = () => {
    return (
        <div>
            
            <h3>Tu opinión es muy importante</h3>
            <p>Comparte con nosotros tu experiencia. Sería muy grato
                 saber de ti, para considerar mejoras en la calidad de nuestro servicio.
                 </p>
            <h2>Agrega un comentario</h2>
            <CommentBox />
            <h2>Comentarios destacados</h2>
            <Comentario />
            <img className='second-image' src="../canvas.png" alt='canvas'></img>  
        </div>
    )
}

export default Comentarios
