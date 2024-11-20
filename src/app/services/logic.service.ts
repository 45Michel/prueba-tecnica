import { Injectable } from '@angular/core';
import { tasks } from '../create-task/data.model';

@Injectable({
  providedIn: 'root'
})
export class LogicService {
  //list tasks
  task : tasks[] = [];
  //list tasks
  inProgressTasks: tasks[] = [];
  //list taks
  completedTasks: tasks[] = [];


  //form information
  CreateTask(task : tasks){
    this.task.push(task);
  }

  //delete task depending on the case
  deleteTask(task: tasks, fromInProgress: boolean = false, fromCompleted: boolean = false): void {
    let targetList = this.task;
    if (fromInProgress) targetList = this.inProgressTasks;
    if (fromCompleted) targetList = this.completedTasks;

    const index = targetList.indexOf(task);
    if (index !== -1) {
      targetList.splice(index, 1); 
    }
  }

  //update task
  updateTask(updatedTask: tasks) {
    const index = this.task.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      // Replace with the new task
      this.task[index] = updatedTask;
    }
  }
  //update progress
  updateProgress(updatedProgress: tasks){
    const index = this.inProgressTasks.findIndex(progress => progress.id === updatedProgress.id);
    if(index !== -1){
      this.inProgressTasks[index]= updatedProgress;
    }
  }


   // Move a task from pending to progress
  Progress(task: tasks){
    this.inProgressTasks.push(task); 
    this.deleteTask(task, false); 
  }

  // Move a task from progress to completed
  Completed(task: tasks){
    this.completedTasks.push(task); 
    this.deleteTask(task,);
    this.deleteTask(task, true);
  }


  
}