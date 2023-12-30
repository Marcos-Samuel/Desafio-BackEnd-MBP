import { Request, Response } from 'express';
import { knex } from '../database/conect';
import { Resultado } from '../types/types';

export const ListResults = async (req: Request, res: Response) => {
 
        try {
            const { bimestre } = req.params;
    
         
            // Consulte o banco de dados para obter resultados do bimestre especificado (ou todos se nenhum bimestre fornecido)
            const query = bimestre ? { bimestre } : {};
            const resultados = await knex('resultado')
                .where(query)
                .select();
    
            return res.json(resultados);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
        }
    }
