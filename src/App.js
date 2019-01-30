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
      <div className="App">
        <header>
          <Navbar className="Navbar">
            <Link to='/'>Landing</Link>

            <Link to='/library'>Library</Link>
          </Navbar>
          <Jumbotron id="jumbo">
          <h1 id="nameTitle">Bloc Jams</h1>
          </Jumbotron>
        </header>
        <div id="background">
        <main>
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
