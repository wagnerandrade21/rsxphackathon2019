class ProjetosController {
  async index(req, res) {
    return res.json([
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
  }
}

export default new ProjetosController();
