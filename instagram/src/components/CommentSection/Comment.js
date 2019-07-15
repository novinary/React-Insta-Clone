import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
    return (
		<div className="post__comment">
			<p>
				<span className="username">{props.username}</span>
				{props.text}
			</p>
		</div>
	);
};
  
  Comment.propTypes = {
        username: PropTypes.string,
        text: PropTypes.string
  };


  export default Comment;