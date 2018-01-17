import React, { Component } from "react";
import Poster from "./../components/Poster";
import MovieDetail from "./../components/MovieDetail";
import * as actions from './../actions';
import { connect } from 'react-redux';
import { Grid, Segment, Loader } from "semantic-ui-react";

class MovieInfoContainer extends Component {

  renderMovieInfo = () => {
    if (this.props.data.isFound === true) {
      const data = this.props.data.data;
      return (
        <div>
          <Grid columns={3} centered>
            <Grid.Column>
              {/* <Segment basic> */}
              <Poster poster={data.Poster}/>
              {/* </Segment> */}
            </Grid.Column>
            <Grid.Column>
              {/* <Segment basic> */}
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
                votes={data.imdbVotes}
              />
              {/* </Segment> */}
            </Grid.Column>
          </Grid>
        </div>
      );
    } else if (this.props.data.isFound === false) {
      return (
        <div style={{textAlign: "center"}}>
          <h1 style={{color: "white"}}>Movie Not Found!</h1>
        </div>
      )
    } else {
      return (
        <div style={{textAlign: "center"}}>
          <h1 style={{color: "white"}}>Search For A Movie</h1>
        </div>
      )
    }
  }

  renderLoading = () => {
    if (this.props.data.isLoading === true) {
      return (
          <Loader active size='huge'></Loader>
      )
    }
  }

  render() {
    return (
      <div style={{minHeight: "83vh", textAlign: "center"}}>
        {this.renderLoading()}
        {this.renderMovieInfo()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, actions)(MovieInfoContainer);
