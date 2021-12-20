module.exports = [
    {
        question: 'Qual seu nome?',
        name: 'Nome'
    },
    {
        question: 'Em qual região do país você mora?',
        placeholder: 'Selecione a região',
        customId: 'Região',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'Norte',
                value: 'Norte',
                emoji: '🦎'
            },
            {
                label: 'Nordeste',
                value: 'Nordeste',
                emoji: '🥵'
            },
            {
                label: 'Centro-Oeste',
                value: 'Centro-Oeste',
                emoji: '☺'
            },
            {
                label: 'Sudeste',
                value: 'Sudeste',
                emoji: '👾'
            },
            {
                label: 'Sul',
                value: 'Sul',
                emoji: '🥶'
            },
        ]
    },
    {
        question: 'Qual a sua idade?',
        name: 'Idade',
        //filter: (m) => !isNaN(m.content)
    }
]