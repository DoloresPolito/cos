import React, {useEffect} from "react";
import styled from "styled-components";
import mancha1 from "../assets/others/Mancha 3.png";
import mancha2 from "../assets/others/Manch 4.png";
import vino1 from "../assets/grilla/Bressia Lagrima Canela.png";
import vino2 from "../assets/grilla/Gran Enemigo Gualtallary.png";
import vino3 from "../assets/grilla/Dv Catena Chardonnay.png";
import vino4 from "../assets/grilla/Rutini Coleccion Malbec.png";
import vino5 from "../assets/grilla/Saint Felicien Chardonnay.png";
import vino6 from "../assets/grilla/Felino.png";
import vino7 from "../assets/grilla/Cocodrilo.png";
import vino8 from "../assets/grilla/Dv Catena Malbec Malbec.png";
import arrow from "../assets/icons/arrow-down.png"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fondomix from "../assets/fondos/fondomixbaja.png";
import { Parallax } from "react-scroll-parallax";

const Mix = () => {


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
          duration: 0.1,
          ease: "easeIn",
        },

      });
    }

    if (!inView) {
  

      animation1.start({
        x: "-20%",
      });


      animation2.start({
        opacity: 0.5,

      });
      
    }
  }, [inView]);


  return (
    <>
      <MixSection id="mix" ref={ref}>
        <Top>
       <Parallax speed={8}>


          <Img1 src={mancha1} alt="macha"/>

          </Parallax>
          <motion.h2 animate={animation2}>PROMO Mix</motion.h2>

          <motion.h2 animate={animation2}>
            ¡Armá una o más cajas con tus vinos favoritos!
            {/* Explora una exquisita variedad de vinos y elige tus 6 favoritos
            para armar una caja única y llena de sabor! */}
          </motion.h2>
          <Content>
          <motion.h3
          
          animate={animation2}>
            ¡Podés elegir un mix con los siguientes vinos para crear una caja
            llena de variedad, sabores y experiencias vinícolas que te dejarán
            con ganas de más! ¡Disfrutá y explorá los mejores vinos que el mundo
            tiene para ofrecer!
          </motion.h3>
            <Parallax speed={-5}>
          <motion.img animate={animation2} src={arrow} />
                 </Parallax>
          </Content>

          <Parallax speed={8}>
          <Img2 src={mancha2} alt="macha"/>
          </Parallax>
        </Top>
        <Bottom>
          <BoxContainer>
            <Box>
              <img src={vino1} alt="wine"/>
              <div>
                <h2>Bressia Lagrima Canela</h2>
                <h3>CHARDONNAY</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino2} alt="wine"/>
              <div>
                <h2>Gualtallary</h2>
                <h3>malbec</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino3} alt="wine"/>
              <div>
                <h2>DV Catena Chardonnay</h2>
                <h3>cabernet franc</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino4} alt="wine"/>
              <div>
                <h2>Rutini Coleccion Malbec</h2>
                <h3>malbec</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino5} alt="wine"/>
              <div>
                <h2>Saint Felicien Malbec</h2>
                <h3>malbec</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino7} alt="wine" />
              <div>
                <h2>Cocodrilo</h2>
                <h3>cabernet sauvignon</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino6} alt="wine"/>
              <div>
                <h2>Felino</h2>
                <h3>CHARDONNAY</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>

            <Box>
              <img src={vino8} alt="wine"/>
              <div>
                <h2>DV Catena </h2>
                <h3>syrah</h3>
                <button>
                  {" "}
                  <p>$5.600</p>
                </button>
              </div>
            </Box>
          </BoxContainer>
        </Bottom>
      </MixSection>
    </>
  );
};

const MixSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: #6f5358;
  background-image: url(data:image/png;base64,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);
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  flex: 1;
  background-color: #6a7059;
  color: white;
  border: 0.5px solid white;
  opacity: 0.95;
  padding: 40px 0px;
  position:relative;

  @media only screen and (max-width: 500px) {
    padding: 40px 20px;
  }

  p {
    font-family: "Bebas Neue", cursive;
    color: white;
    letter-spacing: 1px;

    font-size: 30px;
    cursor: pointer;
  }

  img {
    height: 60px;
    width: 60px;
  }

  h2 {
    font-family: "Bebas Neue", cursive;
    color: white;
    letter-spacing: 2px;

    font-size: 30px;
    cursor: pointer;
    max-width: 700px;


    @media only screen and (max-width: 800px) {
      font-size: 25px;

  }

  @media only screen and (max-width: 670px) {
      font-size: 20px;

  }
  }

  h3{
    text-align: start;
  }

  

`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 50%;
  background-color: white;
  /* background-image:
  
  url("./fondomixbaja.png")
  
  ; */
  background-image: url(${fondomix});

  z-index: 100;
  padding: 80px 10px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  

  @media only screen and (max-width: 700px) {
    width: 90%;
  }

  @media only screen and (max-width: 420px) {

    width: 100%;
    padding:0px;
  }
`;

const Img1 = styled.img`
  position: absolute;
  top: 0;
  left: -730px;
  height: 400px !important;
  width: 200px !important;
  z-index: -1;
`;

const Img2 = styled.img`
  position: absolute;
  top: -230px;
  left: 450px;
  height: 300px !important;
  width: 200px !important;

  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;

  margin: 10px;
  background-color: white;
  opacity: 0.8;

  height: 230px;
  width: 250px;

  @media only screen and (max-width: 620px) {
    height: 210px;
    width: 210px;
  }

  @media only screen and (max-width: 532px) {
    height: 210px;
    width: 180px;
  }

  @media only screen and (max-width: 465px) {
    height: 210px;
    width: 156px;
    padding:0px;
    

  }

  img {
    position: relative;
    left: -40px;

    @media only screen and (max-width: 390px) {
      left: -45px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 40px;
    margin-left: -60px;

    @media only screen and (max-width: 620px) {
      margin-top: 20px;
      margin-left: -60px;
    }
    @media only screen and (max-width: 465px) {
      margin-top: 20px;
      margin-left: -80px;
    }

    @media only screen and (max-width: 390px) {

      margin-left: -85px;
    }

    h2 {
      font-size: 12px;
      font-weight: 600;
      font-family: "Cinzel", sans-serif;
      text-transform: uppercase;
      color: #5b5a5a;
      text-align: start;

      @media only screen and (max-width: 620px) {
        font-size: 12px;
      }

      @media only screen and (max-width: 465px) {
        font-size: 10px;
      }
    }

    h3 {
      font-size: 12px;
      font-weight: 600;
      font-family: "Roboto";
      text-transform: uppercase;
      color: #6a7059;

      text-align: start;
      @media only screen and (max-width: 620px) {
        font-size: 11px;
      }
      @media only screen and (max-width: 465px) {
        font-size: 10px;
      }
    }

    button {
      background-color: #6a7059;
      color: white;
      border: none;
      width: 80px;
      height: 30px;
      /* margin-top: 30px; */
      position: relative;
      top: 50px;

      @media only screen and (max-width: 620px) {
        width: 60px;
        height: 25px;
      }

      @media only screen and (max-width: 465px) {
        width: 55px;
      }

      p {
        margin-top: 6px;
        @media only screen and (max-width: 620px) {
          margin-top: 4px;
        }
      }
    }
  }
`;

const Content = styled.div`
display:flex;

align-items: center;



h3 {
    font-family: "Poppins";
    color: white;
    letter-spacing: 1px;

    font-size: 15px;
    cursor: pointer;
    max-width: 500px;
    font-weight: 400;
    padding-bottom: 50px;
margin-right: 50px;

    @media only screen and (max-width: 800px) {
      font-size: 13px;

  }

  @media only screen and (max-width: 670px) {
      font-size: 12px;
      max-width: 400px;
  }


  }
`
export default Mix;
