import React from "react";
import "./App.css";
import Home from "./pages/home/home";
import Rooms from "./pages/rooms/rooms";
import FourZeroFour from "./pages/fourZeroFour/fourZeroFour";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/header";
// import Footer from './components/footer/footer';
 


function App() {
  return (
    <div className="App">
      <NavBar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rooms" element={<Rooms />} />
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
