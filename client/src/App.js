import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";

import Home from "./containers/Home/Home.jsx";
import Search from "./containers/Search/Search";
import Create from "./containers/Create/Create.jsx";

import GameDetail from "./containers/GameDetail/GameDetail.jsx";
import "./App.css";
import Delete from "./containers/Delete/Delete.jsx";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/home" component={Home} />

        <Route exact path="/results/:name" component={Search} />

        <Route
          exact
          path="/videogames/:id"
          render={({ match }) => <GameDetail id={match.params.id} />}
        />

        <Route path="/create" exact component={Create} />
        <Route path="/delete" exact component={Delete} />
      </React.Fragment>
    </div>
  );
}

export default App;
