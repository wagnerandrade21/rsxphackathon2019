class TrilhasController {
  async index(req, res) {
    return res.json([
      {
        id: 't1',
        titulo: 'Desenvolvimento Web',
        tecnologias: [
          'Javascript',
          'Html'
        ],
        descricao: 'JavaScript é a linguagem mais popular da web e uma das mais modernas do mercado, por trás de tecnologias como ReactJS, VueJS, Angular, NodeJS e React Native.',
      }, 
      {
        id: 't2',
        titulo: 'Primeiros Passos',
        tecnologias: [
          'Lógica de Programação'
        ],
        descricao: 'O curso Introdução à Lógica de Programação objetiva ajudar o aluno a compreender a lógica de programação antes mesmo de trabalhar com quaisquer linguagens',
      },
      {
        id: 't3',
        titulo: 'Desenvolvimento Web',
        tecnologias: [
          'React','NodeJs'
        ],
        descricao: 'Com a Formação React, você vai construir duas aplicações. A primeira é um cadastro de livro e autores, para introduzir a tecnologia e te dar uma visão geral do que pode ser feito.',
      },
      {
        id: 't4',
        titulo: 'Backend',
        tecnologias: [
          'NodeJS'
        ],
        descricao: 'Para servir e armazenar os dados da sua aplicação, seja ela web ou mobile, você vai precisar de um servidor com todas as suas regras de negócio.',
      },
      {
        id: 't5',
        titulo: 'Data Science',
        tecnologias: [
          'Regressão Linear: Técnicas Avançadas de Modelagem'
        ],
        descricao: 'Análises preliminares, Análises gráficas, Transformação de variáveis, Regressão linear com StatsModels, Regressão linear com Scikit Learn.',
      },
    ]);
  }
}

export default new TrilhasController();
