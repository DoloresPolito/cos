import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import emailjs from "emailjs-com";
import fondocontacto from "../assets/fondos/contacto70.png";
import { Parallax } from "react-scroll-parallax";

const Contact = () => {
  //   const frmContact = { userName: ``, userEmail: ``, message: `` };
  //   const [contact, setContact] = useState("");
  //   const [showMessage, setShowMessage] = useState(false);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setContact({ ...contact, [name]: value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     emailjs
  //       .send(`service_lsilwkf`, `template_zefnjzw`, contact, `F-wmz4d9VI_6zEds5`)
  //       .then(
  //         (response) => {
  //           console.log(`SUCCESS!`, response.status, response.text);
  //           setContact(frmContact);
  //           setShowMessage(true);
  //         },
  //         (err) => {
  //           console.log(`FAILED...`, err);
  //         }
  //       );
  //   };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 1000;

  return (
    <ContactSection>
      <ContactContent>
        {width >= medium ? (
          <>
            <Column1>
              <Parallax speed={8}>
                <h4>
                  HOLA! SOMOS MARCOS Y DOLORES. NOS ENCANTARÍA ASESORARTE Y QUE
                  PUEDAS DISFRUTAR DE NUESTRA VARIEDAD.
                </h4>
                <h3>CONTACTANOS!</h3>
              </Parallax>
            </Column1>

            <Column2>
              <FormContainer>
                <Form
                  // onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Input
                    className="form-item"
                    placeholder="Nombre completo"
                    type="text"
                    required
                    // value={contact.userName}
                    name="userName"
                    // onChange={handleChange}
                  />

                  <Input
                    className="form-item"
                    placeholder="Email"
                    // value={contact.userEmail}
                    // onChange={handleChange}
                    name="userEmail"
                    type="text"
                    required
                  />

                  <Input
                    className="form-item"
                    placeholder="Mensaje"
                    // value={contact.message}
                    // onChange={handleChange}
                    name="message"
                    type="text"
                    required
                  />

                  <button type="submit" >
                    Enviar
                  </button>
                </Form>
              </FormContainer>
            </Column2>
          </>
        ) : (
          <>
    
              <SingleColumn>
                <h4>
                  <span>CONTACTANOS!</span>
                </h4>

                <FormContainer>
                  <Form
                    // onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Input
                      className="form-item"
                      placeholder="Nombre completo"
                      type="text"
                      required
                      // value={contact.userName}
                      name="userName"
                      // onChange={handleChange}
                    />

                    <Input
                      className="form-item"
                      placeholder="Email"
                      // value={contact.userEmail}
                      // onChange={handleChange}
                      name="userEmail"
                      type="text"
                      required
                    />

                    <Input
                      className="form-item"
                      placeholder="Mensaje"
                      // value={contact.message}
                      // onChange={handleChange}
                      name="message"
                      type="text"
                      required
                    />

                    <button type="submit" >
                      Enviar
                    </button>
                  </Form>
                </FormContainer>
              </SingleColumn>
    
          </>
        )}

      </ContactContent>
      <CopyRight>
        <p>Todos los derechos reservados. CAVAOSECA © </p>
      </CopyRight>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  height: 500px;
  width: 100%;
  background-image: url(${fondocontacto});
  background-size: cover;

  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
`;

const ContactContent = styled.div`
  height: 450px;
  display: flex;

`;
const FormContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  /* @media only screen and (max-width: 1230px) {
    width: 80%;
    margin: 0 0;
    justify-content: center;
    align-items: center;
  } */

  /* @media only screen and (max-width: 900px) {
    width: 60%;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 60px;
  } */
`;

const Form = styled.form`
display: flex;
flex-direction: column;
  list-style: none;
  text-decoration: none !important;
  font-size: 20px !important;
  text-align: center;
  align-items: center;
  font-weight: 300;
  letter-spacing: 2px;
  justify-content: center;



  button {
    padding: 10px;
    background-color: transparent;
    border: none;
    color: #f6f6f6;
    border: 1px solid #f6f6f6;
    cursor: pointer;
    font-size: 16px;

    margin-top: 10px; 
    border-radius: 10px;
  }
`;

const Input = styled.input`
  padding: 20px;
  width: 100%;
  height: 8px;
  margin: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 0.8px solid #f6f6f6;
`;


const Column2 = styled.div`
  width: 700px;

  padding-top: 100px;

`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  margin-left: 150px;

  height: 430px;
  padding-top: 20px;


  h4 {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: "Bebas Neue", cursive;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 40px;
    margin-top: 50px;
    text-align: left;

    @media only screen and (max-width: 1000px) {
      font-size: 35px;
      width: 700px;
    }

    @media only screen and (max-width: 700px) {
      font-size: 35px;
      width: 400px;
    }

    @media only screen and (max-width: 535px) {
      font-size: 30px;
      width: auto;
    }
  }

  h3 {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: "Bebas Neue", cursive;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 35px;
    margin-top: 10px;
    text-align: left;
    background-color: #536052;
    width: 190px;
    border-radius: 5px;
    padding: 3px;
    padding-left: 6px;

    @media only screen and (max-width: 1000px) {
      font-size: 35px;
      width: 700px;
    }

    @media only screen and (max-width: 700px) {
      font-size: 30px;
      width: 400px;
    }

    @media only screen and (max-width: 535px) {
      font-size: 30px;
      width: auto;
    }
  }
`;

const SingleColumn = styled.div`
  display: flex;
  flex-direction: column;
align-items: center;
  width: 80%;
  margin: 0 auto;

  h4 {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: "Bebas Neue", cursive;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 40px;
    margin-top: 50px;
    text-align: left;
    width: auto;
    max-width: 800px;
    flex-direction: column;

    @media only screen and (max-width: 1000px) {
      font-size: 35px;

    }

    @media only screen and (max-width: 700px) {
      font-size: 35px;

    }

    @media only screen and (max-width: 535px) {
      font-size: 30px;
    }
  }

  h3 {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: "Bebas Neue", cursive;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 35px;
    margin-top: 10px;
    text-align: left !important;
    /* background-color: green; */

    @media only screen and (max-width: 1000px) {
      font-size: 35px;
      width: 700px;
    }

    @media only screen and (max-width: 700px) {
      font-size: 30px;
      width: 400px;
    }

    @media only screen and (max-width: 535px) {
      font-size: 30px;
      width: auto;
    }
  }

  span {
    background-color: #536052;
    width: 190px;
    border-radius: 5px;
    padding: 3px;
    padding-left: 12px;
  }
`;

const CopyRight = styled.div`
display: flex;
justify-content: center;


p{

  color: #ffffff;
    font-size: 12px;
    margin: auto;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    padding-top: 20px;

}
`;

export default Contact;
