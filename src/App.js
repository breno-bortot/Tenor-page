import React from 'react';
import './App.css';
import './App-2.css';
//importing components
import Footer from './components/footer'
import Header from './components/header'
import IndexMain from './components/indexMain'
import Media from './components/media'
import Curriculum from './components/cv'
import About from './components/about'
import Contact from './components/contact'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <div className="App">

        <Header />

        <Switch>
          <Route path="/" exact component={IndexMain} />
          <Route path="/media" component={Media} />
          <Route path="/cv" component={Curriculum}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <Footer />







      </div>
    </Router>
  );
}

export default App;
