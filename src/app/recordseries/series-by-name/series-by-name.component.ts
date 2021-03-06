import { Component, OnInit } from '@angular/core';
import {RecordSerie} from '../record-serie';
import {RecordSerieService} from '../record-serie.service';

@Component({
  selector: 'app-series-by-name',
  templateUrl: './series-by-name.component.html',
  styleUrls: ['./series-by-name.component.css'],
})
export class SeriesByNameComponent implements OnInit {

  parameters:object = {"name":"lost"};
  recordSeries:RecordSerie[];
  constructor(private recordSeriesService:RecordSerieService) { }

  ngOnInit() {
    this.recordSeriesService.findSeriesByName(this.parameters)
      .then((recordSeries:RecordSerie[])=>{
        this.recordSeries = recordSeries.map((recordSerie)=>{
          return recordSerie;
        });
      });
  }

}
