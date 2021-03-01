import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className="navbar">
              <div>
                <h1 style={{textDecoration:'none',display:'block',}}>React Now 2</h1>              
              </div>
              <div>
                <Link style={{textDecoration:'none',display:'inline-block', paddingRight:'10px', fontWeight:'bold'}} to="/#"><div>Inicio</div></Link>            
                <Link style={{textDecoration:'none',display:'inline-block', fontWeight:'bold'}} to="/contacto"><div>Contacto</div></Link>
                <Link style={{textDecoration:'none',display:'inline-block', paddingLeft:'10px', fontWeight:'bold'}} to="/comentarios"><div>Comentarios</div></Link>
              </div>                    
              <hr></hr>
            </div>
        </div>
    )
}

export default NavBar
