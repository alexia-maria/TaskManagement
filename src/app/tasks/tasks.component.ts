import {Component, Input} from '@angular/core';
import {TasksService} from './tasks.service';
import {NewTaskComponent} from './new-task/new-task.component';
import {TaskComponent} from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    NewTaskComponent,
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {

  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTasks(){
    this.isAddingTask = true;
  }

  onCloseAddTaskParent(){
    this.isAddingTask = false;
  }

}
