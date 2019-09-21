import React from 'react'

function Card(props) {

	const border = props.theme ? `border-${props.theme.secondary}` : '';
	const color = `text-${props.theme ? props.theme.secondary : 'secondary'}`;

	return (
		<div className={`card my-3 ${border}`}>
			<div className={`card-header ${border} ${color}`}>
				{props.header}
			</div>
			<div className="card-body">
				{props.children}
			</div>
		</div>
	);
}

export default Card