import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPosts, next, prev, getByUser } from '../actions/postActions.js';
import { getUsers } from '../actions/userActions.js';
import Post from '../components/Post.js';
import Pagination from '../components/Pagination.js';

function Posts(props) {

	const userId = props.match.params.userId;
	
	useEffect(() => {
		props.getAllUsers();
		if(userId)
		{
			props.getAllByUser(userId)
		} else {
			props.getAllPosts();
		}
	}, [userId])

	const index = props.match.params.index ? parseInt(props.match.params.index) : 1;
	const navSpan = 5

	const paginationItems = [];

	for (let i = index - navSpan ; i <= index + navSpan ; i++)
	{
		if (i > 0 && i <= props.posts.length)
		{
			if (!userId) {
				paginationItems.push(
				{
					content: i,
					link: `/posts/${i}`
				})
			} else {
				paginationItems.push(
				{
					content: i,
					link: `/posts/${userId}/${i}`
				})
			}
		}
	}

	if (!userId) {
		if (index > 1) {
			paginationItems.unshift({
				content: 'Prev',
				link: `/posts/${index - 1}`
			});
		}
		if (index < props.posts.length) {
			paginationItems.push({
				content: 'Next',
				link: `/posts/${index + 1}`
			})
		}
	} else {
		if (index > 1) {
			paginationItems.unshift({
				content: 'Prev',
				link: `/posts/${userId}/${index - 1}`
			});
		}
		if (index < props.posts.length) {
			paginationItems.push({
				content: 'Next',
				link: `/posts/${userId}/${index + 1}`
			})
		}
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
		getAllByUser: (id) => dispatch(getByUser(id))
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.post.all,
		users: state.user.all
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);