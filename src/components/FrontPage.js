import React from "react";

//Components
import Nav from "./Nav";
import Home from "./Home";
import MyWork from "./MyWork";
import Contact from "./Contact";
//Styles
import GlobalStyle from "./GlobalStyles";

const FrontPage = () => {
  return (
    <div className="FrontPage-container">
      <GlobalStyle />
      <Nav />
      <Home />
      <MyWork />
      <Contact />
    </div>
  );
};

export default FrontPage;
