import React, { useEffect, useState, useRef } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import styled from "styled-components";
import vinos from "../vinos";
import { useInput } from "../hooks/useInput";
import Modal from "../components/Modal";
import backgroundImage from "../assets/fondos/fondo_producto.png";
// import Checkbox from "../components/Checkbox";
// import { useChecked } from "../hooks/useChecked";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import cocodrilo from "../assets/grilla/Cocodrilo.png";
import bramarevalledeuco from "../assets/grilla/Bramare Valle De Uco.png";
import bramarelujandecuyo from "../assets/grilla/Bramare Valle De Uco.png";
import bramarepinotnoir from "../assets/grilla/Bramare Pinot Noir.png";
import felino from "../assets/grilla/Felino.png";
import judasmalbec from "../assets/grilla/Judas Malbec.png";
import judasblend from "../assets/grilla/Judas Blend.png";
import susanabalbosignature from "../assets/grilla/Susana Balbo Signature.png";
import briosso from "../assets/grilla/Brioso.png";
import closdelossiete from "../assets/grilla/Clos de Los Siete.png";
import rutinisauvignonblanc from "../assets/grilla/Rutini Colección Sauvignon Blanc.png";
import rutinimalbec from "../assets/grilla/Rutini Coleccion Malbec.png";
import rutinichardonnay from "../assets/grilla/Rutini Coleccion Chardonnay.png";
import rutinicabernetmalbec from "../assets/grilla/Rutini Coleccion Cabernet Malbec.png";
import black from "../assets/grilla/Black.png";
import zahamalbec from "../assets/grilla/Zaha Malbec.png";
import zahacabernetfranc from "../assets/grilla/Zaha Cabernet Franc.png";
import artesano from "../assets/grilla/Artesano.png";
import findelmundosinglevineyardpinotnoir from "../assets/grilla/Fin del Mundo Single Vineyard Pinot Noir.png";
import findelmundosinglevineyardmalbec from "../assets/grilla/Fin del Mundo Single Vineyard Malbec.png";
import nicolacatenabonarda from "../assets/grilla/Nicola Catena Bonarda (vino de parcela).png";
import malbecargentino from "../assets/grilla/Malbec Argentino.png";
import dvcatenasyrah from "../assets/grilla/Dv Catena Syrah.png";
import dvcatenamalbecmalbec from "../assets/grilla/Dv Catena Malbec Malbec.png";
import dvcatenalapiramide from "../assets/grilla/Dv Catena La Pirámide.png";
import dvcatenachardonnay from "../assets/grilla/Dv Catena Chardonnay.png";
import dvcatenacabernetmalbec from "../assets/grilla/Dv Catena Cabernet Malbec.png";
import dvcatenacabernet from "../assets/grilla/Dv Catena Cabernet.png";
import angelicazapatamerlot from "../assets/grilla/Angelica Zapata Merlot.png";
import angelicazapatachardonnay from "../assets/grilla/Angelica Zapata Chardonnay.png";
import angelicazapatacabernetsauvignon from "../assets/grilla/Angelica Zapata Cabernet Sauvignon.png";
import angelicazapatacabernetfranc from "../assets/grilla/Angelica Zapata Cabernet Franc.png";
import saintfelicienmalbec from "../assets/grilla/Saint Felicien Malbec.png";
import bressiaprofundo from "../assets/grilla/Bressia Profundo.png";
import bressiapielnegra from "../assets/grilla/Bressia Piel Negra.png";
import bressiamonteagrelomalbec from "../assets/grilla/Bressia Monteagrelo Malbec.png";
import bressiamonteagrelocabernetfranc from "../assets/grilla/Bressia Monteagrelo Cabernet Franc.png";
import bressialagrimacanela from "../assets/grilla/Bressia Lagrima Canela.png";
import bressiaconjuro from "../assets/grilla/Bressia Conjuro.png";
import lucapinotnoir from "../assets/grilla/Luca Pinot Noir.png";
import lucachardonnay from "../assets/grilla/Luca Chardonnay.png";
import lucabesodedante from "../assets/grilla/Luca Beso de Dante.png";
import carolauracatena from "../assets/grilla/Caro - Laura Catena.png";
import granenemigocorte from "../assets/grilla/Gran Enemigo Corte.png";
import granenemigogualtallary from "../assets/grilla/Gran Enemigo Gualtallary.png";
import granenemigochacayes from "../assets/grilla/Gran Enemigo Chacayes.png";
import granenemigoagrelo from "../assets/grilla/Gran Enemigo Agrelo.png";
import granenemigoelcepillo from "../assets/grilla/Gran Enemigo El Cepillo.png";
import elenemigomalbec from "../assets/grilla/El Enemigo Malbec.png";
import elenemigochardonnay from "../assets/grilla/El Enemigo Chardonnay.png";
import elenemigocabernetfranc from "../assets/grilla/El Enemigo Cabernet Franc.png";
import elenemigobonarda from "../assets/grilla/El Enemigo Bonarda.png";
import achavalferrercabernetfranc from "../assets/grilla/Achaval Ferrer Cabernet Franc.png";
import achavalferrermalbec from "../assets/grilla/Achaval Ferrer Malbec.png";
import achavalferrerquimera from "../assets/grilla/Achaval Ferrer Quimera.png";
import bottle1 from "../assets/icons/bottle1.png";


const Products = () => {
  const [selectedWine, setSelectedWine] = useState({});
  const [selectedImage, setSelectedImage] = useState({});
  const input = useInput("");
  const [wines, setWines] = useState(vinos);
  const [width, setWidth] = useState(window.innerWidth);
  const [estadoBoton, setEstadoBoton] = useState(false);

  const inputRef = useRef(null);
  const initialState = {
    tintos: false,
    blancos: false,
    espumantes: false,
  };

//   const [checked, handleClickCheckbox] = useChecked(initialState);

  useEffect(() => {
    input.value = "";
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [wines, estadoBoton]);

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
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: "easeIn",
        },
      });
    }

    if (!inView) {
      animation1.start({
        x: "-20%",
      });

      animation2.start({
        opacity: 1,
      });
    }
  }, [inView]);

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("input.value", input.value);

    const vinosFiltrados = buscarVinos(input.value);
    console.log(vinosFiltrados);

    console.log("vinos filtrados", vinosFiltrados);

    setWines(vinosFiltrados);
  };

  const borrarFiltros = (e) => {
    // setWines(vinos);
    // setEstadoBoton(!estadoBoton);
    // console.log("estado boton", estadoBoton);
    // e.target.value = "";
    // input.value = "";
    // inputRef.current.value = "";
  };

  function buscarVinos(search) {
    console.log("entra a la funcion filtrar");
    const resultado = vinos.filter((vino) =>
      vino.name.toLowerCase().includes(search.toLowerCase())
    );
    return resultado;
  }

  // function filtrarPorTipo(tipo) {
  //   console.log("entra a la funcion filtrar por tipo");
  //   const resultado = vinos.filter((vino) =>
  //     vino.tipo.toLowerCase().includes(tipo.toLowerCase())
  //   );
  //   return resultado;
  // }

  const [openModal, setOpenModal] = useState(false);

  const closing = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  const opening = (vino, imagenVariable) => {
    setOpenModal(true);
    setSelectedWine(vino);
    setSelectedImage(imagenVariable);
    document.body.style.overflow = "hidden";
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imagenes = {
    bramarevalledeuco,
    bramarelujandecuyo,
    bramarepinotnoir,
    felino,
    cocodrilo,
    judasmalbec,
    judasblend,
    susanabalbosignature,
    briosso,
    closdelossiete,
    rutinisauvignonblanc,
    rutinimalbec,
    rutinichardonnay,
    rutinicabernetmalbec,
    black,
    zahamalbec,
    zahacabernetfranc,
    artesano,
    findelmundosinglevineyardpinotnoir,
    findelmundosinglevineyardmalbec,
    nicolacatenabonarda,
    malbecargentino,
    dvcatenasyrah,
    dvcatenamalbecmalbec,
    dvcatenalapiramide,
    dvcatenachardonnay,
    dvcatenacabernetmalbec,
    dvcatenacabernet,
    angelicazapatamerlot,
    angelicazapatachardonnay,
    angelicazapatacabernetsauvignon,
    angelicazapatacabernetfranc,
    saintfelicienmalbec,
    bressiaprofundo,
    bressiapielnegra,
    bressiamonteagrelomalbec,
    bressiamonteagrelocabernetfranc,
    bressialagrimacanela,
    bressiaconjuro,
    lucapinotnoir,
    lucachardonnay,
    lucabesodedante,
    carolauracatena,
    granenemigocorte,
    granenemigogualtallary,
    granenemigochacayes,
    granenemigoagrelo,
    granenemigoelcepillo,
    elenemigomalbec,
    elenemigochardonnay,
    elenemigocabernetfranc,
    elenemigobonarda,
    achavalferrercabernetfranc,
    achavalferrermalbec,
    achavalferrerquimera,
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          minHeight: "100vh",
          backgroundSize: "1500px 1000px",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "center center",
          overflowX: "hidden",
        }}
        ref={ref}
      >
        <SectionProducts  id="products">
          <>
            <VerticalContainer>
              <Top>
                <motion.h2 animate={animation2}>
                  Los siguientes vinos se venden en cajas cerradas
                </motion.h2>
                <div>
                  <form onSubmit={handleSubmit}>
                    <input
                      onChange={input.onChange}
                      value={input.value}
                      type="search"
                      placeholder="Buscar por nombre"
                    />
                  </form>
                  <button className="buttonform" onClick={borrarFiltros}>
                    borrar filtros
                  </button>
                </div>{" "}
                {/* <CheckboxContainer>
                  <Checkbox
                    name="tintos"
                    checked={checked.tintos}
                    setChecked={handleClickCheckbox}
                  />
                  <Checkbox
                    name="blancos"
                    checked={checked.blancos}
                    setChecked={handleClickCheckbox}
                  />
                  <Checkbox
                    name="espumantes"
                    checked={checked.espumantes}
                    setChecked={handleClickCheckbox}
                  />
                </CheckboxContainer> */}
              </Top>
              <Catalog>
                <SimpleGrid
                  spacing={width > 1000 ? 24 : width > 555 ? 20 : 0}
                  columns={width > 1000 ? 4 : width > 555 ? 3 : 2}
                >
                  {wines.map((vino) => {
                    const imagenVariable = imagenes[vino.imagename];
                    return (
                      <>
                        <div key={vino.name}>
                          <Box
                            bg="transparent"
                            height="190px"
                            width="110px"
                            borderRadius={"3px"}
                          >
                            <BoxImage
                              className="image-container"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                            >
                              <img
                                src={imagenVariable}
                                height="240px"
                                width="160px"
                                alt="vino"
                                style={{
                                  marginTop: "0px",
                                  marginLeft: "0px",
                                }}
                         
                              />

                              {hovered && (
                                <div
                                  className="overlay"
                                  onClick={() => opening(vino, imagenVariable)}
                                >
                                  <p>{vino.name}</p>
                                  <p>ver más</p>
                                </div>
                              )}
                            </BoxImage>
                          </Box>

                          <Info>
                            <WineName>
                              <p className="winery"> {vino.winery}</p>
                              <p className="name"> {vino.shortname}</p>
                              <p className="type"> {vino.type}</p>

                              <Modal
                                open={openModal}
                                selectedWine={selectedWine}
                                selectedImage={selectedImage}
                                onClose={() => closing()}
                              />
                            </WineName>

                            <WinePrice>
                              <button>
                                <p>{vino.price}</p>
                              </button>
                              <h6>unidad</h6>
                    
                            </WinePrice>
                            <WinePrice>
                              <button>
                                <p>$52.000</p>
                              </button>
                              <h6>x 6</h6>
                              <img src={bottle1} />
                            </WinePrice>
                          </Info>
                        </div>
                      </>
                    );
                  })}
                </SimpleGrid>
              </Catalog>
            </VerticalContainer>
          </>
        </SectionProducts>
      </div>
    </>
  );
};


const SectionProducts = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 80px;
  @media only screen and (max-width: 435px) {
    width: 99%;
    }
`;

const WineName = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  align-items: flex-start;

  .winery {
    /* color: #6a6f58 !important; */
    font-size: 14px !important;
    font-family: "Poppins";
    /* font-weight: 500 !important; */
    text-align: left;

    line-height: 1 !important;
    margin: 5px;

    font-size: 12px;
    font-weight: 600;
    font-family: "Cinzel", sans-serif;
    text-transform: uppercase;
    color: #5b5a5a;

    @media only screen and (max-width: 435px) {
      font-size: 11px !important;
    }
  }

  .name {
    color: #6a6f58 !important;
    font-size: 14px !important;
    font-family: "Poppins";
    font-weight: 600 !important;
    text-align: left;

    line-height: 1 !important;
    margin: 5px;
    @media only screen and (max-width: 435px) {
      font-size: 12px !important;
    }
  }

  .type {
    color: #6a6f58 !important;
    font-size: 14px !important;
    font-family: "Poppins";
    font-weight: 500 !important;
    text-align: left;

    line-height: 1 !important;
    margin: 5px;
    text-transform: uppercase;
    @media only screen and (max-width: 435px) {
      font-size: 12px !important;
    }
  }
`;

const WinePrice = styled.div`
  display: flex;
  margin-bottom: 5px;

  img {
    height: 35px;
    margin-top: -10px;
  }

  h6 {
    color: #6a6f58 !important;
    font-size: 13px !important;
    font-family: "Poppins";
    font-weight: 500;
    text-align: left;
    margin: 0;
    margin-top: 5px;
    margin-left: 5px;
  }

  button {
    width: 80px !important;
    margin-top: 0px !important;
    margin-bottom: 5px;
  }

  p {
    color: #6a6f58 !important;
    font-size: 15px !important;
    font-family: "Poppins";
    font-weight: 600;
    text-align: left;
    margin: 0;
  }

  @media only screen and (max-width: 700px) {
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 435px) {
    p {
      font-size: 12px !important;
    }

    button {
      width: 70px !important;
    }
  }
`;

export const Line = styled.div`
  border: 0.5px solid #252525;
  max-width: 100px;
  margin-bottom: 10px;

  @media only screen and (max-width: 975px) {
    max-width: 250px;
    margin-left: 30px;
  }
  @media only screen and (max-width: 700px) {
    max-width: 285px;
    margin-left: 10px;
  }
`;

const Catalog = styled.div`
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 30px !important;

  display: flex;
  padding-left: 50px;

  @media only screen and (max-width: 1200px) {
    padding-left: 0px !important;
    padding-top: 0px;
    margin: 0 auto;

    left: 0px !important;
  }

  @media only screen and (max-width: 985px) {
    padding-left: 50px !important;
  }

  @media only screen and (max-width: 830px) {
    padding-left: 30px !important;
  }

  @media only screen and (max-width: 730px) {
    padding-left: 10px !important;
  }
  @media only screen and (max-width: 555px) {
    padding-left: 60px !important;
  }
  @media only screen and (max-width: 500px) {
    padding-left: 30px !important;
  }
  @media only screen and (max-width: 440px) {
    padding-left: 20px !important;
  }

  @media only screen and (max-width: 400px) {
    padding-left: 15px !important;
  }

  @media only screen and (max-width: 369px) {
    padding-left: 15px !important;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  p {
    line-height: 1;
    align-self: flex-start;
    color: #6f5358;
    font-size: 13px;
  }
  button {
    background-color: #eae9e5;
    color: #6a6f58;
    border: none;
    border-radius: 2px;
    letter-spacing: 1px;
    height: 25px;
    width: 70%;
    margin-top: 20px;
    font-size: 11px;
  }
`;



const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-top: 70px;
  display: none;

  @media only screen and (max-width: 555px) {
    display: none;
    margin-top: 10px;
    order: 1;
    height: 100px;
  }
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    color: black;
    margin-top: 40px;
    @media only screen and (max-width: 1200px) {
      margin-top: 30px;
    }

    @media only screen and (max-width: 555px) {
      margin-top: 20px;
    }
  }

  input {
    color: black;
    height: 50px;
    width: 280px;
    border: none;
    border-radius: 25px;
    padding: 20px;
    border: 1px solid #6a6f58;
    @media only screen and (max-width: 555px) {
      height: 40px;
      width: 250px;
    }
  }

  h2 {
    font-family: "Bebas Neue", cursive;
    color: #6a6f58;
    letter-spacing: 2px;
  }

  ul {
    list-style: none;
    text-align: left;
  }

  li {
    margin-bottom: 10px;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align: middle;
    background-color: red !important;
    @media only screen and (max-width: 555px) {
      width: 13px;
      height: 13px;
    }

    @media only screen and (max-width: 500px) {
      width: 12px;
      height: 12px;
    }
  }

  label {
    display: inline-block;
    vertical-align: middle;

    @media only screen and (max-width: 555px) {
      font-size: 15px;
    }
  }

  .buttonform {
    background-color: #6a6f58;
    border: none;
    color: #fefefe;
    padding: 10px;
    border-radius: 20px;
    width: 100px;
    margin-top: 10px;
    @media only screen and (max-width: 555px) {
      width: 90px;
      padding: 5px;
    }
  }
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;

`;

const BoxImage = styled.div`
  background-color: #eae9e5;
  height: 100px;
  width: 170px;
  margin-bottom: 80px;
  cursor: pointer;

  @media only screen and (max-width: 369px) {
    width: 155px;
  }
`;
export default Products;
