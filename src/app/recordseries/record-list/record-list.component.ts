import { Component, OnInit } from '@angular/core';
import {RecordSerie} from '../record-serie';
import {RecordSerieService} from '../record-serie.service';


@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css'],
  providers:[RecordSerieService]
})
export class RecordListComponent implements OnInit {

  recordSeries:RecordSerie[];
  parameters:object = {"name":"default","value":"default"};
  constructor(private recordSeriesService:RecordSerieService) { }

  ngOnInit() {
    this.recordSeriesService.showAllRecord()
                            .then((recordSeries:RecordSerie[])=>{
                              this.recordSeries = recordSeries.map((recordSerie)=>{
                                return recordSerie;
                              });
                            });
  }





}
