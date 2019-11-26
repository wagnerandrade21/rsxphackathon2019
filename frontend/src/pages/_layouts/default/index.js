import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  FaBars,
  FaBan,
  FaHome,
  FaPowerOff,
  FaBell,
  FaAngleRight,
  FaEnvelope,
} from 'react-icons/fa';

import imgLogo from '../../../assets/logo-text.png';
import imgProfile from '../../../assets/profile.jpg';
import Notifications from '../../../components/Notifications';

import { Wrapper, Aside, Container, Header, Main } from './styles';

export default function DefaultLayout({ children }) {
  const [visibleAside, setVisibleAside] = useState(true);
  const [visibleNotification, setVisibleNotification] = useState(false);

  function handleToggleAside() {
    setVisibleAside(!visibleAside);
  }

  function handleToggleNotification() {
    setVisibleNotification(!visibleNotification);
  }

  return (
    <Wrapper>
      <Aside visibleAside={visibleAside}>
        <div className="logo">
          <Link to="/home">
            <a>Influenciador</a>
            <br></br>
            <a>Educacional</a>
          </Link>
        </div>

        <div className="profile">
          <img src={imgProfile} alt="perfil" />
          <Link to="/perfil">Hackathon</Link>
        </div>

        <div className="menu">
          <div className="accordion" id="collapse">
            <div className="card">
              <div className="card-header" id="heading-1">
                <Link to="/home">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    <div>
                      <FaHome className="mr-1" /> Home
                    </div>
                  </button>
                </Link>
              </div>

              <div className="card-header" id="heading-2">
                <Link to="/projetos">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse-2"
                    aria-expanded="true"
                    aria-controls="collapse-2"
                  >
                    <div>
                      <FaHome className="mr-1" /> Projetos
                    </div>
                  </button>
                </Link>
              </div>

              <div className="card-header" id="heading-3">
                <Link to="/desafios">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse-3"
                    aria-expanded="true"
                    aria-controls="collapse-3"
                  >
                    <div>
                      <FaHome className="mr-1" /> Desafios
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Aside>

      <Container>
        <Header>
          <div className="header-left">
            <FaBars onClick={handleToggleAside} />

            {/* <input type="text" placeholder="Pesquisar" /> */}
          </div>

          <div className="notifications">
            <ul>
              {/* <li>
                <FaEnvelope />
              </li>
              <li className="notification-alert">
                <FaBell onClick={handleToggleNotification} />
              </li> */}
              <li>
                <FaPowerOff />
              </li>
            </ul>
          </div>
        </Header>

        <Notifications visibleNotification={visibleNotification} />

        <Main>{children}</Main>
      </Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
