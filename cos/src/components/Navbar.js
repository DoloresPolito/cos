import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Tabs from "./Tabs";
import Hamburger from "hamburger-react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ props }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const location = useLocation();

  const [isOpen, setopen] = useState(false);

  return (
    <NavbarSection location={location.pathname}className={!isOpen && "isClosed"}>
   

      <Link to="/cavaoseca" spy={true} smooth={false} offset={-50} duration={800}>
      <Logo location={location.pathname}>
          {" "}
          <h2>CAVA O SECA</h2>
        </Logo>
        </Link>
 
        <Hamburger toggled={isOpen} toggle={setopen} direction="right" />
        <Menu open={isOpen} location={location.pathname} setopen={setopen}/>
      


    </NavbarSection>
  );
};

const Logo = styled.div`
  /* position: absolute !important;
  height: 85px;
  top: 2px;
  left: 70px !important;

  h2 {
    font-family: "Bebas Neue", cursive;
    color: #6a6f58;
    font-size: 38px;
    letter-spacing: 1px;
    color: ${(props) => (props.location === "/products" ? "#6a6f58" : "white")};

    @media only screen and (max-width: 635px) {
    top: 2px;
    margin-left: -30px !important;


  }
  }

  @media only screen and (max-width: 635px) {
    top: 2px;
    margin-left: 0px !important;


  } */

  position: absolute !important;
  height: 85px;
  top: 2px;
  left: 20px;
  display: flex;
  align-items: center;

  h2 {
    font-family: "Bebas Neue", cursive;
    color: #6a6f58;
    font-size: 38px;
    letter-spacing: 1px;
    color:white;
  }

  @media only screen and (max-width: 635px) {
    top: 5px;
    /* margin-left: -30px !important; */
  }
`;

const NavbarSection = styled.section`
  /* z-index: 100;
  background: transparent;
  width: 90%;
  border-bottom: ${(props) =>
    props.location === "/products"
      ? "1px solid #6a6f58"
      : "0.5px solid white"};
  height: 85px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-items: end;
  position: relative;


  .hamburger-react {

    position: absolute;
    top:0;
    right: 0;
    z-index: 3;
    color: ${(props) => (props.location === "/products" ? "#6a6f58" : "white")};


  } */

  z-index: 100;
  background: transparent;
  width: 90%;
  border-bottom: 0.5px solid white;
  height: 85px;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between; /* Cambiado de justify-items a justifyContent */
  position: relative;
  margin: 0 auto;


  .hamburger-react {
    z-index: 3;
    color: white;
  } 
`;



export default Navbar;
