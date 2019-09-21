import React from 'react';
import { NavLink } from 'react-router-dom';

function Pagination(props) {

	const color = props.theme ? `text-${props.theme.primary}` : '';

	return (
		<nav aria-label="Post navigation">
			<ul className="pagination justify-content-center flex-wrap">
				{
					props.items.map(item => 
						<li className="page-item" key={item.content}>
							<NavLink
								className={`page-link ${color}`}
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