import React from "react";
import styled from "styled-components";

import { Link as SmoothLink } from "react-scroll";

const Tabs = ({ mode, open, setopen, location }) => {
  const handleClose = () => {
    setopen(false);
  };

  {
    return (
      <TabsBox mode={mode} location={location}>
        <SmoothLink
          to="off"
          spy={true}
          smooth={true}
          offset={30}
          duration={800}
          className="navlist"
          onClick={() => handleClose()}
        >
          <button>
            <p>% OFF</p>
          </button>
        </SmoothLink>

        <SmoothLink
          to="mix"
          spy={true}
          smooth={true}
          offset={30}
          duration={800}
          className="navlist"
          onClick={() => handleClose()}
        >
          <button>
            <p>MIX</p>
          </button>
        </SmoothLink>

        <SmoothLink
          to="products"
          spy={true}
          smooth={true}
          offset={30}
          duration={800}
          className="navlist"
          onClick={() => handleClose()}
        >
          <button>
            <p>PRODUCTS</p>
          </button>
        </SmoothLink>
      </TabsBox>
    );
  }
};

// NAVBAR ABIERTA (NO HAMBURGER)

const TabsBox = styled.div`
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  z-index: 0;


  a {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    color: ${(props) => (props.location === "/products" ? "#6a6f58" : "white")};
    cursor: pointer;
    padding: ${(props) => (props.mode === "large" ? "0 50px" : "25px 0")};
    background: transparent;
    border: 0px solid;
    display: block;
    height: 10px;
    display: flex;
    align-items: center;

    :hover{
      background-color: #6a6f58;
      color:white;
    }
    /* &:hover,
    &:active,
    &:focus {
      font-weight: 700;
    } */
  }
  img {
    height: 30px;
  }

  button {
    border: 1px solid white;
    border-radius: 30px;
    /* padding:0px 30px; */
    height: 40px;
    width: 140px;
    margin-bottom: 0px;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      height: 30px;
    width: 110px;
    }
 


    p {
      font-family: "Bebas Neue", cursive;
      letter-spacing: 3px;
      font-size: 18px;
      margin-top: 8px;
      @media only screen and (max-width: 800px) {
        font-size: 15px;
        margin-top: 5px;
    }
    }
  }
`;

export default Tabs;
