import React, { Component } from "react";
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
          <button onClick={this.props.onDelete} className="btn btn-error">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
