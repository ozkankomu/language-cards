import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import reactLogo from "../assets/react.svg";

import React from "react";

const Header = () => {
  return (
    <Container>
      <Image fluid src={reactLogo} width="250px"></Image>
    </Container>
  );
};

export default Header;
