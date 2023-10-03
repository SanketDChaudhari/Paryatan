import React from 'react';
import './AllMonuments.css';
import india from './../Images/india_blue1.jpg';
import Gallery from './Gallery';

const AllMonuments = (props) => {
  return (
    <>
    <img src={india} style={{height:"70vh", width:"100%",objectFit:'cover', marginTop:"-56px"}}/>
    <Gallery title="Delhi" Data={props.Data}/>
    <Gallery title="Pune" Data={props.Data}/>
    <Gallery title="Agra" Data={props.Data}/>
    <Gallery title="Mumbai" Data={props.Data}/>
    <Gallery title="Aurangabad" Data={props.Data}/>
    <Gallery title="Other" Data={props.Data}/>
    </>
  )
}

export default AllMonuments
