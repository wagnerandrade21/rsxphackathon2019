import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
max-width: 600px;
margin: 50px auto;
form {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  input {
    // background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: black;
    margin 0 0 10px;
  }

  hr {
    border: 0;
    height: 1px;
    background: black;
    margin: 10px 0 20px;
  }
  button {
    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#3b9eff')}
    }
  }
}
`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
`;
