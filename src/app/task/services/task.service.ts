import { Injectable } from '@angular/core';
import { ToDo } from '../interfaces/ToDo.interface';

@Injectable()
export class TaskService {
  private _task: ToDo = {
    idTask: '',
    taskName: 'as',
    priority: '',
  };

  get task(): ToDo {
    return this._task;
  }

  set task(nt: ToDo) {
    this._task = nt;
  }

  private _tasklist: ToDo[] = [
    {
      idTask: '12',
      taskName: 'clean',
      priority: 'Medium',
    },
  ];

  get taks(): ToDo[] {
    return [...this._tasklist];
  }

  deleteTask() {
    this._tasklist = this._tasklist.filter((task) => task.idTask != this._task.idTask);
    this._task.idTask=""
  }

  addTak(nt: ToDo) {
    this._tasklist.push(nt);
  }

  editTAsk(){
    this.task = this._tasklist.filter((task) => task.idTask == this._task.idTask)[0];
  }


  updateTask() {
    console.log(this._tasklist.find((el) => el == this.task));

    this._tasklist.forEach((el) => {
      if (el.idTask == this._task.idTask) {
        el.priority = this._task.priority;
        el.taskName = this._task.taskName;
      }
    });
  }

  constructor() {
    console.log('inicio');
  }
}
