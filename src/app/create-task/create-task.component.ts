import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { LogicService } from '../services/logic.service';
import { tasks } from './data.model';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    FormsModule
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  visible: boolean = false;// variable to open the task creation field

  task: tasks[] = []; //array data

  description: string = ''; //task description

  nameTask: string = ''; //task nametask

  dates: Date[] | any; // dates

  //method to open the task creation screen
    showDialog() {
        this.visible = true;
    }
  //service
  constructor(private LogicService : LogicService,
  ){

  }

  
  //cinformation capture
  creates(evento: Event){
    evento.preventDefault();
    //information validation
    if(this.nameTask.trim() === '' || this.dates == null){
      console.log('debe ingresar una descripcion y un precio nuevo');
      return;
    }

    //upload information
    const create = new tasks ( this.nameTask, this.description , this.dates);
    this.LogicService.CreateTask(create);
    //clear the fields
    this.nameTask = '';
    this.description = '';
    this.dates = '';
  }

  close(){
    this.nameTask = '';
    this.description = '';
    this.dates = '';
  }


    
}
