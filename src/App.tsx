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
        <h1>Real React Now</h1>
        <hr></hr>
        <Router>
          
          <div>   
              <Link to="/#"><div>Inicio</div></Link>            
              <Link to="/contacto"><div>Contacto</div></Link>
              <Link to="/comentarios"><div>Comentarios</div></Link>
            
          </div>
          
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
