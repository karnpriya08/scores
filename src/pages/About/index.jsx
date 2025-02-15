import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/c1.jpeg";
import image2 from "../../assets/c2.png";
import image3 from "../../assets/c3.jpeg";

const index = () => {
  return (
    <>
      <div className='bg-slate-50 text-black p-8'>
        <div>
        <div className="text-center my-3 ">
        <h1 className="text-4xl font-bold m-2 text-red-400">About Us</h1>
        <p className="text-xl text-gray-700 mx-auto">
          Let's watch your favourite Sport with Us.</p>
          
      </div>
      <p className='text-lg mb-8'>Welcome to Score tracker, platform for Contains all the data regarding the top tier Spanish football division - the La Liga.
      From all the players, teams and matches, to live scores and match events, updating by the minute.
            </p>
        </div>
        <div>
          <div className='bg-red-400 text-3xl my-2 p-3 font-semibold '>What We Offer</div>
          <Carousel>

            <div>
              <img src={image1} alt="lo" />
              <p className="legend">Comprehensive Player Stats</p>
            </div>
            <div>
              <img src={image2} alt="lo" /><img src="assets/2.jpeg" />
              <p className="legend">Live Score Updates</p>
            </div>
            <div>
              <img src={image3} alt="lo" />
              <p className="legend">Performance Analytics</p>
            </div>
          </Carousel>
        </div>
       <div className='text-lg'>
        <p>Comprehensive Player Stats</p>
        <p>Live Score Updates</p>
        <p>Match Event Updates</p>
        <p>Engaging Fan Activities</p>
       </div>
       <div className='my-4 '>
        <h1 className=' font-semibold text-3xl bg-red-400 p-3'>Our Mission</h1>
        <p className='text-lg '>The mission of a score tracking website is to
          Make score tracking simple and accessible to a wide range of users with varying 
          levels of technical expertise.Allow users to tailor the platform to their specific needs by adding custom metrics, 
          Enable users to share their scores and progress with teammates, coaches, or peers for support and accountability. 
 </p>
       </div>
       <h1 className=' font-semibold text-3xl bg-red-400 p-3'>Meet Us</h1>
       <div className=' grid grid-cols-1 md:grid-cols-3'>
      
        <div className=' py-4 gap-0 px-8 m-2 border-gray-50 bg-slate-100'>
          <h1 className='font-bold text-lg'>Location</h1>
          <div><p>Score Tracker Private Limited,</p>
            <p>Buildings Tech, It </p>
            <p>Our Tech Village,</p>
            <p>inner Ring Road,  Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Telephone: 021-12345678</p></div>
        </div>
        <div className=' py-4 gap-0 px-8 border m-2 border-gray-50 bg-slate-100'>
          <h1 className='font-bold text-lg'>Contact Number</h1>
          <div><p>+91 1234567890</p>
            <p>+91 1234567890</p>
          </div>
        </div>
        <div className=' py-4 gap-0 px-8 m-2  border-gray-50 bg-slate-100'>
          <h1 className='font-bold text-lg'>Email</h1>
          <div><p>abcdef@gmail.com</p>
            <p> abcdef@gmail.com</p>
          </div>
        </div>

        
       </div>
      </div>

    </>
  )
}

export default index
