class DesafiosController {
  async index(req, res) {
    return res.json([
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
  }
}

export default new DesafiosController();
