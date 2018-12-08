import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = ({ liked, onLiked }) => {
  if (liked)
    return (
      <span style={{ cursor: "pointer" }} onClick={onLiked}>
        <FontAwesomeIcon icon={["fas", "heart"]} />
      </span>
    );
  else
    return (
      <span style={{ cursor: "pointer" }} onClick={onLiked}>
        <FontAwesomeIcon icon={["far", "heart"]} />
      </span>
    );
};

export default Like;
