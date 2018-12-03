import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";
import Pagination from "./common/pagination";
import { getGenres } from "../services/fakeGenreService";
import { getPagedMovies } from "./utility/getPagedMovies";
class Movies extends Component {
  state = {
    allMovies: getMovies(),
    currentPage: 1,
    pageSize: 3,
    currentGenre: "All"
  };
  handleDelete = title => {
    this.setState({
      allMovies: this.state.allMovies.filter(m => m.title !== title)
    });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleLiked = item => {
    const allMovies = [...this.state.allMovies];
    const index = allMovies.indexOf(item);
    allMovies[index] = { ...allMovies[index] };
    allMovies[index].liked = !allMovies[index].liked;
    this.setState({
      allMovies
    });
  };
  handleFilterChange = name => {
    this.setState({
      currentGenre: name
    });
  };
  render() {
    const { currentPage, pageSize, currentGenre } = { ...this.state };
    const allMovies =
      currentGenre === "All"
        ? [...this.state.allMovies]
        : [...this.state.allMovies].filter(m => m.genre.name === currentGenre);
    const movie = getPagedMovies(allMovies, currentPage, pageSize);
    const genres = getGenres();
    const activeGenreStyle = "list-group-item active";
    const genreStyle = "list-group-item";
    if (allMovies.length > 0)
      return (
        <div style={{ marginTop: "20px" }} className="row">
          <div className="col-md-4">
            <ul className="list-group">
              <li
                key="All"
                onClick={() => this.handleFilterChange("All")}
                style={{ cursor: "pointer" }}
                className={
                  "All" === currentGenre ? activeGenreStyle : genreStyle
                }
              >
                All
              </li>
              {genres.map(genre => (
                <li
                  style={{ cursor: "pointer" }}
                  key={genre.name}
                  onClick={() => this.handleFilterChange(genre.name)}
                  className={
                    genre.name === currentGenre ? activeGenreStyle : genreStyle
                  }
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-8">
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
                  {movie.map(m => (
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
                totalItems={allMovies.length}
                currentPage={currentPage}
                pageSize={pageSize}
              />
            </div>
          </div>
        </div>
      );
    else return <div className="alert alert-warning">No Movies Found!!</div>;
  }
}

export default Movies;
