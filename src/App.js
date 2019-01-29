import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import { Navbar } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar className="Navbar">
            <Link to='/'>Landing</Link>

            <Link to='/library'>Library</Link>
          </Navbar>

          <h1>Bloc Jams</h1>
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
