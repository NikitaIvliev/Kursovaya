import React from "react";
import AboutUS from "./Pages/AboutUs";
import ContactUS from "./Pages/ContactUS";
import ListItems from "./Pages/ListItems"
import PageItem from "./Pages/PageItem";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<ListItems />}  />
          <Route path="/AboutUS" element={<AboutUS />}  />
          <Route path="/ContactUS" element={<ContactUS />}  />
          <Route path="/PageItem" element={<PageItem />}  />
        </Routes>
      
    </div> 
  );
}
  
  /*render(){S
  
  }*/


