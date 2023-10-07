const { convidados, confirmacaoConvidados } = require('../bancoDeDados');
let id = 1;
const adicionandoConvidado = async (req, res) => {
    const { nome, cargo } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório!' });
    }
    if (!cargo) {
        return res.status(400).json({ mensagem: 'O cargo é obrigatório!' });
    }

    let novoConvidado = {
        id: id++,
        nome: nome,
        cargo: cargo
    };
    convidados.push(novoConvidado);


    return res.status(200).json({ mensagem: "Convidado adicionado á lista! " });
}
module.exports = adicionandoConvidado;