import React from 'react'
import './CarouselHome.css'
const CarouselHome = () => {
  return (
    <div>

    <div className='carousel-content text-center z-1'>
        <h1 style={{color: "White", fontWeight: "bold", fontFamily: "TimesNewRoman"}}>Explore World's Monuments While at Home</h1>
        <h4 style={{color: "#A9A9A9"}}>Paryantan provides an immersive viewing experience</h4>
    </div>

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner carousel-style">
            <div className="carousel-item active">
                <img src="https://punetourism.co.in/images/places-to-visit/headers/shinde-chhatri-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg" className="d-block w-100" alt="..."/>
                
            </div>
            <div className="carousel-item">
                <img src="https://img.atlasobscura.com/Pjt8yz0ZAF27D2mivAtscrwE_wVnF5RkncLUaDVvA0c/rt:fit/h:390/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9mYWNi/MWJmMC01YWM0LTQ4/MmMtYjUzZS03NTNk/NmMwNGIyNzg0N2Yy/OGQ4YWM2NDc1MzUy/MzNfSU1HXzIwMjIw/ODI3XzA4NTYyMC5q/cGc.jpg" className="d-block w-100" alt="..."/>
                
            </div>
            <div className="carousel-item">
                <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTP0hhU4qsFrWYTx4blHT-vgALjt2ChfpUq8umU5qQlmZcVXEdSsg99imeVYTOIZmEp" className="d-block w-100" alt="..."/>
                
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
      
    </div>
  )
}

export default CarouselHome


