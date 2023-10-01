import './App.css';
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CarouselHome from "./Components/CarouselHome";
import WhatsHot from './Components/Gallery';
import About from './Components/About';
import MonumentInfo from './Components/MonumentInfo';
import AboutComponent from './Components/AboutComponent';
import AllMonuments from './Components/AllMonuments';
import MonumentsPath from './Components/AboutSection';
import Try from './Components/Try';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useParams
} from 'react-router-dom';
import fetchFromApi from "./utils/api";
import Home from './Components/Home/Home';


function App() {

  return (
    <div>
      
      <Router>
        
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/MonumentInfo" element={<MonumentInfo/>}></Route>
          <Route path="/AllMonuments" element={<><AllMonuments/></>}></Route>
        </Routes>
        <MonumentsPath/>
        <Footer/>

      </Router>
      
    </div>
  );
}
//<WhatsHot title="Trending Monuments"/>
export default App;
