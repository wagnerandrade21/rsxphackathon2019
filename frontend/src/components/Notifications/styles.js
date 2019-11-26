import styled from 'styled-components';

export const Container = styled.div`
  .orange {
    background: #fb9678;
  }

  .blue {
    background: #02c0c8;
  }

  .gray {
    background: #343a40;
  }

  display: ${props => (props.visibleNotification ? 'block' : 'none')};

  .notification-list {
    position: absolute;
    background: #fff;
    top: 60px;
    right: 55px;
    width: 300px;
    z-index: 1;
    box-shadow: 1px 0 20px rgba(0, 0, 0, 0.09);
    border: 1px solid #e9ecef;
    font-size: 13px;

    &::before {
      content: '';
      position: absolute;
      right: 6px;
      top: -12px;
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 12px solid #fff;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 0;

      li {
        width: 100%;
      }
    }

    .list-header,
    .list-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      font-weight: 500;
      color: #343a40;
    }

    .list-header {
      border-bottom: 1px solid rgb(232, 236, 240);
    }

    .list-footer {
      border-top: 1px solid rgb(232, 236, 240);

      a {
        color: #fb9678;
        text-decoration: none;

        &:hover {
          color: #343a40;
        }
      }
    }

    .list-message {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid rgb(232, 236, 240);

      &:hover {
        background: #e8ebee;
        color: #343a40;
        cursor: pointer;
      }

      &:last-child {
        border-bottom: 0;
      }

      .message-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        color: #fff;
        margin-right: 10px;
      }

      .message-body {
        flex: 1;
      }
    }
  }
`;
