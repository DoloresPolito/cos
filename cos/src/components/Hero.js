import "../App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
// import promooffmobile from "../assets/promos/ultimamobile.png";
// import off30 from "../assets/promos/desktop1.png";
import solofondo from "../assets/fondos/solofondo.png"
import textdesk from "../assets/promos/Frame 39.png";
import { motion, useAnimation } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
function Hero() {

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 850;
  const small = 500;



  return (


    <CoverSection width={width}>
        <Navbar/>
    <Parallax speed={-1}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeIn" }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Logo src={textdesk} />
      </motion.div>
    </Parallax>
  </CoverSection>



   
  );
}


const Logo = styled.img`
  position: absolute;
  /* height: 600px;
  width: 600px; */
  top: -35px;

  @media only screen and (max-width: 1160px) {
    height: 600px;
    width: 800px;
    top: 80px;
    top: 10px;
  }

  @media only screen and (max-width: 700px) {
    height: 500px;
    width: 680px;
    top: 80px;
  }

  @media only screen and (max-width: 450px) {
    height: 300px;
    width: 370px;
    /* top: 20vh !important; */
  }

  @media only screen and (max-width: 370px) {
    height: 300px;
    width: 340px;
    /* top: 20vh !important; */
  }
`;

const CoverSection = styled.div`
  width: 100%;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  /* height: auto; */
  background: url(${solofondo}) no-repeat center center fixed;
  background-size: cover;
  position: relative;


  @media only screen and (max-width: 450px) {
    height: 500px !important;
  }
`;

const CarrouselContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
  z-index: 10;
`;

const SlideContainer = styled.div`
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
/* position:absolute;
top:60px;
left:0; */

display: flex;
justify-content: center;
margin-top: -660px;

`


export default Hero;
