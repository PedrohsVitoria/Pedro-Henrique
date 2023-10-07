const { convidados, confirmacaoConvidados } = require('../bancoDeDados');


const listaDeConfirmados = async (req, res) => {
    return res.status(200).json(confirmacaoConvidados);
};


module.exports = listaDeConfirmados;