import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordListComponent } from './recordseries/record-list/record-list.component';
import { SeriesByNameComponent } from './recordseries/series-by-name/series-by-name.component';
import {RecordSerieService} from './recordseries/record-serie.service';
import { SeriesChannelComponent } from './recordseries/series-channel/series-channel.component';
@NgModule({
  declarations: [
    AppComponent,
    RecordListComponent,
    SeriesByNameComponent,
    SeriesChannelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RecordSerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
