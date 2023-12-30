import { Request, Response } from 'express';
import { knex } from '../database/conect';
import { Resultado, Bimestre, Disciplina } from '../types/types';

interface RegistroRequest {
    bimestre: Bimestre;
    disciplina: Disciplina;
    nota: number;
}

export const registerResults = async (req: Request, res: Response) => {

    try {
        const body = req.body as RegistroRequest;

        if (!body) {
            return res.status(400).json({ mensagem: 'Corpo da requisição inválido.' });
        }

        const { bimestre, disciplina, nota } = body;


        await knex<Resultado>('resultado').insert({
            bimestre,
            disciplina,
            nota,
        });

        return res.status(201).json({ mensagem: 'Cadastro realizado com sucesso.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
};
