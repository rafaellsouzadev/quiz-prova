// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;    
  background-image: url("https://imagens.tiespecialistas.com.br/2014/01/shutterstock_73782502.jpg");
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image: url("https://imagens.tiespecialistas.com.br/2014/01/shutterstock_73782502.jpg");
      display: block;
      width: 106%;
      height: 106%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
