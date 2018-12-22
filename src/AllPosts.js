import React, { Component } from 'react';
import {connect} from 'react-redux';

import Post from './Post';
import EditComponent from './EditComponent'

class AllPosts extends Component {
	render() {
		return (
			<div>
                <h1>All Posts</h1>
            	{/* uses the same map item but adds a conditional if the user wants to edit(and shows EditComponent) */}
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
		);
	}
}
// will map the state to the props so we can call on it
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPosts);