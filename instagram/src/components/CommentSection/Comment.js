import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
    return (
		<div className="post-comment">
			<p>
				<span>{props.username}</span>
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