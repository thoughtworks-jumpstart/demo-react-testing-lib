import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import FruitFilter from "./components/FruitFilter";
import TestingAxios from "./components/TestingAxios";
import { BrowserRouter, Link, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/counter">Counter</Link>
        <Link to="/filter">Filter</Link>
        <Link to="/axios">Axios</Link>
      </header>

      <div>
        <Route path="/counter" component={Counter} />
        <Route path="/filter" component={FruitFilter} />
        <Route path="/axios" component={TestingAxios} />
      </div>
    </BrowserRouter>
  );
}

export default App;
