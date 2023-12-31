"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerResults = void 0;
const conect_1 = require("../database/conect");
;
const registerResults = async (req, res) => {
    try {
        const body = req.body;
        if (!body) {
            return res.status(400).json({ mensagem: 'Corpo da requisição inválido.' });
        }
        const { bimestre, disciplina, nota } = body;
        await (0, conect_1.knex)('resultado').insert({
            bimestre,
            disciplina,
            nota,
        });
        return res.status(201).json({ mensagem: 'Cadastro realizado com sucesso.' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};
exports.registerResults = registerResults;
