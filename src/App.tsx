import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PlacesToStay from "./pages/placesToStay/PlacesToStay";
import Mountains from "./pages/mountains/Mountains";
import Beaches from "./pages/beaches/Beaches";
import Snowy from "./pages/snowy/Snowy";
import Footer from "./components/footer/Footer";
import Whoops404 from "./pages/whoops404/Whoops404";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* This tells React that anytime "/" is referenced, go to the Home component, which is the Home page. */}
          <Route path="/placestostay" exact component={PlacesToStay} />
          <Route path="/beaches" exact component={Beaches} />
          <Route path="/mountains" exact component={Mountains} />
          <Route path="/snowy" exact component={Snowy} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={Whoops404} />
        </Switch> 
        <Footer />
      </Router>
    </>
  );
}

export default App;