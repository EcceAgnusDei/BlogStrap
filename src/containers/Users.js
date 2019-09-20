import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../actions/userActions.js';
import User from '../components/User.js';

function Users(props) {
	useEffect(() => {
		props.getAll();
	}, [])

	return (
		<React.Fragment>
			<h1>Users</h1>
			<div className="row">
			{
				props.users.map(item =>
					<div key={item.id} className="col-8 offset-2 offset-sm-0 col-sm-6 col-md-4 col-lg-3 mb-3">
						<User user={item}/>
					</div>
				)
			}
			</div>
		</React.Fragment>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAll: () => dispatch(getUsers()) 
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.user.all
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);