import React, { useEffect, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';
import DesafioCard from './desafioCard';

export default function Desafios() {
  const [desafios, setDesafios] = useState([]);

  useEffect(() => {
    async function carregaDesafios() {
      const response = await api.get('/Desafios');
      setDesafios(response.data);
    }

    carregaDesafios();
  }, []);

  return (
    <>
      <div className="nav-main">Desafios</div>

      <div className="content">
        <div className="row">
          {desafios.map(x => {
            return (
              <div className="col-lg-4">
                <div className="card">
                  <img className="card-img-top" alt="..." />
                  <DesafioCard className="col-sm-12" desafio={x} />;
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
