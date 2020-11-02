import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expenses } from '../expenses';
import { SenatorsService } from '../senators.service';

@Component({
  selector: 'app-senators-details',
  templateUrl: './senators-details.component.html',
  styleUrls: ['./senators-details.component.css'],
})
export class SenatorsDetailsComponent implements OnInit {
  senatorsName: string = '';
  expenses: Expenses[] = [];
  expensesByType: { tipo: number; total: number }[] = [];

  constructor(
    private route: ActivatedRoute,
    private expensesService: SenatorsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = parseInt(paramMap.get('id'));
      this.expensesService
        .retrieveSenatorExpenses(id)
        .subscribe((senatorExpenses) => {
          this.senatorsName = senatorExpenses.name;
          this.expenses = senatorExpenses.despesas;
          this.expensesByType = expensesByTypeCalculation(this.expenses);
        });
    });
  }
  calculaTotal(): number {
    return this.expensesByType.reduce((total, item) => total + item.total, 0);
  }
}

function expensesByTypeCalculation(despesas: Expenses[]) {
  let result: { tipo: number; total: number }[] = [];
  for (let i = 1; i <= 7; i++) {
    const valorTotal = despesas
      .filter((d) => d.tipo === i)
      .reduce((total, despesa) => total + despesa.valor, 0);
    result[i - 1] = { tipo: i, total: valorTotal };
  }
  return result;
}
