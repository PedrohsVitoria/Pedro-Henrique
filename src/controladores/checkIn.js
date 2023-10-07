const { convidados, confirmacaoConvidados } = require('../bancoDeDados');

const checkInConvidados = async (req, res) => {
    const { id } = req.params;
    let idExistente = convidados.find((convidado) => {
        return convidado.id === Number(id)
    });



    if (!idExistente) {
        return res.status(400).json({ mensagem: 'Essa idenficação não consta na lista de convidados' })
    }
    confirmacaoConvidados.push(idExistente)

    return res.status(201).json({ mensagem: 'Convidado com presença confirmada' })
};

module.exports = checkInConvidados;