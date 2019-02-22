import React from "react";
import PropTypes from "prop-types";
import Comment from "../CommentSection/Comment";
import "./CommentSection.css";

const CommentSection = props => {
  return <Comment className="post__comment" comments={props.comments} />;
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};
/* Pseudo code 
The 'Add a comment...' input should be wrapped in a <form></form> element. 
Using that form's onSubmit event handler, invoke the addNewComment function and pass it the 
required arguments it needs to add a new comment.
Update your state with the new comment
(This should trigger your component tree to "re-render" with 
your new comment on that post).
*/

export default CommentSection;
