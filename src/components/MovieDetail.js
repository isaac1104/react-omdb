import React from "react";
import { Container, Grid, Statistic } from "semantic-ui-react";

const MovieDetail = (props) => {

  const style = {
    label: {
      color: "#00aca4"
    },
    value: {
      color: "white"
    }
  }

  return (
    <Container textAlign="center">
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column>
            <Statistic.Group>
              <Statistic size="large">
                <Statistic.Value text style={style.value}>{props.title}</Statistic.Value>
              </Statistic>
            </Statistic.Group>
            <Statistic.Group>
              <Statistic>
                <Statistic.Label style={style.label}>Released:</Statistic.Label>
                <Statistic.Value text style={style.value}>{props.released}</Statistic.Value>
                <Statistic.Label style={style.label}>Director:</Statistic.Label>
                <Statistic.Value text style={style.value}>{props.director}</Statistic.Value>
                <Statistic.Label style={style.label}>Runtime:</Statistic.Label>
                <Statistic.Value text style={style.value}>{props.runtime}</Statistic.Value>
              </Statistic>
              <Statistic>
                <Statistic.Label style={style.label}>Metascore:</Statistic.Label>
                <Statistic.Value text style={style.value}>{props.metascore}</Statistic.Value>
                <Statistic.Label style={style.label}>IMDB Votes:</Statistic.Label>
                <Statistic.Value text style={style.value}>{props.votes}</Statistic.Value>
                <Statistic.Label style={style.label}>Rated:</Statistic.Label>
                <Statistic.Value text style={style.value}>{props.rated}</Statistic.Value>
              </Statistic>
            </Statistic.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Statistic size="medium">
              <Statistic.Label style={style.label}>Plot:</Statistic.Label>
              <Statistic.Value text style={style.value}>{props.plot}</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Statistic size="small">
              <Statistic.Label style={style.label}>Awards:</Statistic.Label>
              <Statistic.Value text style={style.value}>{props.awards}</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default MovieDetail;
