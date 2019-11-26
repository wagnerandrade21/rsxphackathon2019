import styled from 'styled-components';
import imgSearch from '../../../assets/search.svg';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  background: #edf1f5;
`;

export const Aside = styled.div`
  height: 100%;
  width: 220px;
  background: #fff;
  box-shadow: 1px 0 20px rgba(0, 0, 0, 0.08);
  display: ${props => (props.visibleAside ? 'block' : 'none')};

  @media (max-width: 992px) {
    display: ${props => (props.visibleAside ? 'none' : 'block')};
  }

  .logo {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    img {
      height: 90px;
      width: 90px;
      border-radius: 45px;
    }

    a {
      font-weight: 500;
      font-size: 12px;
      color: #8d97ad;
      margin-top: 10px;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e7ebf0;
      text-transform: uppercase;
      text-decoration: none;

      &:hover {
        color: #fb9678;
      }
    }
  }

  .menu {
    padding: 0 15px;

    .card {
      border: 0;

      .card-header {
        padding: 0;
        border: 0;
        background: #fff;

        a {
          text-decoration: none;
        }

        button {
          text-align: left;
          padding: 5px 0;
          width: 100%;
          color: #8d97ad;
          font-weight: 500 !important;
          display: flex;
          align-items: center;
          text-decoration: none;
          justify-content: space-between;

          div {
            svg {
              margin-top: -2px;
            }
          }

          &:hover,
          &:active,
          &:focus {
            color: #fb9678;
          }
        }
      }

      .card-body {
        padding: 0;

        ul {
          margin-bottom: 0 !important;

          li {
            padding: 3px 0;

            a {
              width: 100%;
              margin-left: 22px;
              text-decoration: none;
              color: #8d97ad;

              &:hover,
              &:active,
              &:focus {
                color: #fb9678;
              }
            }
          }
        }
      }
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  flex: 1;
  overflow: auto;
`;

export const Header = styled.div`
  height: 60px;
  background: #4f5467;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .header-left {
    display: flex;
    align-items: center;

    svg {
      color: #8d97ad;
      margin-right: 20px;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        color: #fff;
      }
    }

    input {
      height: 33px;
      width: 200px;
      color: #8d97ad;
      padding: 0 10px;
      border: 0;
      border-radius: 4px;
      background: #fff url(${imgSearch}) no-repeat 175px center;
      background-size: 14px;
      font-size: 12px !important;
      font-weight: 500 !important;

      &::placeholder {
        color: #8d97ad;
      }
    }
  }

  .notifications {
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #8d97ad;
      margin-bottom: 0;

      li {
        margin-left: 30px;

        &:first-child {
          margin-left: 0;
        }

        svg {
          font-size: 16px;
          cursor: pointer;

          &:hover {
            color: #fff;
          }
        }
      }

      .notification-alert {
        color: #fb9678;
      }
    }
  }
`;

export const Main = styled.div`
  .nav-main {
    padding: 20px;
    margin: 20px;
    background: #fff;
    color: #fb9678;
    font-weight: 500;
    text-transform: uppercase;
  }

  .content {
    background: #fff;
    padding: 25px;
    margin: 0 20px;
    text-align: justify;
  }
`;
