import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Comentarios from './pages/Comentarios';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <div>
        
        <Router>

          <NavBar />

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
        
          <Footer />

        </Router>

        
      </div>
    </div>
  );
}

export default App;
