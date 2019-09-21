import React from 'react'

function Jumbotron(props) {
	const { title, upper, lower, links } = props.children;

	const linksJSX = links.map((item, index) => 
		<a 
			href={item.href} 
			key={index} 
			className={`mr-3 text-${props.theme ? props.theme.primary : 'primary'}`}
		>
		{item.content}
		</a>
	);

	return (
		<div className="jumbotron mt-5">
			<h2 className="display-4">{title}</h2>
			{upper.length > 0 &&
			<p className="lead">{upper}</p>}
			{upper.length > 0 && (lower.length > 0 || links.length > 0) &&
			<hr className="my-4"/>}
			{lower.length > 0 &&
			<p>{lower}</p>}
			{linksJSX}
		</div>
	);
}

export default Jumbotron