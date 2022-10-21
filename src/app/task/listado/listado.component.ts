import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ToDo } from '../interfaces/ToDo.interface';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  get list(): ToDo[] {
    return this.taskService.taks;
  }

  selectToEdit(id: string) {
    this.taskService.task.idTask=id
    console.log("dit");
    
    this.taskService.editTAsk()
  }
  selectToDelete(id: string){
    this.taskService.task.idTask=id
  }

  deleteTask(id: string) {
    if (confirm("desea eliminar")){
      this.taskService.task.idTask=id
      this.taskService.deleteTask();
    }
  }

  constructor(private taskService: TaskService) {}
}
