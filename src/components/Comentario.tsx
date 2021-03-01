import React from 'react'


const Comentario = () => {

    const arrayComments = [
        {
            title:'Aprendo la lógica',
            user: 'jhon_snow666@uk.com',
            content:'Me parece interesante. Muy buena presentación y totalmente descriptivo.'
        }, 
        {   
            title:'Aprendo TS con React',
            user: 'anonymous_user@outlook.com',
            content: 'Aea mongolito, Cabrera y Trujillo al Voluntariado.'
        }, 
        {   
            title:'Me sirve demasiado',
            user: 'theunrecognizable@usa.com',
            content: 'Agradezco al equipo de desarrollo que viene trabajando en proyectos como este. Muchos éxitos!'
        }
    ];
    

    return (
        <>
        {
        arrayComments.map(v => {
            return (
            <div className='comentario' key={v.user}>   
                <div>
                    <table>
                        <tbody>
                            <tr>
                            <td>
                                <img className='imguser' alt="aea" src="../user.png"></img>
                            </td>
                            <td>
                                <h3 className='hcomment'>{v.title}</h3>
                                <h4 className='hemail'>{v.user}</h4>
                                <h5 className='hcomment'>{v.content}</h5>
                            </td>
                            </tr> 
                        </tbody>    
                    </table>
                </div>
            </div>   
            );   
        })
        
        }
        </>
    );
}



export default Comentario

