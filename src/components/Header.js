import React from "react";
import { Container, Advertisement } from "semantic-ui-react";

const Header = () => {

  const style = {
    marginBottom: "2rem",
    width: "100%"
  }

  return (
    <Container
      textAlign="center"
      style={style}
    >
      <Advertisement
        unit="panorama"
        test="OMDB DataBase"
        centered
        style={{width: "100%"}}
      />
    </Container>
  )
}

export default Header;
