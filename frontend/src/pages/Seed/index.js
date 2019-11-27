import React from 'react';
import FSRoot from 'react-fs-tree';

export default function Seed() {
  return (
    <>
      <div className="nav-main">Árvore de Seed`s</div>

      <div className="content">
        <FSRoot
          childNodes={[
            {
              name: 'Escola Estadual Maurilio Albanese',
              childNodes: [
                {
                  name: 'Você',
                  selected: true,
                  childNodes: [
                    { name: 'Wagner Andrade' },
                    {
                      name: 'Lucas Paixão',
                      childNodes: [
                        { name: 'Joao da Silva' },
                        { name: 'Maria Luiza' },
                        { name: 'Luciana Aparecida' },
                      ],
                    },
                    {
                      name: 'Paulo Silva',
                      childNodes: [
                        { name: 'Jose Antunes' },
                        { name: 'Maria Conceicao' },
                        { name: 'Antonio Braz' },
                      ],
                    },
                  ],
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
