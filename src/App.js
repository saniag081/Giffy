import React from 'react';
import SearchResults from './Pages/SearchResults/SearchResults';
import Detail from './Pages/Detail/index';
import Home from './Pages/Home/index';
import StaticContext from './Contex/StaticContex';
import  {Route} from 'wouter';
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
        <Route
          path="/gif/:id"
          component={Detail}
        />
      </section>
    </div>
  );
}

export default App;
