import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  renderCell(item, col) {
    if (col.content) {
      return col.content(item);
    } else return _.get(item, col.path);
  }
  renderKey(item, col) {
    return item._id + (col.key || col.path);
  }
  render() {
    const { data, columns } = { ...this.props };

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(col => (
              <td key={this.renderKey(item, col)}>
                {this.renderCell(item, col)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
