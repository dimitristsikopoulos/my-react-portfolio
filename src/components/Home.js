import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <HomeLeft>
        <h3>I am left</h3>
      </HomeLeft>
      <HomeRight>
        <h3>I am Right</h3>
      </HomeRight>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const HomeLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
