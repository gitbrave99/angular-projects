import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../services/kanban.service';
import { TaskKanBan } from '../interfaces/TaskKanBan.interface';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private kanbanService:KanbanService) { }

  get listToDo():TaskKanBan[]{
    return this.kanbanService.ListTodo
  }

  ngOnInit(): void {
  }

  changeTodoInProgress(nTask:TaskKanBan){
    this.kanbanService.changeTaskFromTodoToInProgress(nTask)
  }

  deleteTaskTodo(nTask:TaskKanBan){
    this.kanbanService.deleteTaskInToDoList(nTask)
    console.log("delte");

  }

}
