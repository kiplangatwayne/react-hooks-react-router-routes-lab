import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <div>
      {/* Render the NavBar on top of all routes */}
      <NavBar />

      {/* The Switch component ensures that only the first matching route is rendered */}
      <Switch>
        {/* Route for Movies component */}
        <Route path="/movies">
          <Movies />
        </Route>

        {/* Route for Directors component */}
        <Route path="/directors">
          <Directors />
        </Route>

        {/* Route for Actors component */}
        <Route path="/actors">
          <Actors />
        </Route>

        {/* Route for Home component */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* If none of the above paths match, render the Home component */}
        {/* You can also have a 404 Not Found component here if needed */}
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
