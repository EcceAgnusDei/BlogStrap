import React from 'react';
import { NavLink } from 'react-router-dom';

function User(props) {
	const {name, email, address, website, id} = props.user;
	return (
		<div className='card'>
			<div className="card-header">
				{name}
			</div>
			<div className="card-body">
				<ul className="list-group list-group-flush">
    				<li className="list-group-item px-0">{`Address: ${address.street}, ${address.city}`}</li>
    				<li className="list-group-item px-0">{`Email: ${email}`}</li>
    				<li className="list-group-item px-0"><NavLink to={`/posts/user${id}/1`}>My posts</NavLink></li>
    				<li className="list-group-item px-0"><a href={website}>{website}</a></li>
  				</ul>
			</div>
		</div>
	);
}

export default User