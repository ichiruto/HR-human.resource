import { Registro } from '../models/registro.model';

export const REGISTROS_MOCK: Registro[] = [
  {
    nome: 'João Silva',
    email: 'joao.silva@example.com',
    celular: 12345678900,
    cpf: '111.222.333-44',
    conhecimentos: ['Git', 'NodeJS'],
    status: 'Não validado',
  },
  {
    nome: 'Maria Souza',
    email: 'maria.souza@example.com',
    celular: 12345678900,
    cpf: '222.333.444-55',
    conhecimentos: ['React', 'PHP', 'DevOps'],
    status: 'Não validado',
  },
  {
    nome: 'José Santos',
    email: 'jose.santos@example.com',
    celular: 12345678900,
    cpf: '333.444.555-66',
    conhecimentos: ['Banco de Dados', 'TypeScript'],
    status: 'Validado',
  },
  {
    nome: 'Ana Oliveira',
    email: 'ana.oliveira@example.com',
    celular: 12345678900,
    cpf: '444.555.666-77',
    conhecimentos: ['Git', 'DevOps'],
    status: 'Não validado',
  },
  {
    nome: 'Luiz Costa',
    email: 'luiz.costa@example.com',
    celular: 12345678900,
    cpf: '555.666.777-88',
    conhecimentos: ['NodeJS', 'DevOps'],
    status: 'Validado',
  },
  {
    nome: 'Carlos Eduardo',
    email: 'carlos.eduardo@example.com',
    celular: 12345678900,
    cpf: '555.642.767-89',
    conhecimentos: ['NodeJS', 'DevOps'],
    status: 'Validado',
  },
];
