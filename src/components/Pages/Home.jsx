import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { NavLink } from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import BlurText from "../../animate/TextBlur";
import Stack from '../../animate/ImageSlider'
import DomeGallery from '../../animate/Globe';

const Home = () => {




const images = [
  { id: 1, img: "./src/assets/randomPerson/card1-2.webp",tag:"Outdoor"},
  { id: 2, img: "./src/assets/randomPerson/card2-2.webp" ,tag:"Running"},
  { id: 3, img: "./src/assets/randomPerson/card3-2.webp",tag:"DogParent" },
  { id: 4, img: "./src/assets/randomPerson/card4.avif" ,tag:"Foodie"},
  { id: 5, img: "./src/assets/randomPerson/card4.avif" ,tag:"Adventure"},
  { id: 6, img: "./src/assets/randomPerson/card4.avif" ,tag:"Outdoor"}
];
  





  return (
<div className="">
<div className="h-screen w-screen bg-amber-300 flex justify-center items-center">
  {/* <h1 className="text-[7rem] md:text-[11rem] font-extrabold text-[#2E2E2E] tracking-tight leading-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)] font-[Poppins] select-none">
    Stich<span className="text-white italic drop-shadow-[0_4px_8px_rgba(255,255,255,0.4)]">Love</span>
  </h1> */}<BlurText
  text= "StichLove"
  delay={200}
  animateBy="letter"
  direction="top"

  className="text-[7rem] md:text-[11rem] font-extrabold text-[#685d5d] tracking-tight leading-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)] font-[Poppins] select-none"
/>
</div>
<div className=" w-full flex my-15 flex-col md:flex-row items-center justify-around px-8 bg-white">
  {/* Left Text & Button Section */}
  <div className="max-w-md space-y-6 text-center md:text-left">
    <p className="text-6xl font-extrabold text-[#2E2E2E] leading-tight">
      We exist to bring people closer to <span className="text-[#FFB300]">love.</span>
    </p>

    <p className="text-lg md:text-xl text-gray-700 max-w-md">
      We want our members to find meaningful and authentic relationships 
      that ignite confidence and joy.
    </p>

    <button className="mt-6 bg-black text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#2E2E2E] hover:scale-[1.03] transition-all duration-300">
      Download StichLove
    </button>
  </div>

  {/* Right Images Section */}
  <div className="flex flex-wrap  relative z-0 gap-4 max-w-xl justify-center mt-10 md:mt-0">
<Stack  
randomRotation={true}
 sensitivity={180}
 sendToBackOnClick={true}
 cardDimensions={{ width: 400, height: 600 }}
 cardsData={images}/>

  </div>

</div>
   <div className="flex gap-10 w-full p-4">
      {/* Card 1 */}
      <div className="flex flex-col rounded-2xl items-center justify-center bg-amber-300 w-1/2 p-10 text-center 
                      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-amber-400">
        <img
          src="src/assets/randomPerson/groupUser1.webp"
          alt="Bumble Date"
          className="w-80 h-80 object-cover rounded-2xl mb-5"
        />
        <h1 className="text-2xl font-bold mb-3">Bumble Date</h1>
        <p className="text-gray-700 mb-6">
          Whether you're new to dating or ready to try again, Bumble Date is built to bring you closer to love safely and meaningfully.
        </p>
        <NavLink
          to="/friends"
          className="bg-white text-amber-600 font-semibold px-5 py-2 rounded-full shadow-md 
                     hover:bg-amber-600 hover:text-white transition-colors duration-300"
        >
          Find Your People
        </NavLink>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col rounded-2xl items-center justify-center bg-amber-300 w-1/2 p-10 text-center 
                      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-amber-400">
        <img
          src="src/assets/randomPerson/groupUser2.webp"
          alt="BFF"
          className="w-80 h-80 object-cover rounded-2xl mb-5"
        />
        <h1 className="text-2xl font-bold mb-3">BFF</h1>
        <p className="text-gray-700 mb-6">
          Whether you’ve moved to a new city or just want to expand your circle, BFF makes it easy to meet like-minded people who match your vibe.
        </p>
        <NavLink
          to="/friends"
          className="bg-white text-amber-600 font-semibold px-5 py-2 rounded-full shadow-md 
                     hover:bg-amber-600 hover:text-white transition-colors duration-300"
        >
          Find Your People
        </NavLink>
      </div>
    </div>


<div className=" my-25" style={{ width: '100vw', height: '100vh' }}> <h1 className="text-4xl font-bold mb-6 text-center  text-gray-800">Connect</h1> <DomeGallery /> </div>



</div>

  )}


export default Home