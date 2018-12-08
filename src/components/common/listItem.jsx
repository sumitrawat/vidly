import React from "react";
const ListItem = ({ itemValue, itemText, itemStyle, onItemSelected }) => {
  return (
    <li
      style={{ cursor: "pointer" }}
      value={itemValue}
      onClick={onItemSelected}
      className={itemStyle}
    >
      {itemText}
    </li>
  );
};

export default ListItem;
