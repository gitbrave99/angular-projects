import { Component, OnInit } from '@angular/core';
import { TaskKanBan } from '../interfaces/TaskKanBan.interface';
import { KanbanService } from '../services/kanban.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-main-kanban',
  templateUrl: './main-kanban.component.html',
  styleUrls: ['./main-kanban.component.css'],
})
export class MainKanbanComponent implements OnInit {
  priorityLevel: string[] = ['Low', 'Medium', 'Critical'];
  statusLevel: string[] = ['To do', 'In progress', 'Completed'];

  ntask: TaskKanBan = {
    idTask: '',
    title: '',
    description: '',
    priority: '',
    status: '',
    created: new Date(),
  };
  constructor(private kanbanService: KanbanService) {}

  ngOnInit(): void {}


  addTaskKanBan() {
    if (this.ntask.title == '' || this.ntask.description == '') {
      return;
    }

    this.ntask.idTask = uuidv4();
    this.ntask.title=this.ntask.title.toUpperCase();
    this.ntask.description= this.ntask.description.charAt(0).toUpperCase() + this.ntask.description.substring(1);
    
    this.kanbanService.addTaskInToDoList(this.ntask);

    this.ntask = {
      idTask: '',
      title: '',
      description: '',
      priority: '',
      status: '',
      created: new Date(),
    };
  }
}
