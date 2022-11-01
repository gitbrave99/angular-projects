import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../services/kanban.service';
import { TaskKanBan } from '../interfaces/TaskKanBan.interface';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit {

  constructor(private kanbanService:KanbanService) { }

  get listInprogress(){
    return this.kanbanService.ListInProgress
  }

  changeInProgressTodo(nTask:TaskKanBan){
    this.kanbanService.changeTaskFromInProgressToTodo(nTask)
  }
  changeInProgresComplete(nTask:TaskKanBan){
    this.kanbanService.changeTaskFromInProgressToComplete(nTask)
  }

  ngOnInit(): void {
  }

}
