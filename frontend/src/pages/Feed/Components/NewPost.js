import React, {Component} from 'react';

import avatar from '../../../assets/user.svg';

class NewPost extends Component {
  state = {
    newPost: '',
  }

  componentDidMount() {
    const posts = localStorage.getItem('posts');

    if (!posts) {
      localStorage.setItem('posts', JSON.stringify([]));
    }
  }

  handleInputChanges = e =>  {
    this.setState({newPost: e.target.value})
  }

  postar = e => {
    const post = 
      {
        id: 6,
        author: {
          name: 'Instituição 1',
          avatar,
        },
        date: new Date(),
        content: this.state.newPost,
        comments: [],
      }
    
    const posts = JSON.parse(localStorage.getItem('posts'))
    
    posts.push(post)

    localStorage.setItem('posts',  JSON.stringify(posts));
  }

  render() {  
    return (
    <>
      <div className="newPost">
        <input type="text" className="textPost" onChange={this.handleInputChanges}/>
        <button type="button" onClick={this.postar}>
          Postar
        </button>
      </div>
    </>
  );
}

}

export default NewPost;
