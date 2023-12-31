"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteResult = void 0;
const conect_1 = require("../database/conect");
const deleteResult = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || typeof id !== 'string') {
            return res.status(400).json({ mensagem: 'ID inválido fornecido.' });
        }
        const deletedCount = await (0, conect_1.knex)('resultado').where({ id }).del();
        if (deletedCount === 0) {
            return res.status(404).json({ mensagem: 'Registro não encontrado.' });
        }
        return res.status(200).json({ mensagem: 'Registro deletado com sucesso.' });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};
exports.deleteResult = deleteResult;
