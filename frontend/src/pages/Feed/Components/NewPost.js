import React, { Component } from 'react';

import PostList from './PostList';

function NewPost() {
  function updateStatus() {
    PostList.setState();
  }

  return (
    <>
      <div className="newPost">
        <input />
        <button type="button">Postar</button>
      </div>
    </>
  );
}

export default NewPost;
