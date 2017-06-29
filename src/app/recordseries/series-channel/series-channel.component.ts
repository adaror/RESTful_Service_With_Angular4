import { Component, OnInit } from '@angular/core';
import {RecordSerie} from '../record-serie';
import {RecordSerieService} from '../record-serie.service';

@Component({
  selector: 'app-series-channel',
  templateUrl: './series-channel.component.html',
  styleUrls: ['./series-channel.component.css']
})
export class SeriesChannelComponent implements OnInit {

  parameters:object = {"channel":13,"category":"action"};
  recordSeries:RecordSerie[];
  constructor(private recordSeriesService:RecordSerieService) { }

  ngOnInit() {
    this.recordSeriesService.findSeriesByChannel(this.parameters)
      .then((recordSeries:RecordSerie[])=>{
        this.recordSeries = recordSeries.map((recordSerie)=>{
          return recordSerie;
        });
      });
  }


}
