import React from 'react';
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  margin-left: 310px;
  width: 100%;
  margin-top: 85px;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 600px) {
    margin-left: 0px;
    padding: 0px;
    align-items: center;
    margin-top: 5px;
    width: 98%;
    
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <img src="https://www.crtrj.gov.br/wp-content/uploads/2021/03/redes-de-comunicacao-4.jpg" alt="Logo Rede" />
      <p>
        Prova de redes
      </p>
    </FooterWrapper>
  );
}
