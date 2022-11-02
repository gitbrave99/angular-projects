import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../services/kanban.service';
import { TaskKanBan } from '../interfaces/TaskKanBan.interface';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(private kanbanService:KanbanService) { }

  get listCompleted():TaskKanBan[]{
    return this.kanbanService.ListComplete
  }

  changeTaskFromCompletedToInProgress(nTask:TaskKanBan):void{
    this.kanbanService.changeTaskFromCompleteToInProgress(nTask);
  }
  
  deleteTask(nTask:TaskKanBan){
    this.kanbanService.deleteTaskInCompletedList(nTask)
  }

  ngOnInit(): void {
  }

}
