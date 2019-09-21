import React from 'react';

import Card from './Card';

function Comment(props) {

	const { name, body } = props.comment;

	return (
		<Card theme={props.theme} header={<h5>{name}</h5>}>
			{body}
		</Card>
	);
}

export default Comment