import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FaBars, FaPowerOff, FaBell } from 'react-icons/fa';

import { Container } from './styles';

export default function Notifications({ visibleNotification }) {
  return (
    <Container visibleNotification={visibleNotification}>
      <div className="notification-list">
        <ul>
          <li>
            <div className="list-header">Você possui 3 novas mensagens</div>
          </li>
          <li>
            <div className="list-message">
              <div className="message-icon orange">
                <FaBell />
              </div>
              <div className="message-body">
                Lorem Ipsum é simplesmente uma simulação...
              </div>
            </div>
            <div className="list-message">
              <div className="message-icon blue">
                <FaPowerOff />
              </div>
              <div className="message-body">
                Lorem Ipsum é simplesmente uma simulação...
              </div>
            </div>
            <div className="list-message">
              <div className="message-icon gray">
                <FaBars />
              </div>
              <div className="message-body">
                Lorem Ipsum é simplesmente uma simulação...
              </div>
            </div>
          </li>
          <li>
            <div className="list-footer">
              <Link to="/home">Visualizar Todas</Link>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
}

Notifications.propTypes = {
  visibleNotification: PropTypes.bool.isRequired,
};
