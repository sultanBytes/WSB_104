import React, { useEffect, useState } from 'react'
import Header from './common-components/Header';
import collectionBg from './../assets/images/collections-no-bg.png';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Marquee from "react-marquee-slider";
import times from "lodash/times";

//slider images
import slideImg1 from './../assets/images/collections_banner.jpg';
import slideImg2 from './../assets/images/deliveryPackageBanner.jpg';
import slideImg3 from './../assets/images/Low+Price+Challenge+Banner.png';
import slideImg4 from './../assets/images/grillbannersmall.png';
import slideImg5 from './../assets/images/500+Coupon+Banner.png';
import TabCard from './common-components/TabCard';


//tab-images
import tabImg1 from './../assets/images/elctricals1.svg';
import tabImg2 from './../assets/images/elctricals2.svg';
import tabImg3 from './../assets/images/elctricals3.svg';
import tabImg4 from './../assets/images/elctricals4.svg';

const Home = () => {

  const [cat, setCat] = useState('electricals');
  const [data, setData] = useState([]);
  const [marqueeVelocity, setVelocity] = useState(100);

  let settings = {
    accessibility: true,
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const tabData = [
    {
      category: "electricals",
      thumbanail: tabImg1
    },
    {
      category: "electricals",
      thumbanail: tabImg1
    },
    {
      category: "electricals",
      thumbanail: tabImg1
    },
    {
      category: "electricals",
      thumbanail: tabImg1
    },
    {
      category: "electricals",
      thumbanail: tabImg1
    },
    {
      category: "electricals",
      thumbanail: tabImg1
    },
    {
      category: "electricals",
      thumbanail: tabImg1
    },
    {
      category: "electricals",
      thumbanail: tabImg1
    },
    {
      category: "electricals",
      thumbanail: tabImg1
    },
    {
      category: "electricals",
      thumbanail: tabImg1
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "paint",
      thumbanail: tabImg2
    },
    {
      category: "wood",
      thumbanail: tabImg3
    },
    {
      category: "wood",
      thumbanail: tabImg3
    },
    {
      category: "wood",
      thumbanail: tabImg3
    },
    {
      category: "wood",
      thumbanail: tabImg3
    },
    {
      category: "wood",
      thumbanail: tabImg3
    },
    {
      category: "wood",
      thumbanail: tabImg3
    },
    {
      category: "wood",
      thumbanail: tabImg3
    },
    {
      category: "plumbing",
      thumbanail: tabImg4
    },
    {
      category: "plumbing",
      thumbanail: tabImg4
    },
    {
      category: "plumbing",
      thumbanail: tabImg4
    },
    {
      category: "plumbing",
      thumbanail: tabImg4
    },
    {
      category: "plumbing",
      thumbanail: tabImg4
    }, {
      category: "plumbing",
      thumbanail: tabImg4
    },
    {
      category: "plumbing",
      thumbanail: tabImg4
    },
    {
      category: "plumbing",
      thumbanail: tabImg4
    },
    {
      category: "plumbing",
      thumbanail: tabImg4
    },
    {
      category: "plumbing",
      thumbanail: tabImg4
    },
    {
      category: "plumbing",
      thumbanail: tabImg4
    }
  ];

  const filterTabData = (type) => {
    const electricalsData = tabData.filter((item) => item.category === type);

    setData(electricalsData);
  }

  useEffect(() => {
    filterTabData(cat);
  }, [cat]);



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

      <div>
        <div className='container border p-5'>
          <h1>Trusted by <span className='text-danger'>75+ Brands</span></h1>
          <div className='tab-container'>
            <div className='tab-head pt-3'>
              <button onClick={() => { setCat('electricals') }} className={`${(cat === 'electricals') ? 'active-tab-btn' : ''}`}>Electricals</button>
              <button onClick={() => { setCat('paint') }} className={`${(cat === 'paint') ? 'active-tab-btn' : ''}`}>Paints</button>
              <button onClick={() => { setCat('wood') }} className={`${(cat === 'wood') ? 'active-tab-btn' : ''}`}>Wood Materials</button>
              <button onClick={() => { setCat('plumbing') }} className={`${(cat === 'plumbing') ? 'active-tab-btn' : ''}`}>Hardware & Plumbing</button>
            </div>
            <div className='tab-body'>
              {
                data.map((tabItem) => (
                  <TabCard details={tabItem} />
                ))
              }

            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ backgroundColor:'red'}} onMouseEnter={()=>{setVelocity(0)}} onMouseLeave={()=>{setVelocity(100)}}>
          <Marquee velocity={marqueeVelocity} minScale={0.7} resetAfterTries={200}>
            {times(1, Number).map((id) => (
             
                <div>
                  Send your product requirements by sharing images, adding items from our master list, call your RM or Whatsapp
                </div>

            ))}
          </Marquee>
        </div>;
      </div>
      <div style={{ height: '800px' }}>

      </div>
    </>
  )
}

export default Home