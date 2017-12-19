import React, { Component } from "react";
import Poster from "./../components/Poster";
import MovieDetail from "./../components/MovieDetail";
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Container, Grid, Segment } from "semantic-ui-react";

class MovieInfoContainer extends Component {

  renderMovieInfo = () => {
    if (this.props.data.isFound === true) {
      const data = this.props.data.data;
      return (
        <Container>
          <Grid columns={2} relaxed centered>
            <Grid.Column>
              <Segment basic>
                <Poster/>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic>
                <MovieDetail
                  title={data.Title}
                  released={data.Released}
                  rated={data.Rated}
                  director={data.Director}
                  plot={data.Plot}
                  runtime={data.Runtime}
                  genre={data.Genre}
                  awards={data.Awards}
                  metascore={data.Metascore}
                />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      );
    } else if (this.props.data.isFound === false) {
      return (
        <Container textAlign="center">
          <h1>Movie Not Found!</h1>
        </Container>
      )
    } else {
      return (
        <Container textAlign="center">
          <h1>Search For A Movie</h1>
        </Container>
      )
    }
  }

  render() {
    return (
      <Container>
        {this.renderMovieInfo()}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, actions)(MovieInfoContainer);