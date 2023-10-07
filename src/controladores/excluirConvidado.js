const { convidados } = require('../bancoDeDados');
const excluirConvidado = async (req, res) => {
    const { id } = req.params;


    const indiceConvidadoExistente = convidados.findIndex((convidado) => {
        return convidado.id === Number(id)
    });

    if (indiceConvidadoExistente < 0) {
        return res.status(404).json({ mensagem: 'Essa pessoa não está na lista de convidados!' });
    }



    convidados.splice(indiceConvidadoExistente, 1);


    return res.status(200).json({ mensagem: 'Convidado excluído' });

};

module.exports = excluirConvidado;