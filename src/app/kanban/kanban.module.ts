import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { MainKanbanComponent } from './main-kanban/main-kanban.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompletedComponent } from './completed/completed.component';
import { ToDoComponent } from './to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { KanbanService } from './services/kanban.service';




@NgModule({
  declarations: [
    TaskComponent,
    MainKanbanComponent,
    InProgressComponent,
    CompletedComponent,
    ToDoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainKanbanComponent
  ],
  providers:[
    KanbanService
  ]
})
export class KanbanModule { }
