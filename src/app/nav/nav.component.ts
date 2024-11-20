import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    TabMenuModule, 
    CommonModule,
    InputSwitchModule,
    FormsModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  //nav variables
  items: MenuItem[] | undefined;
  //nav variables
  checked: boolean = true;
    //the routes
    ngOnInit() {
        this.items = [
            {   label: 'Task list', 
                icon: 'pi pi-list', 
                route: '/task/List' 
            },
            {
                label: 'Board',
                icon: 'pi pi-tablet',
                route: '/board'
               
            },
        ];
    }
}
