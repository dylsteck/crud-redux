import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPosts from './AllPosts';

class App extends Component {
  render() {
      return (
      <div className="App">
        <PostForm />
        <AllPosts />
      </div>
      );
  }
  }
export default App;