export interface Registro {
  nome: string;
  email: string;
  celular: number;
  cpf: string;
  conhecimentos: string[];
  status: 'Não validado' | 'Validado';
  // status: string;
}
