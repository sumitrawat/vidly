import React, { Component } from "react";
class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = this.props.sortColumn;
    if (path === sortColumn.path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderIcon = column => {
    const sortColumn = this.props.sortColumn;
    if (column.path !== sortColumn.path) {
      return null;
    }
    if (sortColumn.order === "asc") {
      console.log("found it");
      return <i className="fa fa-sort-desc" />;
    } else return <i className="fa fa-sort-asc" />;
  };
  render() {
    const { columns } = { ...this.props };
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column.displayText}
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.displayText} {this.renderIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
