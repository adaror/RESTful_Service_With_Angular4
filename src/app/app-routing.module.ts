/**
 * Created by Or Adar on 6/15/2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {RecordListComponent} from './recordseries/record-list/record-list.component';
import {SeriesByNameComponent} from './recordseries/series-by-name/series-by-name.component';
import {SeriesChannelComponent} from './recordseries/series-channel/series-channel.component';
const appRoutes: Routes = [
  {path:'',redirectTo: '/record-list', pathMatch:'full'},
  {path:'record-list',component:RecordListComponent},
  {path:'series-by-name',component:SeriesByNameComponent},
  {path:'series-by-channel',component:SeriesChannelComponent}
];

@NgModule({
  imports :[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
