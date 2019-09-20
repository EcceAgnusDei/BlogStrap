import React from 'react'

function Comment(props) {

	const { name, body } = props.comment;

	return (
		<div className="card mb-3">
			<div className="card-header">
				<h5>{name}</h5>
			</div>
			<div className="card-body">
				{body}
			</div>
		</div>
	);
}

export default Comment