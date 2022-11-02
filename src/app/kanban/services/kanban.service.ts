import { Injectable } from '@angular/core';
import { TaskKanBan } from '../interfaces/TaskKanBan.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  private _toDoList: TaskKanBan[] = [
    {
      idTask: uuidv4(),
      title: 'create api',
      description: 'api with python flask',
      priority: 'Low',
      status: 'Doing',
      created: new Date(),
    },
  ];
  private _inProgresList: TaskKanBan[] = [

  ];
  private _completedList: TaskKanBan[] = [];

  get ListTodo(): TaskKanBan[] {
    return [...this._toDoList];
  }
  get ListInProgress():TaskKanBan[]{
    return [...this._inProgresList]
  }

  get ListComplete():TaskKanBan[]{
    return [...this._completedList]
  }

  addTaskInOptionList(option:string,ntask:TaskKanBan){
    switch(option){
      case 'To do':
      this.addTaskInToDoList(ntask)
      break;
      case 'In progress':
      this.addTaskInProgressList(ntask)
      break;
      case 'Completed':
        console.log("complete add");

      this.addTaskInCompletedList(ntask)
      break;

    }
  }

  //ADD TASK TO TODO LIST
  addTaskInToDoList(ntask: TaskKanBan) {
    this._toDoList.push(ntask);
  }
  //ADD TASK IN PROGRESS LIST
  addTaskInProgressList(nTask: TaskKanBan) {
    this._inProgresList.push(nTask);
  }
  //ADD TASK IN COMPLETED LIST
  addTaskInCompletedList(nTask: TaskKanBan) {
    this._completedList.push(nTask);
  }

  //CHANGE FROM TODO LIST TO IN-PROGRESS LIST
  changeTaskFromTodoToInProgress(nTask: TaskKanBan){
    this.deleteTaskInToDoList(nTask)
    this.addTaskInProgressList(nTask)
    console.log(this._toDoList);
  }
  //DELETE TASK IN TODO lIST
  deleteTaskInToDoList(nTask:TaskKanBan){
    this._toDoList=this._toDoList.filter(el=>el.idTask !== nTask.idTask);
  }

  // CHANGE FROM IN-PROGRESS TO TODO
  changeTaskFromInProgressToTodo(nTask:TaskKanBan){
    this.deleteTaskInProgressList(nTask)
    this.addTaskInToDoList(nTask)
    console.log(this._toDoList);
  }
  //CHANGE TASK FROM IN-PROGRESS LIST TO COMPLETED LIST
  changeTaskFromInProgressToComplete(nTask:TaskKanBan){
    this.deleteTaskInProgressList(nTask)
    this.addTaskInCompletedList(nTask)
    console.log(this._toDoList);
  }

    //DELETE TASK IN-PROGRESS-LIST
    deleteTaskInProgressList(nTask:TaskKanBan){
      this._inProgresList=this._inProgresList.filter(task=>task.idTask!=nTask.idTask)
    }

  //CHANGE TASK FROM COMPLETED LIST TO IN PROGRESS LIST
  changeTaskFromCompleteToInProgress(nTask:TaskKanBan){
    this.deleteTaskInCompletedList(nTask)
    this.addTaskInProgressList(nTask)
  }
  //DELETE TASK IN COMPLETED LIST
  deleteTaskInCompletedList(nTask:TaskKanBan){
    this._completedList=this._completedList.filter(task=>task.idTask!=nTask.idTask)
  }


  constructor() {}
}
