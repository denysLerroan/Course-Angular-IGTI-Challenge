export interface Expenses {
  tipo: number;
  fornec: string;
  ano: number;
  mes: number;
  dia: number;
  valor: number;
}

export interface SenatorExpenses {
  id: number;
  name: string;
  despesas: Expenses[];
}
