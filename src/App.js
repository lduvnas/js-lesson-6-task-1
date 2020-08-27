import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AboutPage from "./pages/AboutPage";
import StartPage from "./pages/StartPage";
import LayoutSimple from "./components/LayoutSimple";
import { UserContext } from "./contexts/UserContext";

function App() {
  let [user, setUser] = useState({});
  return (
    <div className="container">
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route path="/about">
            <LayoutSimple>
              <AboutPage />
            </LayoutSimple>
          </Route>

          <Route path="/">
            <LayoutSimple>
              <StartPage />
            </LayoutSimple>
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
