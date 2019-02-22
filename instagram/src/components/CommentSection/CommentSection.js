import React from "react";
import PropTypes from "prop-types";
import Comment from "../Comment/Comment";
import "./CommentSection.css";

const CommentSection = props => {
  let arr = props.comments.map((e, i) => (
    <div className="post__comment" key={`comment-${i}`}>
      <span className="username">{e.username}</span> {e.text}
    </div>
  ));
  return <div className="posts">{arr}</div>;
};

export default CommentSection;
