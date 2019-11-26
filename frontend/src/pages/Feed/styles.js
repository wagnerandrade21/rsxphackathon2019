import styled from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f2f2f2;
  }
`;

export const PostList = styled.div`
  header {
    background: #4a90e2;
    display: flex;
    justify-content: center;
    border: 5px solid red;
  }

  header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 42px;
    color: #fff;
    min-width: 980px;
    font-size: 14px;
    border: 5px solid yellow;
  }
`;
