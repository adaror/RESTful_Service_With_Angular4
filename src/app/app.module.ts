import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecordListComponent } from './recordseries/record-list/record-list.component';
import { SeriesByNameComponent } from './recordseries/series-by-name/series-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordListComponent,
    SeriesByNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
