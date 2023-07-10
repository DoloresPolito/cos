import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import close from "../assets/icons/close-verde.png";
import backgroundImage from "../assets/fondos/fondo_producto.png";

const Modal = ({ open, onClose, selectedWine, selectedImage }) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const [width, setWidth] = useState(window.innerWidth);

  const medium = 820;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (inView || open) {
      controls.start("visible");
    }
    if (!open) {
      controls.start("hidden");
    }
  }, [controls, inView, open]);

  if (!open) return null;

  return (
    <>
      <Overlay onClick={onClose}>
        <div ref={ref}>
          <motion.div
          // animate={controls}
          // initial="hidden"
          // variants={{
          //   visible: { width: '455px', height: '625px' },
          //   hidden: { width: '0', height: '0' },
          // }}
          // transition={{ duration: 0.5 }}
          // style={{
          //   backgroundColor: 'black',
          //   border: '2px solid rgb(255, 80, 0)',
          //   borderRadius: '44px',
          //   position: 'absolute',
          //   top: '0',
          //   right: '0',
          //   marginTop: '75px',
          //   marginLeft: 'auto',
          //   marginRight: '80px',
          //   overflow: 'hidden',
          // }}
          >
            {width >= medium ? (
              <>
                <ModalContainerBig
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <>
                    <CloseButton onClick={onClose}>
                      <img src={close} />
                    </CloseButton>

                    <Content>
                      <Picture>
                        <img
                          src={selectedImage}
                          height="240px"
                          width="160px"
                          alt="vino"
                        />
                      </Picture>

                      <Line />

                      <Description>
                        <TitleContainer>
                          <h2>{selectedWine.shortname}</h2>
                          <div />
                          <h4>{selectedWine.type}</h4>
                        </TitleContainer>
                        <Text>{selectedWine.singlewinedescription}</Text>

                        <h6>$ 4.500</h6>
                      </Description>
                    </Content>
                  </>
                </ModalContainerBig>
              </>
            ) : (
              <>
                <ModalContainerSmall>
                  <>
                    <CloseButton onClick={onClose}>
                      <img src={close} />
                    </CloseButton>

                    <Top>
                      <Picture>
                        <img
                          src={selectedImage}
                          height="240px"
                          width="160px"
                          alt="vino"
                        />
                      </Picture>

                      <TitleContainer>
                        <h2>{selectedWine.shortname}</h2>
                        <div />
                        <h4>{selectedWine.type}</h4>
                      </TitleContainer>
                    </Top>

                    <Text>{selectedWine.singlewinedescription}</Text>
                    <Description>
                      <h6>$ 4.500</h6>
                    </Description>
                  </>
                </ModalContainerSmall>
              </>
            )}
          </motion.div>
        </div>
      </Overlay>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0 !important;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.8); */
  background-image: url(${backgroundImage});
  z-index: 100;
`;
const ModalContainerBig = styled.div`
  max-width: 700px;
  width: 100%;
  position: fixed;
  top: 40% !important;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(128, 128, 128, 0.2);

  border-radius: 8px;
  margin-top: 70px;
  height: 670px;

  z-index: 1000;

  border: 1.5px solid #6a6f58;
  /* max-width: 50%;
    height: 90%; */

  @media only screen and (max-width: 820px) {
    max-width: 80%;
    height: 80%;
  }

  @media only screen and (max-width: 500px) {
    max-width: 80%;
    height: 80%;
  }
`;

const ModalContainerSmall = styled.div`
  max-width: 700px;
  width: 100%;
  position: fixed;
  top: 40% !important;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(128, 128, 128, 0.2);
  border-radius: 8px;
  margin-top: 70px;
  height: 670px;
  z-index: 1000;
  border: 1.5px solid #6a6f58;
  max-width: 80%;
  height: 80%;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  height: 250px;
  margin-top: 70px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #6a6f58;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;

  @media only screen and (max-width: 500px) {
    justify-content: space-between;

  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;


  /* @media only screen and (max-width: 820px) {
    justify-content: center;
  align-items: center;
  } */
  @media only screen and (max-width: 820px) {
    margin-right: 80px;
  }

  h2 {
    color: #6a6f58;
    font-size: 25px;
    font-family: "Lora";
    font-style: normal;
    font-weight: 400;
    margin-bottom: 30px;
    margin-top: 20px;

    @media only screen and (max-width: 820px) {
      font-size: 28px;

    }

    @media only screen and (max-width: 500px) {
      font-size: 12px;
    }
  }

  h4 {
    color: #6a6f58;
    font-size: 30px;
    font-family: "Bebas Neue", cursive;
    font-style: normal;
    font-weight: 300;
    margin-top: -10px;

    @media only screen and (max-width: 820px) {
      font-size: 25px;
    }

    @media only screen and (max-width: 500px) {
      font-size: 16px;
    }
  }

  div {
    border-top: 0.5px solid #6a6f58;
    width: 280px;
    position: absolute;
    margin-top: 60px;

    @media only screen and (max-width: 820px) {
      border-top: 0.5px solid #6a6f58;
      margin-top: 62px;
      width: 100px;
    }
  }
`;

const CloseButton = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  cursor: pointer;

  img {
    height: 50px;
    width: 50px;

    @media only screen and (max-width: 820px) {
      height: 30px;
      width: 30px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: flex-start;
  margin-top: 3rem;
  padding: 1rem 2rem;

  img {
    position: absolute;
    top: 0px;
    left: -50px;
    width: 340px;
    height: 500px;

    @media only screen and (max-width: 820px) {
      /* top: 0px;
      left: -70px; */

      width: 260px;
      height: 400px;
      background-color: blue;
    }

    @media only screen and (max-width: 500px) {
      width: 200px;
      height: 300px;
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: flex-start;
  max-width: 350px;

  @media only screen and (max-width: 820px) {
    max-width: 250px;
    margin: 0 auto;
    margin-top: 20px;
  }

  @media only screen and (max-width: 500px) {
    max-width: 280px;
    padding-left: 50px;
  }

  /* p {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1.2px;
    line-height: 35px;
    color: #6a6f58;
    margin-top: 20px;
    text-align: left;
    font-weight: 400;
    @media only screen and (max-width: 820px) {
      letter-spacing: 1px;
      line-height: 20px;
      margin-top: 15px;
    }

    @media only screen and (max-width: 500px) {
      letter-spacing: 0.5px;
      line-height: 15px;
      margin-top: 15px;
      font-size: 10px;
      max-width: 300px;
    }
  } */

  h6 {
    color: #6a6f58 !important;
    font-size: 25px;
    font-family: "Bebas Neue", cursive;
    font-style: normal;
    font-weight: 300;
    text-align: start;
    border-bottom: 0.5px solid #6a6f58;
    max-width: 70px;

    @media only screen and (max-width: 820px) {
      margin-top: 15px;
      font-size: 20px;
      max-width: 50px;
    }

    @media only screen and (max-width: 820px) {
      margin-top: 15px;
      font-size: 17px;
      max-width: 50px;
    }
  }
`;

const Line = styled.div`
  border-left: 0.5px solid #6a6f58;

  height: 670px;
  position: absolute;
  left: 38%;
  margin-top: -64px;

  @media only screen and (max-width: 820px) {
    display: none;
  }
`;

const Picture = styled.div`
  height: 500px;
  width: 300px;
  position: relative;

  @media only screen and (max-width: 820px) {
    /* height: 500px !important;
    width: 300px;
    position: relative; */
    display: flex;
    margin-top: 20px;

    height: 280px;
    width: 150px;
  }

  @media only screen and (max-width: 500px) {
    height: 300px;
    width: 100px;
    position: relative;
  }
`;

const Text = styled.p`
  font-size: 14px !important;
  font-family: "Montserrat", sans-serif !important;
  letter-spacing: 1.2px !important;
  line-height: 35px !important;
  color: #6a6f58 !important;
  margin-top: 20px !important;
  text-align: left !important;
  font-weight: 400 !important;
  @media only screen and (max-width: 820px) {
    letter-spacing: 1px !important;
    line-height: 20px !important;
    max-width: 80%;
    margin-top: 50px !important;
    margin: 0 auto;
  }

  @media only screen and (max-width: 500px) {
    letter-spacing: 0.5px !important;
    line-height: 15px !important;
    margin-top: 15px !important;
    font-size: 10px !important;
    max-width: 80%;

    margin: 0 auto;
  }
`;

export default Modal;
