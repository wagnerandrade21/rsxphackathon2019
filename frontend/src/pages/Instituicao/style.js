import styled from 'styled-components';

export const Secao = styled.section`
  background: #007bff;
  background: linear-gradient(to right, #0062e6, #33aeff);

  .card {
    border: none;
    border-radius: 1rem;
    transition: all 0.2s;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  }

  hr {
    margin: 1.5rem 0;
  }

  .card-title {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
  }

  .card-price {
    font-size: 3rem;
    margin: 0;
  }

  .card-price .period {
    font-size: 0.8rem;
  }

  ul li {
    margin-bottom: 1rem;
  }

  .text-muted {
    opacity: 0.7;
  }

  .btn {
    font-size: 80%;
    border-radius: 5rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
    padding: 1rem;
    opacity: 0.7;
    transition: all 0.2s;
  }

  /* Hover Effects on Card */

  @media (min-width: 992px) {
    .card:hover {
      margin-top: -0.25rem;
      margin-bottom: 0.25rem;
      box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);
    }
    .card:hover .btn {
      opacity: 1;
    }
  }
`;
