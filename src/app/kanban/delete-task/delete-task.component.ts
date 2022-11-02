import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskKanBan } from '../interfaces/TaskKanBan.interface';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  @Input() task!: TaskKanBan;
  @Output() onClickDeleteChange: EventEmitter<TaskKanBan> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteTaskModal(){
    this.onClickDeleteChange.emit(this.task)
  }

}
