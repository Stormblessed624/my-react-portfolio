import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {


  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route exact path='/' component={About}/>
          <Route path='/about' component={About}/>
          <Route path='/project' component={Project}/>
          <Route path='/contact' component={ContactForm}/>
          <Route path='/resume' component={Resume}/>
        </Switch>
        <Footer></Footer>
      </div>    
    </Router>

  );
}

export default App;
