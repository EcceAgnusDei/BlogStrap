import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getPosts, next, prev, getByUser } from '../actions/postActions.js';
import { getUsers } from '../actions/userActions.js';
import { loading } from '../actions/statusAction.js';
import Post from '../components/Post.js';
import Pagination from '../components/Pagination.js';
import Comments from './Comments';

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
	}, [userId]);

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
					link: `/posts/user${userId}/${i}`
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
				link: `/posts/user${userId}/${index - 1}`
			});
		}
		if (index < props.posts.length) {
			paginationItems.push({
				content: 'Next',
				link: `/posts/user${userId}/${index + 1}`
			})
		}
	}

	return (
		<React.Fragment>
			<h1>{index === 1 ? 'Last post' : 'Post'}</h1>
			{props.postsLoading ? <h2>Loading posts...</h2> :
			<React.Fragment>
				<Post users={props.users} post={props.posts[index - 1]} theme={props.theme}/>
				<Comments postId={props.posts[index - 1].id} theme={props.theme}/>
			</React.Fragment>}
			<Pagination items={paginationItems} theme={props.theme}/>
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
		users: state.user.all,
		theme: state.theme,
		postsLoading: state.status.postsLoading
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);