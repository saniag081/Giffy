import React from 'react';
import ListOfGifs from './components/listOfGifs';
import { Link, Route } from 'wouter';
import './App.css';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/:colombia">Gif Colombia</Link>
        <Link to="/gif/:Rick">Gif Rick</Link>
        <Link to="/gif/:Morty">Gif Morty</Link>
        <Route
          path="/gif/:keyword"
          component={ListOfGifs}
        />
      </section>
    </div>
  );
}

export default App;
