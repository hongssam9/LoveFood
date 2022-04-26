import "./App.css";
import Home from "./Components/Home";
import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Menu from "./Components/Menu";
import Settings from "./Components/Settings";
import Info from "./Components/Info";
import Messages from "./Components/Messages";
import Login from "./Components/Login";
import Terms from "./Components/Terms";
import Checkout from "./Components/Checkout";
import Account from "./Components/Acount.jsx";
import logo from "./image/logo192.png" 

function App() {
  return (
    <div className="App">
      <main>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <nav>
       
          <Link to="/Menu">
            <button className="headerButton" id="menuButton">
              <div className="menu"></div>
              <div className="menu"></div>
              <div className="menu"></div>
            </button>
          </Link>
        </nav>
        <div className="container-random">
    
          <Route exact path="/" component={Home} />
          <Route exact path="/Menu" component={Menu} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/Info" component={Info} />
          <Route exact path="/Messages" component={Messages} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Terms" component={Terms} />
          <Route exact path="/Checkout" component={Checkout} />
          <Route exact path="/Account" component={Account} /> 
          
        </div>
      </main>
      {/* <section id = "Start-Page">
        <h1 id = "Title-Start-Page">Lood</h1>

      </section> */}
    </div>
  );
}

export default App;
