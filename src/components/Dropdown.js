import React from 'react';

import { addClassToElement } from '../util.js';

function Dropdown(props) {

	const childrenJSX = props.children.map(item =>
		addClassToElement(item, 'dropdown-item')
	)

	return (
		<div className="dropdown">
			<button 
				className={`btn btn-${props.theme ? props.theme.secondary : 'secondary'} dropdown-toggle`} 
				type="button" 
				id="dropdownMenuButton" 
				data-toggle="dropdown" 
				aria-haspopup="true" 
				aria-expanded="false"
			>
    			{props.buttonContent}
  			</button>
  			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				{childrenJSX}
			</div>
		</div>
	);
}

export default Dropdown