import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
// Tomi Taylor
export default createGlobalStyle`

    @import url("https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap");
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font: 14px 'Poppins', sans-serif !important;
        font-weight: 300 !important;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`;
