import React from 'react';

import './styles.css';

import PostList from './Components/PostList';
import NewPost from './Components/NewPost';

function Feed() {
  return (
      <>  
        <a>&nbsp;</a>
        <div className="content">
          <NewPost />
          <PostList />
        </div>
      </>
  );
}

export default Feed;
