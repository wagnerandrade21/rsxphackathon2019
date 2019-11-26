import styled from 'styled-components';
import background from './background.jpg';

export const Content = styled.div`
@import url("https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap");

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

    min-height: 100%;
    min-width: 100%;
    background: #000 url("${background}") no-repeat;
    background-size: cover;
    font: 14px "Poppins", sans-serif !important;
    -webkit-font-smoothing: antialiased !important;

.container {
  margin: 80px auto 0;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container img {
  width: 150px;
}

.content {
  width: 100%;
  background: #fff;
  margin-top: 25px;
  border-radius: 4px;
  padding: 30px;
  box-shadow: 1px 0 20px rgba(0, 0, 0, 0.2);
}

.content form {
  display: flex;
  flex-direction: column;
}

.content form h3 {
  color: #444;
  text-align: center;
  margin-bottom: 20px;
}

.content form label {
  color: #444;
  font-weight: bold;
  margin-bottom: 5px;
}

.content form input {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 45px;
  padding: 0 10px;
  font: 14px "Poppins", sans-serif !important;
}

.content form button {
  height: 45px;
  background: #444;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font: 14px "Poppins", sans-serif !important;
}

.content form button:hover {
  background: rgb(100, 100, 100);
}

`;