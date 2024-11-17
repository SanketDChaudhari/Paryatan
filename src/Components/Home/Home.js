import React from 'react';
import CarouselHome from '../CarouselHome';
import Gallery from '../Gallery';
import AboutComponent from '../AboutComponent';
const Home = (props)=>{
    
    return(
    <>
        <CarouselHome/>
        <Gallery title="What's Hot" Data={props.Data}/>
        <AboutComponent/>
        <Gallery title="All" Data={props.Data}/>
    </>
    )

}

export default Home; 