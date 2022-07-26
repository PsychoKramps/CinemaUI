import { Component, OnInit } from '@angular/core';
import { ComingSoon } from '../models/coming-soon';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  comingSoon : ComingSoon[] =[]

  constructor() { }

  ngOnInit(): void {
  }

}
