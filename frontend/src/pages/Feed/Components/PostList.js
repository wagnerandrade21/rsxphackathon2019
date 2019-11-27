import React, { Component } from 'react'

import PostItem from './PostItem'

class PostList extends Component {

  state = {
    posts: [

    ]
  }

  componentDidMount() {
    const posts = localStorage.getItem('posts')

    if(posts) {
      this.setState({posts: JSON.parse(posts)})
    }
  }


  render() {
    return (
      <div className="postList">   
        {this.state.posts.map(post => <PostItem key={post.id} {...post} />)}
      </div>
    )
  }
}

export default PostList