import './App.css';
import { useState } from "react";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import CarouselHome from "./MyComponents/CarouselHome";
import WhatsHot from './MyComponents/WhatsHot';
import About from './MyComponents/About';
import MonumentInfo from './MyComponents/MonumentInfo';
import AboutComponent from './MyComponents/AboutComponent';
import AllMonuments from './MyComponents/AllMonuments';
import india from './Images/india_blue.jpg';
import MonumentsPath from './MyComponents/MonumentsPath';
import Try from './MyComponents/Try';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useParams
} from 'react-router-dom';


function App() {

  return (
    <div>
      
      <Router>
        
        <Header/>

        <Routes>
          <Route exact path="/" element={<><CarouselHome/><WhatsHot title="What's Hot"/><AboutComponent/><WhatsHot title="Trending Monuments"/><MonumentsPath/></>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/MonumentInfo" element={<MonumentInfo/>}></Route>
          <Route path="/AllMonuments" element={<><img src={india} style={{height:"70vh", width:"100%",objectFit:'cover', marginTop:"-56px"}}/><AllMonuments/><AllMonuments/><AllMonuments/></>}></Route>
        </Routes>
        
        <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
