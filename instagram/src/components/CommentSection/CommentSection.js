import React from "react";
import PropTypes from "prop-types";
import Comment from "../CommentSection/Comment";
import "./CommentSection.css";


class CommentSection extends React.Component {
	constructor() {
			super();
			this.state = {
				comments: [],
				currComment: ''
			}
	}

componentDidMount() {
	this.setState({
				comments: this.props.comments,
				currComment: '',
				likes: this.props.likes,
				isLiked: true
	});
}

commentHandler = (event) => {
	const { name, value} = event.target;
	this.setState({
		[name]: value
	})
}

handleCommitSubmit = (event) => {
	event.preventDefault();
	const newCommentList =  [ ...this.state.comments, { username: 'DefaultUser', text: this.state.currComment } ];
	this.setState({
		comments: newCommentList,
		currComment: ''
	});
};

render() {
	return (
		<div>
		{this.state.comments.map((comment) => {
			return <Comment key={comment.text} username={comment.username} text={comment.text} />;
		})}
				<form>
				<div className="post__comment__input__div">
						<input
								className="comment-input"
								type="text"
								name="currComment"
								placeholder="Add a comment..."
								value={this.state.currentComment}
								onChange={this.commentHandler}
								onSubmit={this.handleCommitSubmit}
						/>
				<button onClick={this.handleCommitSubmit}>Submit</button>
				</div>
				</form>
			</div>
		);
			}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		})
		)
	};

export default CommentSection;
