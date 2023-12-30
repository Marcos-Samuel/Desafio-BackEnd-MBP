import { Request, Response } from 'express';
import { knex } from '../database/conect';
import { Resultado } from '../types/types';

export const deleteResult = async (req:Request, res: Response) => {
    try {
        
        const { id } = req.params;

        if (!id || typeof id !== 'string') {
            return res.status(400).json({ mensagem: 'ID inválido fornecido.' });
        }

        const deletedCount = await knex<Resultado>('resultado').where({ id }).del();

        if (deletedCount === 0) {
            return res.status(404).json({ mensagem: 'Registro não encontrado.' });
        }

        return res.status(200).json({ mensagem: 'Registro deletado com sucesso.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};
