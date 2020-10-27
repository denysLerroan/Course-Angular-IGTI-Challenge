import { Component, OnInit } from '@angular/core';
import { Senators } from '../senators';
import { SenatorsService } from '../senators.service';

@Component({
  selector: 'app-senators-list',
  templateUrl: './senators-list.component.html',
  styleUrls: ['./senators-list.component.css'],
})
export class SenatorsListComponent implements OnInit {
  senators: Senators[] = [];

  constructor(private senatorsService: SenatorsService) {}

  ngOnInit(): void {
    this.senatorsService.listSenators().subscribe((senators) => {
      this.senators = senators;
    });
  }
}
