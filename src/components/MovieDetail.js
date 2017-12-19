import React from "react";
import { Container, Grid } from "semantic-ui-react";

const MovieDetail = (props) => {
  return (
    <Container>
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column>
            <h1>{props.title}</h1>
            <h2>Released: {props.released}</h2>
            <h3>Director: {props.director}</h3>
            <h4>Runtime: {props.runtime}</h4>
            <h5>Rated: {props.rated}</h5>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h3>Plot: {props.plot}</h3>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h5>Awards: {props.awards}</h5>
            <h5>Metascore: {props.metascore}</h5>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default MovieDetail;
