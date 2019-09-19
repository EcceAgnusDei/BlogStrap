import React, { useRef } from 'react';
import { connect } from 'react-redux';

function Post(props) {
	const {userId, title, body} = props.post;
	const author = props.users.find(element => element.id == userId).name

	return (
		<div className="card my-3">
			<div className="card-header">
				{author}
			</div>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{body}</p>
			</div>
		</div>
	);
}

export default Post;