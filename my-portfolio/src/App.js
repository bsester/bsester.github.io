import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Home from "./Home";
import {HashRouter} from "react-router-dom";

function App() {


  return (
      <div className="App">
      <HashRouter>
          <Header/>
          <Routes>
              <Route path = '/' exact element={<Home/>}/>
              <Route path = '/aboutme' element={<AboutMe/>}/>
              <Route path = '/projects' element={<Projects/>}/>
              <Route path = '/education' element = {<Education/>}/>
          </Routes>
      </HashRouter>
      </div>
  );
}

export default App;