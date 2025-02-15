import React from 'react'
// import { BrowserRouter, Routes, Route } from ;
import Home from "../../pages/home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Scores from "../../pages/Scores";
import PopularPlayer from "../../pages/PopularPlayer";
import Navbar from "../Navbar";
import Footer from "../Footer"
import { BrowserRouter, Route, Routes } from 'react-router';


const index = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/popularplayer" element={<PopularPlayer />} />
          <Route path="/scores" element={<Scores />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default index
