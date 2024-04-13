import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailsPages } from "./pages/details/DetailsPages";
import { DetailsPages2 } from "./pages/details/DetailsPages2";
import { DetailsPages3 } from "./pages/details/DetailsPages3";
import { DetailsPages4 } from "./pages/details/DetailsPages4";
import { DetailsPages5 } from "./pages/details/DetailsPages5";
import { DetailsPages6 } from "./pages/details/DetailsPages6";
import { DetailsPages7 } from "./pages/details/DetailsPages7";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <>
              <Header />
              <DetailsPages />
            </>
          </Route>
          <Route exact path="/details2/:id">
            <>
              <Header />
              <DetailsPages2 />
            </>
          </Route>
          <Route exact path="/details3/:id">
            <>
              <Header />
              <DetailsPages3 />
            </>
          </Route>
          <Route exact path="/details4/:id">
            <>
              <Header />
              <DetailsPages4 />
            </>
          </Route>
          <Route exact path="/details5/:id">
            <>
              <Header />
              <DetailsPages5 />
            </>
          </Route>
          <Route exact path="/details6/:id">
            <>
              <Header />
              <DetailsPages6 />
            </>
          </Route>
          <Route exact path="/details7/:id">
            <>
              <Header />
              <DetailsPages7 />
            </>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
