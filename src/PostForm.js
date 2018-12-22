import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
// functions up here like handleSubmit are basically your js functions and vars
// ex. this one checks the form's submission
	// with submission it sets what the 'post model''s data is going to return
	handleSubmit = (e) =>{
		// prevents page from reloading
		e.preventDefault();
		const title = this.getTitle.value;
		const message = this.getMessage.value;
		const data = {
			id: new Date(),
			title,
			message, 
			editing: false
		}
		// console.log(data);
		//dispatch is going to tell the post reducer we have data and have added a post
		 this.props.dispatch({
      		type:'ADD_POST',
      		data});
    	this.getTitle.value = '';
    	this.getMessage.value = '';
	}
// render and return basically are what the new html code will be 
render() {
return (
<div>
  <h1>Create Post</h1>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" placeholder="Enter Post Title" ref={(input)=>this.getTitle = input} /><br /><br />
  {/* refs interact with elements inside of the component */}
   <textarea required rows="5" cols="28" placeholder="Enter Post" ref={(input)=>this.getMessage = input} /><br /><br />
   <button>Post</button>
  </form>
</div>
);
}
}
export default connect() (PostForm);