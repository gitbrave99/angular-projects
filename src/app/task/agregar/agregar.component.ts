import { Component, Input } from '@angular/core';
import { ToDo } from '../interfaces/ToDo.interface';
import { v4 as uuidv4 } from 'uuid';  

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent {
  priorityList: string[] = ['Select One','Low', 'Medium', 'High', 'Urgent'];
  
  selectedTask:ToDo=this.taskService.task

  get task():ToDo{
    return this.taskService.task
  }

  set task(n:ToDo){
    this.taskService.task=n
  }

  constructor(private taskService: TaskService) {}
  
  addOrUpdateTask(): void {
     
    if (this.task.taskName =="" || this.task.priority==this.priorityList[0])return;
    // AGREGAR
    if (this.task.idTask ==""){
      this.task.idTask=uuidv4();
      this.taskService.addTak(this.task);
      this.task = {
        idTask:'',
        taskName: '',
        priority: this.priorityList[0]
      };
    }else{
    //   this.taskService.updateTask()
      this.task= new ToDo()
    //   console.log("no ay= ",this.taskService.task," final");
    }
    
    

  
    
  }

  update (et:ToDo){
    this.taskService.updateTask()
  }
}
