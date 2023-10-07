const express = require('express');
const listaDeConvidados = require('./controladores/listarConvidados');
const checkInConvidados = require('./controladores/checkIn');
const adicionandoConvidado = require('./controladores/adicionarConvidado');
const listaDeConfirmados = require('./controladores/listaConfirmada');
const excluirConvidado = require('./controladores/excluirConvidado');

const rotas = express();


rotas.get('/convidados', listaDeConvidados);
rotas.get('/convidados/:id', checkInConvidados);
rotas.post('/convidados', adicionandoConvidado);
rotas.get('/confirmados', listaDeConfirmados);
rotas.delete('/convidados/:id', excluirConvidado);


module.exports = rotas;
