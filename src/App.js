import Index from "./pages/index";
import Whatwedo from './pages/whatwedo'
import Whoweare from './pages/whoweare'
import Career from './pages/career'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Notfound from './pages/404'
import "./App.css";
import {BrowserRouter as Router} from 'react-router-dom'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>

      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/whoweare" exact component={Whoweare} />
        <Route path="/whatwedo" exact component={Whatwedo} />
        <Route path="/career" exact component={Career} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contactus" exact component={Contact} />
        <Route path="*" exact component={Notfound} />
      </Switch>
       </Router>
    </div>
  );
}

export default App;
