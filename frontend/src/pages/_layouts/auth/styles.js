import styled from 'styled-components';
import imgUser from '../../../assets/user.svg';
import imgPassword from '../../../assets/password.svg';

export const Wrapper = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif !important;
  background: #edf1f5;
  color: #424a5d;

  .box-login {
    width: 360px;
    border-radius: 5px;
    background: #ffffff;
    text-align: center;
    box-shadow: 1px 0 20px rgba(0, 0, 0, 0.08);
  }

  .box-login .header-box {
    border-radius: 5px 5px 0 0;
    height: 10px;
    background: #424a5d;
    width: 100%;
  }

  .box-login form {
    padding: 0 35px;
  }

  .box-login form h3 {
    text-transform: uppercase;
    font-weight: normal;
    margin: 30px 0;
    font-size: 20px;
  }

  .box-login form input,
  button {
    background: #f2f2f2;
    outline: 0;
    width: 100%;
    border: 0;
    padding: 17px;
    font-size: 13px;
    margin-bottom: 15px;
    text-transform: uppercase;
    color: #4f5467;
    border-radius: 4px;
  }

  .box-login form input::placeholder {
    color: #8d97ad;
  }

  .box-login input.input-user {
    background: #f2f2f2 url(${imgUser}) no-repeat 260px center;
    background-size: 15px 15px;
  }

  .box-login input.input-password {
    background: #f2f2f2 url(${imgPassword}) no-repeat 260px center;
    background-size: 15px 15px;
  }

  .box-login form button {
    text-transform: uppercase;
    background: #4f5467;
    color: #fff;
    font-size: 13px;
    outline: 0;
  }

  .box-login form button:hover {
    opacity: 0.9;
  }

  .box-login form p {
    font-size: 13px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  form span {
    display: flex;
    color: #dc3545;
    margin-bottom: 12px;
    margin-top: -13px;
    font-size: 13px;
    font-weight: 500;
  }

  @media screen and (max-width: 422px) {
    .box-login {
      width: 100%;
      box-shadow: none;
    }

    background: #ffffff;

    .box-login input.input-user,
    .box-login input.input-password {
      background: #f2f2f2;
    }

    .header-box {
      display: none;
    }
  }
`;
