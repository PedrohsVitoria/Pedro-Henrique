const { convidados, confirmacaoConvidados } = require('../bancoDeDados');


const listaDeConvidados = async (req, res) => {
    return res.status(200).json(convidados);
};


module.exports = listaDeConvidados;