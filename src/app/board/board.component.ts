import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { tasks } from '../create-task/data.model';
import { LogicService } from '../services/logic.service';
import { CreateTaskComponent } from "../create-task/create-task.component";


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavComponent, CreateTaskComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  description: string = ''; //task description

  nameTask: string = ''; //task nametask

  dates: Date[] | any; //date dates

  selectedTaskId: number = 0; //task selectedtaskId 

  progreso: tasks[] = [];  //list task
  tasks: tasks[] = []; //list task
  complete: tasks[] = []; //list task
 
  constructor(private LogicService: LogicService){
    this.progreso = LogicService.inProgressTasks; // list operation
    this.tasks = LogicService.task; // list operation
    this.complete = LogicService.completedTasks; // list operation
  }
}