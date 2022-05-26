import React from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Header from "./Header";
import About from "./About";
import Price from "./Price";
import Information from "./Information";
import People from "./People";
import Todo from "./Todo";
import Todo2 from "./Todo2";
import Todo3 from "./Todo3";


function App() {
  return (
   <BrowserRouter>
       <Header />
      <div className="container">
          <Routes>
              <Route path="/About" element={<About />}/>
              <Route path="/Price" element={<Price />}/>
              <Route path="/Information" element={<Information />}/>
              <Route path="/People" element={<People />}/>
              <Route path="/Todo" element={<Todo />}/>
              <Route path="/Todo2" element={<Todo2 />}/>
              <Route path="/Todo3" element={<Todo3 />}/>

          </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
