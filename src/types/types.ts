
export enum Bimestre {
  PRIMEIRO = 'PRIMEIRO',
  SEGUNDO = 'SEGUNDO',
  TERCEIRO = 'TERCEIRO',
  QUARTO = 'QUARTO',
};


export enum Disciplina {
  BIOLOGIA = 'Biologia',
  ARTES = 'Artes',
  GEOGRAFIA = 'Geografia',
  SOCIOLOGIA = 'Sociologia',
};


export type Resultado = {
  id: string;
  bimestre: Bimestre;
  disciplina: Disciplina;
  nota: number;
  criadoEm: Date;
  atualizadoem: Date;
};



