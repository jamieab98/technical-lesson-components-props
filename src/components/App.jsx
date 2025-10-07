import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;