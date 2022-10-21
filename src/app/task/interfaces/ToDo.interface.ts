// export interface ToDo{
//     idTask:string;
//     taskName:string;
//     priority:string;
// }

export class ToDo{
    idTask!: string;
    taskName!:string;
    priority!:string;
}

export interface PriorityLevel{
    id:number;
    level:string;
}