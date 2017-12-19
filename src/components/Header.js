import React from "react";
import { Container, Header as NavHeader, Icon } from "semantic-ui-react";

const Header = () => {

  const style = {
    marginBottom: "2rem",
    width: "100%",
    backgroundColor: "#343a40",
  }

  return (
    <Container
      textAlign="center"
      style={style}
    >
      <NavHeader
        as="h1"
        icon
        style={{color: "white"}}
      >
        <Icon name="film"/>
        <a href="/" style={{color: "white"}}>OMDB DataBase</a>
      </NavHeader>
    </Container>
  )
}

export default Header;
