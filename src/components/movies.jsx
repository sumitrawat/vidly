import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { getGenres } from "../services/fakeGenreService";
import { getPagedMovies } from "./utility/getPagedMovies";
import ListItem from "./common/listItem";
import MovieTable from "./moviesTable";
import _ from "lodash";
class Movies extends Component {
  state = {
    allMovies: [],
    genres: [],
    currentPage: 1,
    pageSize: 3,
    currentGenre: "All",
    sortColumn: { path: "title", order: "asc" }
  };
  componentDidMount() {
    this.setState({
      allMovies: getMovies(),
      genres: [{ _id: "", name: "All" }, ...getGenres()]
    });
  }
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
      currentPage: 1,
      currentGenre: name
    });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getTableData() {
    const { currentPage, pageSize, currentGenre, sortColumn } = {
      ...this.state
    };
    const filteredMovies =
      currentGenre === "All"
        ? [...this.state.allMovies]
        : [...this.state.allMovies].filter(m => m.genre.name === currentGenre);
    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const pagedMovies = getPagedMovies(sortedMovies, currentPage, pageSize);

    return { totalItems: filteredMovies.length, movies: pagedMovies };
  }

  render() {
    const { currentPage, pageSize, currentGenre, genres, sortColumn } = {
      ...this.state
    };
    const { totalItems, movies } = this.getTableData();
    if (totalItems > 0)
      return (
        <div style={{ marginTop: "20px" }} className="row container">
          <div className="col-md-4">
            <ul className="list-group">
              {genres.map(genre => (
                <ListItem
                  itemText={genre.name}
                  key={genre._id}
                  itemValue={genre.name}
                  itemStyle={
                    genre.name === currentGenre
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  onItemSelected={() => this.handleFilterChange(genre.name)}
                />
              ))}
            </ul>
          </div>
          <div className="col-md-8">
            <div>Showing {totalItems} movies</div>
            <div>
              <MovieTable
                movies={movies}
                onDelete={this.handleDelete}
                onLiked={this.handleLiked}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />
              <Pagination
                onPageChange={this.handlePageChange}
                totalItems={totalItems}
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
