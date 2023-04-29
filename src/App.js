import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Casual from "./Theme/Casual";
import Corporate from "./Theme/Corporate";
import Condensed from "./Theme/Condensed";
import Simple from "./Theme/simple";
import Executive from "./Theme/Executive";

import Quickview from "./components/Quickview";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/dashboard/latest/react">
        <div className="App h-100">
          <Switch>
            {/* Uncomment the routes below if you want to view all the themes (remember to uncomment the imports as well*/}
            <Route path="/casual">
              <Casual />
            </Route>
            <Route path="/corporate">
              <Corporate />
            </Route>
            <Route path="/condensed">
              <Condensed />
            </Route>
            <Route path="/simple">
              <Simple />
            </Route>
            <Route path="/executive">
              <Executive />
            </Route>
          </Switch>
          <Quickview />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
