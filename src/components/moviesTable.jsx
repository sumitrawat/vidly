import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";
class MoviesTable extends Component {
  render() {
    const columns = [
      {
        path: "title",
        displayText: "Title",
        content: movie => <Link to={"/movies/" + movie._id}>{movie.title}</Link>
      },
      { path: "genre.name", displayText: "Genre" },
      { path: "numberInStock", displayText: "Stock" },
      { path: "dailyRentalRate", displayText: "Rate" },
      {
        key: "like",
        displayText: "Like",
        content: movie => (
          <Like liked={movie.liked} onLiked={() => this.props.onLiked(movie)} />
        )
      },
      {
        key: "delete",
        displayText: "Action",
        content: movie => (
          <button
            onClick={() => this.props.onDelete(movie.title)}
            className="btn btn-danger"
          >
            Delete
          </button>
        )
      }
    ];
    const { movies, onDelete, onLiked, onSort, sortColumn } = this.props;
    return (
      <Table
        data={movies}
        onDelete={onDelete}
        onLiked={onLiked}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={columns}
      />
    );
  }
}

export default MoviesTable;
