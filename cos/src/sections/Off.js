import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import offfondosolo from "../assets/fondos/offfondosolobaja.png";
import vino3 from "../assets/grilla/Dv Catena Chardonnay.png";
import vino4 from "../assets/grilla/Rutini Coleccion Malbec.png";
import vino5 from "../assets/grilla/Saint Felicien Chardonnay.png";
import vino6 from "../assets/grilla/Dv Catena Malbec.png";
import { Link } from "react-scroll";
import Carousel from "react-elastic-carousel";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Off = () => {

  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const medium = 800
  const small = 620
  const small2 = 460

  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });


  useEffect(() => {
    if (inView) {


      animation1.start({
        x: 0,
        transition: {
          duration: 0.75,
          bounce: 0.5,
          ease: "easeIn",
        },
      });

      animation2.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeIn",
        },

      });
    }

    if (!inView) {
  

      animation1.start({
        x: "-20%",
      });


      animation2.start({
        opacity: 0,

      });
      
    }
  }, [inView]);

  return (
    <>


      <BenefitsContainer ref={ref}>
        <Carousel itemsToShow={width > medium ? 4 : width > small ? 3 : width > small2 ? 2 : 1} enableTilt={true} pagination={false}>
          <Item>
            <Box>
              <OffDetail><p>30% <br/>OFF</p></OffDetail>
              <motion.div animate={animation2}>
                <h2>Rutini Coleccion</h2>
                <h3>malbec</h3>
                <img src={vino4} alt="wine"/>

                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
              </motion.div>
            </Box>
          </Item>
          <Item>
            <Box>
            <OffDetail><p>25% <br/>OFF</p></OffDetail>
            <motion.div animate={animation2}>
                <h2>Saint Felicien </h2>
                <h3>malbec</h3>
                <img src={vino5} alt="wine"/>
                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
                </motion.div>
            </Box>{" "}
          </Item>
          <Item>
            <Box>
            <OffDetail><p>20% <br/>OFF</p></OffDetail>
            <motion.div animate={animation2}>
                <h2>DV Catena </h2>
                <h3>Malbec</h3>
                <img src={vino6} alt="wine"/>
                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
                </motion.div>
            </Box>
          </Item>
          <Item>
            <Box>
            <OffDetail><p>15% <br/>OFF</p></OffDetail>
            <motion.div animate={animation2}>
                <h2>DV Catena </h2>
                <h3>Chardonnay </h3>
                <img src={vino3} alt="wine"/>
                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
                </motion.div>
            </Box>
          </Item>
          <Item>
            <Box>
            <OffDetail><p>20% <br/>OFF</p></OffDetail>
            <motion.div animate={animation2}>
                <h2>DV Catena </h2>
                <h3>Chardonnay </h3>
                <img src={vino3} alt="wine"/>
                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
                </motion.div>
            </Box>
          </Item>
          <Item>
            <Box>
            <OffDetail><p>30% <br/>OFF</p></OffDetail>
            <motion.div animate={animation2}>
                <h2>DV Catena </h2>
                <h3>Chardonnay </h3>
                <img src={vino3} alt="wine"/>
                <p className="prevprice">$7.600</p>

                <button className="now">
                  {" "}
                  <p className="nowprice">$5.600</p>
                </button>
                </motion.div>
            </Box>
          </Item>
        </Carousel>

        <Link to="products" smooth={true} duration={1000}>
          <button className="vertodo">ver todos los productos</button>
        </Link>
      </BenefitsContainer>
    </>
  );
};



const Box = styled.div`
  display: flex;
  flex-direction: column !important;
  padding-top: 60px;
  z-index: 100;

  img {
    height: 360px;

  }

  div {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    .prev {
      background-color: #6f5358;
      color: white;
      border: none;
      width: 80px;
      height: 30px;
      margin-bottom: 10px;

      p {
        margin-top: 6px;
        text-decoration: line-through;
      }

      .prevprice {
        margin-top: 6px;
        text-decoration: line-through;
        color: #6f5358;
      }
    }

    .prevprice {
      margin-top: 6px;
      text-decoration: line-through;
      color: #6f5358;
      font-weight: 600;
    }

    .nowprice {
      margin-top: 6px;
      color: white;
      font-weight: 700;
    }
    .now {
      background-color: #6a7059;
      color: white;
      border: none;
      width: 80px;
      height: 30px;
      margin-bottom: 10px;

      p {
        margin-top: 6px;
      }
    }

    h2 {
      font-size: 22px;
      font-weight: 600;
      font-family: "Cinzel", sans-serif;
      text-transform: uppercase;
      color: #252525;
      font-family: "Cormorant", serif;
    }

    h3 {
      font-size: 18px;
      font-weight: 600;
      font-family: "Roboto";
      text-transform: uppercase;
      color: #6a7059;
    }
  }
`;

const Item = styled.div`
  letter-spacing: 0.02em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;


  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: left;
    justify-content: center;
    align-items: flex-start !important;
  }
  
  div {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    .prev {
      background-color: #6f5358;
      color: white;
      border: none;
      width: 80px;
      height: 30px;
      margin-bottom: 10px;

      p {
        margin-top: 6px;
        text-decoration: line-through;
      }

      .prevprice {
        margin-top: 6px;
        text-decoration: line-through;
        color: #6f5358;
      }
    }

    .prevprice {
      margin-top: 6px;
      text-decoration: line-through;
      color: #6f5358;
      font-weight: 600;
    }

    .nowprice {
      margin-top: 6px;
      color: white;
      font-weight: 700;
    }
    .now {
      background-color: #6a7059;
      color: white;
      border: none;
      width: 80px;
      height: 30px;
      margin-bottom: 10px;

      p {
        margin-top: 6px;
      }
    }

    h2 {
      font-size: 22px;
      font-weight: 600;
      font-family: "Bebas Neue", cursive;
      text-transform: uppercase;
      color: #6a7059;
      letter-spacing: 2px;
      height: 10px;
    }

    h3 {
      font-size: 14px;
      font-weight: 600;
      font-family: "Roboto";
      text-transform: uppercase;
      color: #6a7059;

    }
  }
`;

const BenefitsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 0;
  box-sizing: border-box;
  height: auto;
  text-align: left;
  width: 100%;
  height: 100%;
  background-image: url(${offfondosolo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }

  .rec-carousel {
    width: calc(100% + 90px);
    min-height: 300px;
    width: 90vw;
    @media only screen and (max-width: 850px) {
      width: 90vw;
    }
  }
  .rec-slider-container {
    margin: 0;
  }
  .rec-arrow {
    background-color: transparent;
    color: grey;
    box-shadow: none;
  }
  .rec-arrow:hover,
  .rec-arrow:active,
  .rec-arrow:focus {
    background-color: transparent;
    color: black;
    box-shadow: none;
  }

  .vertodo {
    border: 1px solid #6a7059;
    height: 40px;
    background: transparent;
    cursor: pointer;
    color: #6a7059;
    padding: 10px 20px;
    margin-top: 40px;
    margin-bottom: 40px;

  }
`;

const OffDetail = styled.div`
position:relative;
bottom:-170px;
left:-70px;
height: 50px;
width: 50px;
background-color: #6A6F58;
border-radius: 30px;

@media only screen and (max-width: 980px) {
  left:-60px;

}

@media only screen and (max-width: 869px) {
  left:-50px;

}

p{
  font-family: "Bebas Neue", cursive;
  color:white;
  letter-spacing: 1px;
  text-align:center;
}

`

export default Off;
