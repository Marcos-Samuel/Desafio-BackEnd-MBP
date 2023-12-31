"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListResults = void 0;
const conect_1 = require("../database/conect");
const ListResults = async (req, res) => {
    try {
        const { bimestre } = req.params;
        const query = bimestre ? { bimestre } : {};
        const resultados = await (0, conect_1.knex)('resultado')
            .where(query)
            .select();
        return res.json(resultados);
    }
    catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
    ;
};
exports.ListResults = ListResults;
