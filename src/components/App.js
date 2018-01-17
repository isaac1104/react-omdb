import React from "react";
import Header from "./Header";
import Search from "./../containers/Search";
import MovieInfoContainer from "./../containers/MovieInfoContainer";

const App = () => {

  const style = {
    backgroundColor: "black"
  }

  return (
    <div style={style}>
      <Header/>
      <Search/>
      <MovieInfoContainer/>
    </div>
  );
}

export default App;
