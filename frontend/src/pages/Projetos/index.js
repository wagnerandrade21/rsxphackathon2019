import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function Projetos() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    setProjetos([
      {
        titulo: 'Projeto A',
        descricao: 'Descricoes do projeto A.',
        patrocinador: 'Marcopolo',
        participantes: ['Pedro', 'Marcos'],
        dataInicial: new Date(),
        dataFinal: new Date(),
        status: 'Aguardando',
      },
      {
        titulo: 'Projeto B',
        descricao: 'Descricoes do projeto B.',
        patrocinador: 'Marcopolo',
        participantes: ['Pedro', 'Marcos'],
        dataInicial: new Date(),
        dataFinal: new Date(),
        status: 'Aguardando',
      },
      {
        titulo: 'Projeto C',
        descricao: 'Descricoes do projeto C.',
        patrocinador: 'Marcopolo',
        participantes: ['Pedro', 'Marcos'],
        dataInicial: new Date(),
        dataFinal: new Date(),
        status: 'Aguardando',
      },
      {
        titulo: 'Projeto D',
        descricao: 'Descricoes do projeto C.',
        patrocinador: 'Marcopolo',
        participantes: ['Pedro', 'Marcos'],
        dataInicial: new Date(),
        dataFinal: new Date(),
        status: 'Aguardando',
      },
      {
        titulo: 'Projeto E',
        descricao: 'Descricoes do projeto C.',
        patrocinador: 'Marcopolo',
        participantes: ['Pedro', 'Marcos'],
        dataInicial: new Date(),
        dataFinal: new Date(),
        status: 'Aguardando',
      },
    ]);
  }, []);

  return (
    <>
      <div className="nav-main">Projetos</div>

      <div className="content">
        <div className="row">
          <div className="col-lg-12">
            <div className="accordion" id="accordionExample">
              {projetos.map((x, i) => {
                const show = i === 0;

                let collapsedShow = 'collapse';
                let buttonClassName = 'btn btn-link';
                if (show) collapsedShow += ' show';
                else buttonClassName += ' collapsed';

                return (
                  <div className="card">
                    <div className="card-header" id={`heading${i}`}>
                      <h2 className="mb-0">
                        <button
                          className={buttonClassName}
                          type="button"
                          data-toggle="collapse"
                          data-target={`#collapse${i}`}
                          aria-expanded={show}
                          aria-controls={`collapse${i}`}
                        >
                          {x.titulo}
                        </button>
                      </h2>
                    </div>

                    <div
                      id={`collapse${i}`}
                      className={collapsedShow}
                      aria-labelledby={`heading${i}`}
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        {x.descricao}
                        <br />
                        <br />
                        Patrocinador: <strong>{x.patrocinador}</strong>
                        <br />
                        Participantes:
                        <strong>{x.participantes.join(', ')}</strong>
                        <br />
                        DataInicial:
                        <strong>{format(x.dataInicial, 'dd/MM/yyyy')}</strong>
                        <br />
                        DataInicial:
                        <strong>{format(x.dataFinal, 'dd/MM/yyyy')}</strong>
                        <br />
                        status: <strong>{x.status}</strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
