import React from 'react';
import { Secao } from './style';

export default function Instituicao() {
  return (
    <>
      <div className="nav-main">Instituição</div>

      <div className="content">
        <div className="row">
          <div className="col-lg-4">
            <Secao className="pricing py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card mb-5 mb-lg-0">
                      <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">
                          Escola Estadual Maurilio Albase Novais
                        </h5>
                        <h6 className="card-price text-center">
                          #135<span className="period"> Posição Nacional</span>
                        </h6>

                        <ul className="fa-ul">
                          <li>
                            <span className="fa-li">
                              <i className="fas fa-check" />
                            </span>
                            1300 Alunos
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fas fa-check" />
                            </span>
                            1698 ponto de ranking dos alunos
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fas fa-check" />
                            </span>
                            3 Projetos em andamento
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fas fa-check" />
                            </span>
                            30 Professores
                          </li>
                          <li className="text-muted">
                            <span className="fa-li">
                              <i className="fas fa-times" />
                            </span>
                            3 Professores entre os tops ranking regional
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="btn btn-block btn-primary text-uppercase"
                        >
                          Fala Aí!!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Secao>
          </div>
          <div className="col-lg-8">
            <h1>Suas contribuições para instituição</h1>

            <div className="card-deck mb-3 text-center">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Projetos</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    0 <small className="text-muted">/ 1500</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Você não participou de nenhum projeto</li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Desafios</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    50 <small className="text-muted">/ 500 pontos</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Desafio react</li>
                    <li>Desafio CSS</li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Árvore</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    900 <small className="text-muted">/ 90000</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>25 seed`s</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
