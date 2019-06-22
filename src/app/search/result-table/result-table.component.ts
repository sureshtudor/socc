import { Component, OnInit } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import { SortableHeader, SortEvent, compare } from './sortable-header.directive';

@Component({
  selector: 'result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  results: SearchResponse[];

  constructor() { }

  ngOnInit() {
    this.results = [
      {
        id: 1,
        invitationId: 12345678901,
        referenceId: 'REF12345',
        loanNumber: 686543609,
        firstName: 'Suresh',
        lastName: 'Tudor',
        dob: '01/01/2001',
        street: 'Some Street',
        city: 'San Diego',
        state: 'CA',
        zipcode: 92126,
        phone: '(858) 123 4567',
        date: '06/18/2019',
        appOrPrescreen: 'Application',
        brand: 'MUFG'
      },
      {
        id: 2,
        invitationId: 26478263840,
        referenceId: 'REF3974579',
        loanNumber: 42145631243,
        firstName: 'Rahul',
        lastName: 'Bedi',
        dob: '01/01/2001',
        street: 'Some Street',
        city: 'San Diego',
        state: 'CA',
        zipcode: 92126,
        phone: '(858) 123 4567',
        date: '06/18/2019',
        appOrPrescreen: 'Prescreen',
        brand: 'MUFG'
      }
    ];
  }
  @ViewChildren(SortableHeader) headers: QueryList<SortableHeader>;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    // sorting
    if (direction != '') {
      this.results = this.results.sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}
