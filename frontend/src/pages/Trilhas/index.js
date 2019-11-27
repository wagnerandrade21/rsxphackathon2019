import React, { useEffect, useState } from 'react';
import { DivTrilha } from './style';
import api from '../../services/api';



export default function Trilhas() {
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    async function carregarTrilhas() {
      const response = await api.get('/trilhas');
      setTrilhas(response.data);
    }

    carregarTrilhas();

  }, []);

  return (
    <>
      <div className="nav-main">Trilhas da sua instituição</div>

      <div className="content">
        <div className="row">

        {trilhas.map( trilha => {
            return (
              <DivTrilha className="col-sm-4" >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{trilha.titulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {trilha.tecnologias.map( (tec, index) => (trilha.tecnologias.length != index+1) ? tec + ', ' : tec )}
                    </h6>
                    <p className="card-text">
                      {trilha.descricao}
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
            );
          })}
          
        </div>
      </div>
    </>
  );
}
