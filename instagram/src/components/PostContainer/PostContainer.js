import React from "react";
import PropTypes from "prop-types";
import Posts from "../Posts/Posts";

const PostContainer = props => {
  let arr = props.posts.map((e, i) => <Posts key={i} post={e} />);
  return <div className="posts">{arr}</div>;
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default PostContainer;
