import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  person = {
    name: 'Leonardo',
    bankAmount: Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(1000000),
    address: 'Calle 123',
  };
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
