// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/header";
import AboutUs from "./components/aboutus";
import Footer from "./components/footer";
import Productboxes from "./components/productboxes";
import Mapcomponent from "./components/mapcomponent";
import Backtotop from "./components/backtotop";
import Contactus from "./components/contactus";
import Sponsors from "./components/sponsors";
import Dresscode from "./components/dresscode";
import Smartpos from './components/smartpos';
import Smartbuilders from './components/smartbuilders';
import Smarttraders from "./components/smarttraders";
import Autopilot from "./components/autopilot";

function App() {

  return (
    <Router>
      <div>
        <Header></Header>
        <AboutUs></AboutUs>
        <Productboxes></Productboxes>
        <Routes>
          <Route exact path="/smartpos" element={<Smartpos></Smartpos>}>
          </Route>
          <Route path="/dresscode" element={<Dresscode></Dresscode>}>
          </Route>
          <Route path="/autopilot" element={<Autopilot></Autopilot>}>
          </Route>
          <Route path="/smartbuilders" element={<Smartbuilders></Smartbuilders>}>
          </Route>
          <Route path="/smarttraders" element={<Smarttraders></Smarttraders>}>
          </Route>
        </Routes>
        <Sponsors></Sponsors>
        <Mapcomponent></Mapcomponent>
        <Contactus></Contactus>
        <Backtotop></Backtotop>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
