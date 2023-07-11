import "../App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
// import promooffmobile from "../assets/promos/ultimamobile.png";
// import off30 from "../assets/promos/desktop1.png";
import solofondo from "../assets/fondos/solofondo.png"
import textdesk from "../assets/promos/Frame 39.png";
import { motion, useAnimation } from "framer-motion";

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavBar, setShowNavBar] = useState(true);
  const [showButton, setButton] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 850;
  const small = 500;

  const changeSlide = (index) => {
    setCurrentIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <div className="slick-prev"></div>,
    nextArrow: <div className="slick-next"></div>,
  };

  return (
    <CarrouselContainer>
      {showNavBar && (
        <nav className="navbar">
          <Navbar />
        </nav>
      )}

      {width >= medium ? (
        <>
          <Slider {...settings} afterChange={setCurrentIndex}>
            {/* <SlideContainer>
              <img
                style={{
                  backgroundImage: `url(${promomixdesktop})`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></img>

              {showButton && (
         <></>
              )}
            </SlideContainer> */}
            <SlideContainer>
              <img
                style={{
                  backgroundImage: `url(${solofondo})`,
                  height: "100%",
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
            
                }}
              />
              {showButton && (
         <></>
              )}
              <Text>
              <img src={textdesk}/>
              </Text>
            </SlideContainer>
          </Slider>
        </>
      ) :
      //  : (
      //   <>
      //     {width >= small ? (
      //       <>
      //         <Slider {...settings} afterChange={setCurrentIndex}>
      //           {/* <SlideContainer>
      //             <img
      //               style={{
      //                 backgroundImage: `url(${promomixtablet})`,
      //                 height: "100%",
      //                 width: "100%",
      //                 backgroundSize: "cover",
      //                 backgroundPosition: "center",
      //               }}
      //             />
      //           </SlideContainer>
      //           <SlideContainer>
      //             <img
      //               style={{
      //                 backgroundImage: `url(${promomixtablet})`,
      //                 height: "100%",
      //                 width: "100%",
      //                 backgroundSize: "cover",
      //                 backgroundPosition: "center",
      //               }}
      //             />
      //           </SlideContainer> */}
      //         </Slider>
      //       </>
      //     ) : 
          
          (
            <>
              <Slider {...settings} afterChange={setCurrentIndex}>
                {/* <SlideContainer>
                  <img
                    style={{
                      backgroundImage: `url(${promomixmobile})`,
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </SlideContainer> */}
                <SlideContainer>
                  <img
                    style={{
                      backgroundImage: `url(${solofondo})`,
                      height: "100%",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </SlideContainer>
              </Slider>
            </>
          )}
      
      
    </CarrouselContainer>
  );
}

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


export default Carrousel;
