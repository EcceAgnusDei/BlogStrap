import React, { useRef } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

function Post(props) {
	const {userId, title, body} = props.post;
	const author = props.users.find(element => element.id == userId).name

	return (
		<Card header={<h5>{author}</h5>} theme={props.theme}>
			<h5 className="card-title">{title}</h5>
			<p className="card-text">{body}</p>
		</Card>
	);
}

export default Post;