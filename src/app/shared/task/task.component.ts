import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../core/models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task:Task = {id: 0, title:'', description:'', isCompleted: false};
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();
}
