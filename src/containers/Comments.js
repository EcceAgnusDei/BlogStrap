import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getComments } from '../actions/commentAction.js';
import Comment from '../components/Comment';
import Spinner from '../components/Spinner';

function Comments(props) {

	console.log('rendering Comments****************', props.postId);

	useEffect(() => {
		props.getPostComments(props.postId)
	}, [props.postId]);

	const commentJSX = props.comments.map(item =>
		<Comment key={item.id} comment={item} theme={props.theme}/>
	)

	return (
		<React.Fragment>
			<h2>Commentaires</h2>
			{props.commentsLoading ? Spinner() :
			commentJSX.length > 0 ? commentJSX : 'No comments'}
		</React.Fragment>
	);
}


const mapDispatchToProps = dispatch => {
	return {
		getPostComments: id => dispatch(getComments(id)) 
	}
}

const mapStateToProps = state => {
	return {
		comments: state.comment,
		commentsLoading: state.status.commentsLoading
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)