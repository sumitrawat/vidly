import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";
class Movies extends Component {
  state = { movies: getMovies() };
  handleDelete = id => {
    this.setState({
      movies: this.state.movies.filter(m => m._id != id)
    });
  };
  render() {
    if (this.state.movies.length > 0)
      return (
        <div className="table table-striped">
          <table>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Action</th>
            </tr>
            {this.state.movies.map(m => (
              <Movie
                key={m._id}
                title={m.title}
                genre={m.genre.name}
                stock={m.numberInStock}
                rate={m.dailyRentalRate}
                onDelete={() => this.handleDelete(m._id)}
              />
            ))}
          </table>
        </div>
      );
    else return <div className="alert alert-warning">No Movies Found!!</div>;
  }
}

export default Movies;
