import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPosts, next, prev } from '../actions/postActions.js';
import { getUsers } from '../actions/userActions.js';
import Post from '../components/Post.js';
import Pagination from '../components/Pagination.js';

function Posts(props) {

	useEffect(() => {
		props.getAllPosts();
		props.getAllUsers();
	}, [])

	const index = parseInt(props.match.params.index);
	const navSpan = 5

	const paginationItems = [];

	for (let i = index - navSpan ; i <= index + navSpan ; i++)
	{
		if (i > 0 && i < props.posts.length)
		{
			paginationItems.push(
			{
				content: i,
				link: `/posts/${i}`
			})
		}
	}

	if (props.match.params.index > 1) {
		paginationItems.unshift({
			content: 'Prev',
			link: `/posts/${index - 1}`
		})
	}
	if (props.match.params.index < props.posts.length)
	{
		paginationItems.push({
			content: 'Next',
			link: `/posts/${index + 1}`
		})
	}

	return (
		<React.Fragment>
			<h1>Posts</h1>
			{props.posts.length > 0 && props.users.length > 0 &&
			<Post users={props.users} post={props.posts[index - 1]}/>}
			<Pagination items={paginationItems}/>
		</React.Fragment>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAllPosts: () => dispatch(getPosts()),
		getAllUsers: () => dispatch(getUsers()),
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.post.all,
		users: state.user.all
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);