import React from 'react';
import { NavLink } from 'react-router-dom';

function Pagination(props) {
	return (
		<nav aria-label="Post navigation">
			<ul className="pagination">
				{
					props.items.map(item => 
						<li className="page-item" key={item.content}>
							<NavLink
								className="page-link"
								to={item.link}
							>
							{item.content}
							</NavLink>
						</li>
					)
				}
			</ul>
		</nav>
	);
}

export default Pagination;