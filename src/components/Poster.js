import React from "react";
import { Image } from "semantic-ui-react";

const Poster = (props) => {
  return (
    <Image src={props.poster} style={{width: "470px"}}/>
  );
}

export default Poster;
