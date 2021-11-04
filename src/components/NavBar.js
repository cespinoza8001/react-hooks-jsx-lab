import React from "react";
import Home from "./Home";
import About from "./About";

function NavBar() {
  // update the JSX being returned!
  return <nav>  
  <a href={Home}>Home</a>
  <a href={About}>About</a>
  </nav>;
}

export default NavBar;
