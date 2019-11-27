import React, { useEffect, useState } from 'react';
import FSRoot from 'react-fs-tree';
import api from '../../services/api';

export default function Seed() {
  const [seeds, setSeeds] = useState([]);
  useEffect(() => {
    async function carregaSeeds() {
      const response = await api.get('/seeds');
      setSeeds(response.data);
    }

    carregaSeeds();
  }, []);

  return (
    <>
      <div className="nav-main">Árvore de Seed`s</div>

      <div className="content">
        <FSRoot childNodes={seeds} />
      </div>
    </>
  );
}
