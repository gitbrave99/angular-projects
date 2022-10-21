import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaintaskComponent } from './maintask/maintask.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListadoComponent } from './listado/listado.component';
import { TaskService } from './services/task.service';



@NgModule({
  declarations: [
    MaintaskComponent,
    ListadoComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MaintaskComponent
  ],
  providers:[
    TaskService
  ]
})
export class TaskModule { }
