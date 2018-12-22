import React, { Component } from 'react';
import{connect} from 'react-redux';

class Post extends Component {
  render() {
  return (
    <div>
    	{/* we can do this because the key 'post' has been mapped to the props(and props are used universally) */}
      <h2>{this.props.post.title}</h2>
      <p>{this.props.post.message}</p>
  		{/* dispatching an action of type ‘EDIT_POST’ and also passing the id of the post. */}
      <button onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>Edit</button>
      <button onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>Delete</button>
    </div>
  );
 }
}
export default connect()(Post);