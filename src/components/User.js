import React from 'react';
import { NavLink } from 'react-router-dom';

import Card from './Card';

function User(props) {
	const {name, email, address, website, id} = props.user;
	return (
        <Card header={name} theme={props.theme}>
			<ul className="list-group list-group-flush">
				<li className="list-group-item px-0">
					{`Address: ${address.street}, ${address.city}`}
				</li>
				<li className="list-group-item px-0">
					{`Email: ${email}`}
				</li>
				<li className="list-group-item px-0">
					<NavLink 
						className={props.theme ? `text-${props.theme.primary}` : ''} 
						to={`/posts/user${id}/1`}
					>
						My posts
					</NavLink>
				</li>
				<li className="list-group-item px-0">
					<a 
						className={props.theme ? `text-${props.theme.primary}` : ''} 
						href={website}
					>
						{website}
					</a>
				</li>
			</ul>
        </Card>
	);
}

export default User