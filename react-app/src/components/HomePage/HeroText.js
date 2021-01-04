import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>Music Simplified.</h5>
      <h1>Rediscover</h1>
      <h1>Your</h1>
      <h1>Favorite</h1>
      <h1>Tracks.</h1>
      <BtnContainer>
        <button className="github">Github</button>
        <button>Sign Up Today</button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #0BDDFA;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }

  .github {
    color: #0BDDFA;
    background: transparent;
    border: 3px solid #0BDDFA;
    &:hover {
      box-shadow: 0px 17px 16px -11px #0BDDFA;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #3bc9f5;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 700;

    &:nth-of-type(1) {
      color: #0BDDFA;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #0BDDFA;
    }
    &:nth-of-type(3) {
      color: #0BDDFA;
    }
    &:nth-of-type(4) {
      color:#0BDDFA;
    }
  }
`;

export default HeroText;