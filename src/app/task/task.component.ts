import { Component } from '@angular/core';
import { TaskInfo } from '../task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task: TaskInfo = {
    id: 1,
    name: 'Sketch out draft layout',
    status: 'In progress',
    priority: 'High'
  }
}
