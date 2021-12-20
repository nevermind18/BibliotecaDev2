module.exports = [
    {
        question: 'Informe o nome do Livro?',
        name: 'Nome Livro'
    },
    {
        question: 'Informe o autor?',
        name: 'Nome Autor'
    },
    {
        question: 'Qual o gênero do livro?',
        placeholder: 'Selecione o gênero',
        customId: 'Gênero',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'Terror',
                value: 'Terror',
                emoji: '👻'
            },
            {
                label: 'Ficção Científica',
                value: 'Ficção Científica',
                emoji: '🚓'
            },
            {
                label: 'Aventura',
                value: 'Aventura',
                emoji: '☺'
            }
        ]
    },
    {
        question: 'Informe o link para acessar a obra',
        name: 'Link Obra',
        //filter: (m) => !isNaN(m.content)
    },
    {
        question: 'Qual o status da obra?',
        placeholder: 'Informe o status da obra',
        customId: 'Status',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'Ativo',
                value: 'Ativo'
            },
            {
                label: 'Completo',
                value: 'Pausado'
            },
            {
                label: 'Em Desenvolvimento',
                value: 'Em Desenvolvimento'
            }
        ]
    },
    ,
    {
        question: 'Qual o tipo da obra?',
        placeholder: 'Informe o tipo da obra',
        customId: 'Tipo da Obra',
        minValues: 1,
        maxValues: 3,
        options: [
            {
                label: 'Romance',
                value: 'Romance'
            },
            {
                label: 'Novel',
                value: 'Novel'
            },
            {
                label: 'Conto',
                value: 'Conto'
            },
            {
                label: 'Antologia',
                value: 'Antologia'
            },
        ]
    },
    {
        question: 'Sinopse',
        name: 'Sinopse',
        //filter: (m) => !isNaN(m.content)
    },
]