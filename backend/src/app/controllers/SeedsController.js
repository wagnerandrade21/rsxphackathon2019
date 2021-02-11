class SeedsController {
  async index(req, res) {
    return res.json([
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
    ]);
  }
}

export default new SeedsController();
