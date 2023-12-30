import { Request, Response } from 'express';
import { knex } from '../database/conect';
import { Resultado } from '../types/types';

export const ListResults = async (req: Request, res: Response) => {
 
    try {
        const { bimestre } = req.params;
    
        const query = bimestre ? { bimestre } : {};
        const resultados = await knex('resultado')
            .where(query)
            .select();
    
        return res.json(resultados);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' })
    };
};
