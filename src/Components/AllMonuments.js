import React from 'react';
import './AllMonuments.css';
import india from './../Images/india_blue1.jpg';
import MonumentsList from './MonumentsList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Gallery from './Gallery';

const AllMonuments = () => {
  return (
    <>
    <img src={india} style={{height:"70vh", width:"100%",objectFit:'cover', marginTop:"-56px"}}/>
    <Gallery title="Pune"/>
    <Gallery title="Agra"/>
    <Gallery title="Mumbai"/>
    <Gallery title="Aurangabad"/>
    <Gallery title="Delhi"/>


    {/* <div className='container my-4'>
      <div className='content-holder'>
        <div className='left-city'>
          <h1 className='dancingscript-font z-1'>Pune</h1>
          <h2 className='devanagari-font z-1'>पुणे तिथे काय उणे</h2>
        </div>

        <img src='https://www.transindiatravels.com/wp-content/uploads/shaniwarwada.jpg' className='left-city-content'/>
        <img src='https://static.tnn.in/thumb/msid-88931016,updatedat-1642332788892,width-1280,height-720,resizemode-75/88931016.jpg' className='left-city-content'/>
        
        <MonumentsList/>

      </div>  
    </div>

    <div className='container my-4'>
      <div className='content-holder'>
        <div className='left-city'>
          <h1 className='dancingscript-font z-1'>Pune</h1>
          <h2 className='devanagari-font z-1'>पुणे तिथे काय उणे</h2>
        </div>

        <img src='https://www.transindiatravels.com/wp-content/uploads/shaniwarwada.jpg' className='left-city-content'/>
        <img src='https://static.tnn.in/thumb/msid-88931016,updatedat-1642332788892,width-1280,height-720,resizemode-75/88931016.jpg' className='left-city-content'/>
        
        <MonumentsList/>

      </div>  
    </div> */}
    </>
  )
}

export default AllMonuments
