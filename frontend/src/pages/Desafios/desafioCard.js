import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from './styles';

export default function DesafioCard({ desafio }) {
  const concluido = desafio.status === 'Concluído';

  return (
    <Card className="card-body" concluido={concluido}>
      <h5 className="card-title">{desafio.titulo}</h5>
      <p className="card-text">{desafio.descricao}</p>
      {/* <a href="#" className="btn btn-primary">
        Go somewhere
      </a> */}
      <Link to="/Desafios/detalhe">
        <a href="#" className="btn btn-primary">
          Detalhes
        </a>
      </Link>
      <p className="card-text">{desafio.status}</p>
    </Card>
  );
}
