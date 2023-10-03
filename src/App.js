import './App.css';
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from './Components/About';
import MonumentInfo from './Components/MonumentInfo';
import AllMonuments from './Components/AllMonuments';
import MonumentsPath from './Components/AboutSection';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {
  const [Data,setData]=useState([]);
  const BASE_URL = "https://findgreatminds.co.in";
  useEffect(()=>{
    const fetchFromApi = async() => {
      const {data} = await axios.get(`${BASE_URL}/monument`);
      setData(data);
      console.log(data);
    }
    fetchFromApi();
  },[])

  
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home Data={Data}/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/MonumentInfo" element={<MonumentInfo Data={Data}/>}></Route>
          <Route path="/AllMonuments" element={<AllMonuments Data={Data}/>}></Route>
        </Routes>
        <MonumentsPath/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
