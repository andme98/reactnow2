import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Comentarios from './pages/Comentarios';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        
        <Router>
            <div>
              <h1 style={{textDecoration:'none',display:'block',}}>React Now 2</h1>              
            </div>
            <div>
              <Link style={{textDecoration:'none',display:'inline-block', paddingRight:'10px', fontWeight:'bold'}} to="/#"><div>Inicio</div></Link>            
              <Link style={{textDecoration:'none',display:'inline-block', fontWeight:'bold'}} to="/contacto"><div>Contacto</div></Link>
              <Link style={{textDecoration:'none',display:'inline-block', paddingLeft:'10px', fontWeight:'bold'}} to="/comentarios"><div>Comentarios</div></Link>
            </div>                    
            <hr></hr>
          
          
          <Switch>
            <Route path="/" exact>
                <Inicio />
            </Route>
          </Switch>

          <Switch>
            <Route path="/contacto" exact>
                <Contacto />
            </Route>
          </Switch>

          <Switch>
            <Route path="/comentarios" exact>
                <Comentarios />
            </Route>
          </Switch>
        </Router>

        <Footer />
      </div>
    </div>
  );
}

export default App;
