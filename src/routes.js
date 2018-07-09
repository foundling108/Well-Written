import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Chapters from './components/Chapters/Chapters';
import Progress from './components/Progress/Progress';
import Characters from './components/Characters/Characters';
import Locations from './components/Locations/Locations';

export default (
    <Switch>
      <Route component={ Auth } path="/" exact />
      <Route component={ Home } path="/home" />
      <Route component={ Chapters } path="/chapters" />
      <Route component={ Progress } path="/progress" />
      <Route component={ Characters } path="/characters" />
      <Route component={ Locations } path="/locations" />
    </Switch>
  )