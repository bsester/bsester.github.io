import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Home from "./Home";

function App() {


  return (
      <div className="App">
      <Header/>
      <BrowserRouter>
          <Routes>
              <Route path = '/' element={<Home/>}/>
              <Route path = '/aboutme' element={<AboutMe/>}/>
              <Route path = '/projects' element={<Projects/>}/>
              <Route path = '/education' element = {<Education/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;