import React, { Component } from 'react';
import { Route, HashRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/HomePage/home";

import './App.css';
import EpisodeList from './pages/EpisodesPage/episodes-page';
import Header from './components/header/header.component';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/episode/" component={EpisodeList} />
      </Router>
    );
  }
}

export default App;
