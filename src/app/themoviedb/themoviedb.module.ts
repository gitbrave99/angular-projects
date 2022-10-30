import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesMnComponent } from './movies-mn/movies-mn.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsComponent } from './results/results.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({  
  declarations: [
    MoviesMnComponent,
    SearchBarComponent,
    ResultsComponent,
  ],
  exports:[
    MoviesMnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class ThemoviedbModule { }
