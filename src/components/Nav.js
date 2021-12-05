import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <Logo>
        <a href="">Dimitris Tsikopoulos</a>
      </Logo>
      <NavList>
        <ul>
          <li>Home</li>
          <li>My Work</li>
          <li>Contact me</li>
        </ul>
      </NavList>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    height: 100%;
    margin-left: 2rem;
    padding-top: 0.5rem;
    font-size: 1.5rem;
    font-family: "Yellowtail", cursive;
  }
`;

const NavList = styled.div`
  width: 50%;
  height: 100%;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
  }
`;

export default Nav;
