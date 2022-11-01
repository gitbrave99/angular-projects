import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskKanBan } from '../interfaces/TaskKanBan.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  @Input() task!: TaskKanBan;
  @Output() onClickRightChange: EventEmitter<TaskKanBan> = new EventEmitter();
  @Output() onClickLeftChange: EventEmitter<TaskKanBan> = new EventEmitter();
  @Output() onClickDeleteChange: EventEmitter<TaskKanBan> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  deleteTask() {
    this.onClickDeleteChange.emit(this.task);
  }

  moveRightTask() {
    this.onClickRightChange.emit(this.task);
  }

  moveLeftTask() {
    this.onClickLeftChange.emit(this.task);
  }

  getColorPriority(priority: string) {
    switch (priority) {
      case 'Low':
        priority = 'bg-success';
        break;
      case 'Medium':
        priority = 'bg-primary';
        break;
      case 'Critical':
        priority = 'bg-danger';
        break;
    }
    return priority;
  }
}
