import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
class Table extends Component {
  state = {};
  render() {
    const { onSort, columns, sortColumn, data, onDelete, onLiked } = {
      ...this.props
    };
    return (
      <table className="table table-striped">
        <TableHeader
          onSort={onSort}
          columns={columns}
          sortColumn={sortColumn}
        />
        <TableBody
          data={data}
          onDelete={onDelete}
          onLiked={onLiked}
          columns={columns}
        />
      </table>
    );
  }
}

export default Table;
