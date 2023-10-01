import react from 'react';
import CarouselHome from '../CarouselHome';
import Gallery from '../Gallery';
import AboutComponent from '../AboutComponent';
const Home = ()=>{
    
    return(
    <>
        <CarouselHome/>
        <Gallery title="What's Hot"/>
        <AboutComponent/>
        <Gallery title="What's Hot"/>
    </>
    )

}

export default Home; 