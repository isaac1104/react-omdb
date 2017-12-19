import React from "react";
import Header from "./Header";
import Search from "./../containers/Search";
import MovieInfoContainer from "./../containers/MovieInfoContainer";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container fluid>
      <Header/>
      <Search/>
      <MovieInfoContainer/>
    </Container>
  );
}

export default App;
