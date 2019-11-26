import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import DesafioCard from './desafioCard';

export default function Desafios() {
  const [desafios, setDesafios] = useState([]);

  useEffect(() => {
    setDesafios([
      {
        titulo: 'Desafio A',
        descricao: 'Descricoes do desafio A.',
        status: 'Concluído',
      },
      {
        titulo: 'Desafio B',
        descricao: 'Descricoes do desafio B.',
        status: 'Aguardando',
      },
      {
        titulo: 'Desafio C',
        descricao: 'Descricoes do desafio C.',
        status: 'Aguardando',
      },
      {
        titulo: 'Desafio D',
        descricao: 'Descricoes do desafio C.',
        status: 'Aguardando',
      },
      {
        titulo: 'Desafio E',
        descricao: 'Descricoes do desafio C.',
        status: 'Aguardando',
      },
    ]);
  }, []);

  return (
    <>
      <div className="nav-main">Desafios</div>

      <div className="content">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              {desafios.map(x => {
                return <DesafioCard desafio={x} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
