import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 3
  };
  handleDelete = title => {
    this.setState({
      movies: this.state.movies.filter(m => m.title !== title)
    });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
    //    console.log(this.cure);
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
    const movies = [...this.state.movies];
    const { currentPage, pageSize } = { ...this.state };

    if (this.state.movies.length > 0)
      return (
        <div className="table table-striped">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Favorite</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(m => (
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
            </tbody>
          </table>
          <Pagination
            onPageChange={this.handlePageChange}
            totalItems={movies.length}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        </div>
      );
    else return <div className="alert alert-warning">No Movies Found!!</div>;
  }
}

export default Movies;
