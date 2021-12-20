module.exports = [
    {
        question: 'Informe o nome do autor?',
        name: 'Nome Autor'
    },
    {
        question: 'Qual o gênero literário do autor?',
        placeholder: 'Selecione o gênero literário',
        customId: 'Gênero Literário',
        minValues: 1,
        maxValues: 1,
        options: [
            {
                label: 'Lírico',
                value: 'Lírico'
            },
            {
                label: 'Narrativo',
                value: 'Narrativo'
            },
            {
                label: 'Dramático',
                value: 'Dramático'
            }
        ]
    },
    {
        question: 'Informe o link de uma rede social do autor:',
        name: 'Link Rede Social',
        //filter: (m) => !isNaN(m.content)
    }
]