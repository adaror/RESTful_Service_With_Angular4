import { Injectable } from '@angular/core';
import {RecordSerie} from '../recordseries/record-serie';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecordSerieService {

  private recordUrl:string = 'https://vodrecords.herokuapp.com/';
  constructor(private http:Http) { }

  showAllRecord():Promise<RecordSerie[]>{
      return this.http.get(this.recordUrl+'showAllRecords')
                      .toPromise()
                      .then(response => response.json() as RecordSerie[])
                      .catch(this.handleError);
  }

  findSeriesByName(param:object):Promise<RecordSerie[]>{
      return this.http.post(this.recordUrl+'findSeriesByName',param)
                            .toPromise()
                            .then(response => response.json() as RecordSerie[])
                            .catch(this.handleError)
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
