import { Component, OnInit } from '@angular/core';
import {RecordSerie} from '../record-serie';
import {RecordSerieService} from '../record-serie.service';

@Component({
  selector: 'app-series-by-name',
  templateUrl: './series-by-name.component.html',
  styleUrls: ['./series-by-name.component.css'],
  providers:[RecordSerieService]
})
export class SeriesByNameComponent implements OnInit {

  parameters:object = {name:"default"};


  constructor() { }

  ngOnInit() {
  }

  insertName()

}
