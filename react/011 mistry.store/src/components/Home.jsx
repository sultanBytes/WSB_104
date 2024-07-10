import React from 'react'
import Header from './common-components/Header';
import collectionBg from './../assets/images/collections-no-bg.png';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//slider images
import slideImg1 from './../assets/images/collections_banner.jpg';
import slideImg2 from './../assets/images/deliveryPackageBanner.jpg';
import slideImg3 from './../assets/images/Low+Price+Challenge+Banner.png';
import slideImg4 from './../assets/images/grillbannersmall.png';
import slideImg5 from './../assets/images/500+Coupon+Banner.png';

const Home = () => {

  let settings = {
    accessibility:true,
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    pauseOnHover:true,
    autoplaySpeed:1000,
    responsive:[
      {
        breakpoint:992,
        settings: {
          slidesToShow:2
        }
      },
      {
        breakpoint:667,
        settings: {
          slidesToShow:1
        }
      }
    ]
  };


  return (
    <>
      <Header />
      <div className='container-fluid bg-white'>
        <div className='container '>
          <Link to='/'>
            <div className='home-banner'>
              <h2>introducing</h2>
              <img src={collectionBg}></img>
              <p>
                A curated collection of trending interior materials,
              </p>
              <p>tailored exclusively for all Architects, Interior Designers & Contractors</p>
              <p>
                Decorative Wall Panels | Louvers | Modular Hardware & Accessories | Laminates | Flooring Solutions | Invisible Grille
              </p>
            </div>
          </Link>
        </div>


      </div >

      <div className='py-4'>
        <Slider {...settings}>
          <div className='slider-card'>
            <div>
              <img src={slideImg1} className='rounded-4'></img>
            </div>
          </div>
          <div className='slider-card'>
            <div>
              <img src={slideImg2}></img>
            </div>
          </div>
          <div className='slider-card'>
            <div>
              <img src={slideImg3}></img>
            </div>
          </div>
          <div className='slider-card'>
            <div>
              <img src={slideImg4}></img>
            </div>
          </div>
          <div className='slider-card'>
            <div>
              <img src={slideImg5}></img>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Home