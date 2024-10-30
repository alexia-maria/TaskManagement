import {Component, Input} from '@angular/core';
import {Task} from './task.model';
import {TasksService} from '../tasks.service';
import {DatePipe} from '@angular/common';
import {CardComponent} from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    DatePipe,
    CardComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  constructor(private tasksService: TasksService) {
  }
  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
