import React, { Component } from "react";
import Like from "./like";
class Movie extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.genre}</td>
        <td>{this.props.stock}</td>
        <td>{this.props.rate}</td>
        <td>
          <Like liked={this.props.liked} onLiked={this.props.onLiked} />
        </td>
        <td>
          <button
            onClick={() => this.props.onDelete(this.props.title)}
            className="btn btn-error"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
