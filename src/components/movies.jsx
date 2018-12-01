import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = title => {
    this.setState({
      movies: this.state.movies.filter(m => m.title !== title)
    });
  };
  handleLiked = item => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(item);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies
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
              <th>Favorite</th>
              <th>Action</th>
            </tr>
            {this.state.movies.map(m => (
              <Movie
                key={m._id}
                title={m.title}
                genre={m.genre.name}
                stock={m.numberInStock}
                rate={m.dailyRentalRate}
                liked={m.liked}
                onDelete={this.handleDelete}
                onLiked={() => this.handleLiked(m)}
              />
            ))}
          </table>
        </div>
      );
    else return <div className="alert alert-warning">No Movies Found!!</div>;
  }
}

export default Movies;
