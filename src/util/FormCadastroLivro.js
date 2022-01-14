module.exports = [
    {
        question: 'Informe o nome do Livro?',
        name: 'Nome Livro'
    },
    {
        question: 'Informe o usuário do autor:',
        name: 'Nome Autor'
    },
    {
        question: 'Qual o gênero textual da obra?',
        placeholder: 'Selecione o gênero',
        customId: 'Gênero',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'WebNovel',
                value: 'WebNovel'
            },
            {
                label: 'Romance',
                value: 'Romance'
            },
            {
                label: 'Novela',
                value: 'Novela'
            },
            {
                label: 'Conto',
                value: 'Conto'
            },
            {
                label: 'Outro',
                value: 'Outro'
            }
        ]
    },
    {
        question: 'Informe o link para acessar a obra',
        name: 'Link Obra',
        //filter: (m) => !isNaN(m.content)
    },
    {
        question: 'Qual a faixa etária da obra?',
        placeholder: 'Informe a faixa etária da obra',
        customId: 'FaixaEtaria',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'Livre',
                value: 'Livre'
            },
            {
                label: '+10',
                value: '+10'
            },
            {
                label: '+12',
                value: '+12'
            },
            {
                label: '+14',
                value: '+14'
            },
            {
                label: '+16',
                value: '+16'
            },
            {
                label: '+18',
                value: '+18'
            },
        ]
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
                label: 'Hiato',
                value: 'Hiato'
            },
            {
                label: 'Completo',
                value: 'Completo'
            },
            {
                label: 'Cancelado',
                value: 'Cancelado'
            }
        ]
    },    
    {
        question: 'Qual os gêneros da obra?',
        placeholder: 'Informe até cinco gêneros:',
        customId: 'Tipo da Obra',
        minValues: 1,
        maxValues: 5,
        options: [
            {
                label: 'Artes Marciais',
                value: 'Artes Marciais'
            },
            {
                label: 'Aventura',
                value: 'Aventura'
            },
            {
                label: 'Ação',
                value: 'Ação'
            },
            {
                label: 'Comédia',
                value: 'Comédia'
            },
            {
                label: 'Crime',
                value: 'Crime'
            },
            {
                label: 'Cyberpunk',
                value: 'Cyberpunk'
            },
            {
                label: 'Distopia',
                value: 'Distopia'
            },
            {
                label: 'Drama',
                value: 'Drama'
            },
            {
                label: 'Espacial',
                value: 'Espacial'
            },
            {
                label: 'Esportes',
                value: 'Esportes'
            },
            {
                label: 'Fantasia',
                value: 'Fantasia'
            },
            {
                label: 'Ficção Científica',
                value: 'Ficção Científica'
            },
            {
                label: 'Gastronomia',
                value: 'Gastronomia'
            },
            {
                label: 'Histórico',
                value: 'Histórico'
            },
            {
                label: 'Horror',
                value: 'Horror'
            },
            {
                label: 'Infantil',
                value: 'Infantil'
            },
            {
                label: 'Isekai',
                value: 'Isekai'
            },
            {
                label: 'Jogos',
                value: 'Jogos'
            },
            {
                label: 'Magia',
                value: 'Magia'
            },
            {
                label: 'Medieval',
                value: 'Medieval'
            },
            {
                label: ' Militar',
                value: ' Militar'
            },
            {
                label: 'Mistério',
                value: 'Mistério'
            },
            {
                label: 'Mitologia',
                value: 'Mitologia'
            },
            {
                label: 'Romance',
                value: 'Romance'
            },
            {
                label: 'Terror',
                value: 'Terror'
            },
            //apenas 26 opções podem ser listadas
        ]
    },
    {
        question: 'Sinopse',
        name: 'Sinopse',
        //filter: (m) => !isNaN(m.content)
    },
]