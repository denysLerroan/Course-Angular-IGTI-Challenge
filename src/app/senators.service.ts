import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SenatorExpenses } from './expenses';
import { Senators } from './senators';

const urlBase = 'http://localhost:3000';

export const types = {
  1: 'Aluguel de imóveis e despesas concernentes a eles',
  2: 'Divulgação de atividade parlamentar',
  3: 'Aquisição de material de consumo para uso no escritório',
  4: 'Passagens aéreas, aquáticas e terrestres nacionais',
  5: 'Contratação de consultorias, acessorias, pesquisas, trabalhos técnicos e outros serviços',
  6: 'Locomoção, gospedagem, alimentação e combustíveis',
  7: 'Serviços de Segurança Privada',
};

@Injectable({
  providedIn: 'root',
})
export class SenatorsService {
  constructor(private http: HttpClient) {}

  listSenators() {
    return this.http.get<Senators[]>(`${urlBase}/senadores`);
  }

  retrieveSenatorExpenses(id: number) {
    return this.http.get<SenatorExpenses>(`${urlBase}/despesasSenadores/${id}`);
  }
}
