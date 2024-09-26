import React from 'react'
import heroImg1 from '../Img/heroImage1.jpg'
import { FaAngleDoubleDown } from "react-icons/fa";
import banner1 from '../Img/banner1.jpg';
import banner2 from '../Img/banner2.jpg';
import banner3 from '../Img/banner3.png';

const HeroImage = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide h-[80vh] mt-10" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={banner1} className="d-block w-100 h-[82vh]" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner2} className="d-block w-100 h-[82vh]" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner3} className="d-block w-100 h-[82vh]" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='flex justify-center items-center mt-[2%] text-xl gap-2 '>
                Swipe Up <FaAngleDoubleDown className='animate-bounce' />
            </div>
        </>
    )
}

export default HeroImage