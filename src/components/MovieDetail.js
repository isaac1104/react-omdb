import React from "react";
import { Container, Grid, Statistic } from "semantic-ui-react";

const MovieDetail = (props) => {
  return (
    <Container textAlign="center">
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column>
            <Statistic.Group>
              <Statistic size="large">
                <Statistic.Value text>{props.title}</Statistic.Value>
              </Statistic>
            </Statistic.Group>
            <Statistic.Group>
              <Statistic>
                <Statistic.Label>Released:</Statistic.Label>
                <Statistic.Value text>{props.released}</Statistic.Value>
                <Statistic.Label>Director:</Statistic.Label>
                <Statistic.Value text>{props.director}</Statistic.Value>
                <Statistic.Label>Runtime:</Statistic.Label>
                <Statistic.Value text>{props.runtime}</Statistic.Value>
              </Statistic>
              <Statistic>
                <Statistic.Label>Metascore:</Statistic.Label>
                <Statistic.Value text>{props.metascore}</Statistic.Value>
                <Statistic.Label>Rated:</Statistic.Label>
                <Statistic.Value text>{props.rated}</Statistic.Value>
              </Statistic>
            </Statistic.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Statistic size="medium">
              <Statistic.Label>Plot:</Statistic.Label>
              <Statistic.Value text>{props.plot}</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Statistic size="small">
              <Statistic.Label>Awards:</Statistic.Label>
              <Statistic.Value text>{props.awards}</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default MovieDetail;
