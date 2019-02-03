import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import { Navbar, Jumbotron } from 'react-bootstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App parallax">
        <header>
          <Navbar className="Navbar navbar-dark fixed-top navbar-expand-lg">
            <Link to='/' className='Navbar-brand'>Bloc Jams</Link>
            <div className='Navbar-nav ml-auto' id='rightLinks'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/library' className='nav-link'>Library</Link>
            </div>
          </Navbar>
          <Jumbotron id="jumbo">
          <h1 id="nameTitle">Bloc Jams</h1>
          </Jumbotron>
        </header>
        <div id="background">
        <main className="container">
           <Route exact path="/" component={Landing} />
           <Route path="/library" component={Library} />
           <Route path="/album/:slug" component={Album} />
        </main>
      </div>
      </div>
    );
  }
}

export default App;
