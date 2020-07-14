import React from 'react';
import SearchResults from './Pages/SearchResults/SearchResults';
import Home from './Pages/Home/index';
import { Link, Route } from 'wouter';
import './App.css';

function App() {

  return (
    <div className="App">
      <section className="App-content">
      <Route
          path="/"
          component={Home}
        />
        <Route
          path="/search/:keyword"
          component={SearchResults}
        />
      </section>
    </div>
  );
}

export default App;
