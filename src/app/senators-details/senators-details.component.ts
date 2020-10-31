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
  expensesByType: { type: number; total: number }[] = [];

  constructor(
    private route: ActivatedRoute,
    private expensesService: SenatorsService
  ) {}

  ngOnInit(): void {}
}
