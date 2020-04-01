import React, { Component } from "react";
import Header from "./components/assets/Header";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";


function App() {
  return (
    <Router>

      <Header/>
      <Route exact path="/" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
    </Router>
  );
}


export default App;
