import React from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';


import Todo from "./Todo";



function App() {
  return (
   <BrowserRouter>
      <div className="container">
          <Routes>
               <Route path="/Todo" element={<Todo />}/>
          </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
