import React from 'react';
import { DivTrilha } from './style';

export default function Trilhas() {
  return (
    <>
      <div className="nav-main">Trilhas da sua instituição</div>

      <div className="content">
        <div className="row">
          <DivTrilha className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Desenvolvimento Web</h5>
                <h6 className="card-subtitle mb-2 text-muted">Javascript</h6>
                <p className="card-text">
                  JavaScript é a linguagem mais popular da web e uma das mais
                  modernas do mercado, por trás de tecnologias como ReactJS,
                  VueJS, Angular, NodeJS e React Native.
                </p>
                <a href="#" className="card-link">
                  Mais detalhes
                </a>
                <a href="#" className="card-link">
                  Cadastrar na trilha
                </a>
              </div>
            </div>
          </DivTrilha>

          <DivTrilha className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Primeiros Passos</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Lógica de Programação
                </h6>
                <p className="card-text">
                  O curso Introdução à Lógica de Programação objetiva ajudar o
                  aluno a compreender a lógica de programação antes mesmo de
                  trabalhar com quaisquer linguagens
                </p>
                <a href="#" className="card-link">
                  Mais detalhes
                </a>
                <a href="#" className="card-link">
                  Cadastrar na trilha
                </a>
              </div>
            </div>
          </DivTrilha>

          <DivTrilha className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Desenvolvimento Web</h5>
                <h6 className="card-subtitle mb-2 text-muted">React</h6>
                <p className="card-text">
                  Com a Formação React, você vai construir duas aplicações. A
                  primeira é um cadastro de livro e autores, para introduzir a
                  tecnologia e te dar uma visão geral do que pode ser feito.
                  Você ...
                </p>
                <a href="#" className="card-link">
                  Mais detalhes
                </a>
                <a href="#" className="card-link">
                  Cadastrar na trilha
                </a>
              </div>
            </div>
          </DivTrilha>

          <DivTrilha className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Desenvolvimento Web</h5>
                <h6 className="card-subtitle mb-2 text-muted">NodeJS</h6>
                <p className="card-text">
                  Para servir e armazenar os dados da sua aplicação, seja ela
                  web ou mobile, você vai precisar de um servidor com todas as
                  suas regras de negócio.
                </p>
                <a href="#" className="card-link">
                  Mais detalhes
                </a>
                <a href="#" className="card-link">
                  Cadastrar na Trilhas
                </a>
              </div>
            </div>
          </DivTrilha>

          <DivTrilha className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Desenvolvimento Web</h5>
                <h6 className="card-subtitle mb-2 text-muted">VueJs</h6>
                <p className="card-text">
                  Neste curso você irá aprender tudo que é necessário para
                  dominar o Vue.js. O curso vai do básico ao avançado e ao final
                  dele você terá uma compreensão total do Framework.
                </p>
                <a href="#" className="card-link">
                  Mais detalhes
                </a>
                <a href="#" className="card-link">
                  Cadastrar na trilha
                </a>
              </div>
            </div>
          </DivTrilha>
        </div>
      </div>
    </>
  );
}
