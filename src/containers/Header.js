import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
	let menuJSX;

	const addClassToElement = (element, className) => 
	{
		return {
			...element,
			props: {
				...element.props,
				className: element.props.className + ' ' + className
			}
		}
	}

	if (Array.isArray(props.children)) {
		menuJSX = props.children.map(item => 
			<li className="nav-item" key={item.props.children}>
				{addClassToElement(item, 'nav-link')}
			</li>)
	} else {
		menuJSX = 
				<li className="nav-item" key={props.children.props.children}>
					{addClassToElement(props.children, 'nav-link')}
				</li>
	}

	return (
		<header className="navbar navbar-expand-sm p-0 navbar-light bg-white">
			<div className="container">
				{props.brand && 
				<NavLink 
					to="/"
					className="navbar-brand">
					{props.brand}
				</NavLink>}
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" 
				aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
		    		<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbar">
					<ul className="navbar-nav ml-auto">
						{menuJSX}
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;