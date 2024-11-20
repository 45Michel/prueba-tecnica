import { Component } from '@angular/core';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { tasks } from '../create-task/data.model';
import { LogicService } from '../services/logic.service';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CreateTaskComponent, 
    AccordionModule, 
    ButtonModule, 
    InputTextModule, 
    CalendarModule, 
    DialogModule, 
    FormsModule, 
    NavComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  visible: boolean = false; // variable to open the task creation field

  details: boolean = false; //variable for details screen

  visible3:boolean = false;
  
  description: string = ''; //task description

  nameTask: string = ''; //task nametask

  dates: Date[] | any; //task date

  selectedTaskId: number = 0; //id of teask

  // method for the update screen to show the task data
  showDialog(tasks: tasks) {
    this.visible = true;
    this.nameTask = tasks.nameTask; 
    this.description = tasks.description;  
    this.dates = '';
    this.selectedTaskId = tasks.id;  
  }
  // method for the details screen to display the task data
  Details(tasks: tasks) {
    this.details = true;
    this.nameTask = tasks.nameTask; 
    this.description = tasks.description;  
    this.dates = tasks.dates;
    this.selectedTaskId = tasks.id; 
  }

  showDialog3(tasks: tasks) {
    this.visible3 = true;
    this.nameTask = tasks.nameTask; 
    this.description = tasks.description;  
    this.dates = '';
    this.selectedTaskId = tasks.id;  
  }

  progreso: tasks[] = []; //list task progress
  tasks: tasks[] = []; //list task 
  complete: tasks[] = []; //list task completed

  constructor(private LogicService: LogicService){
    this.progreso = LogicService.inProgressTasks; // list operation
    this.tasks = LogicService.task; // list operation
    this.complete = LogicService.completedTasks; // list operation
  }

  // eliminate tasks depending on the case
  DeleteTask(task: tasks, isInProgress: boolean = false, isCompleted: boolean = false) {
    this.LogicService.deleteTask(task, isInProgress, isCompleted);
  }
  
  //for the accordion
  activeIndex: number = 0;

  activeIndexChange(index : number){
    this.activeIndex = index
  }

  //update the task and check fields
  updateTask(evento: Event) {
    evento.preventDefault();
    if(this.nameTask.trim() === '' || this.dates == null){
      console.log('debe ingresar una descripcion y un precio nuevo');
      return;
    }

    const updatedTask: tasks = new tasks(
      this.nameTask, 
      this.description, 
      this.dates  
    );
    updatedTask.id = this.selectedTaskId;
    this.LogicService.updateTask(updatedTask);
    this.visible = false;
  }

  //update the task and check fields
  updateProgress(evento: Event) {
    evento.preventDefault();
    if(this.nameTask.trim() === '' || this.dates == null){
      console.log('debe ingresar una descripcion y un precio nuevo');
      return;
    }

    const updatedprogress: tasks = new tasks(
      this.nameTask, 
      this.description, 
      this.dates  
    );
    updatedprogress.id = this.selectedTaskId;
    this.LogicService.updateProgress(updatedprogress);
    this.visible3 = false;
  }

  //method to change list
  Progress(task: tasks) {
    this.LogicService.Progress(task);
  }

  //method to change list
  Complete(task: tasks){
    this.LogicService.Completed(task);
  } 
}