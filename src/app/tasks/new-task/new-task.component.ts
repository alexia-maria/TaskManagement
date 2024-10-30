import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type NewTaskData} from "../task/task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = ''; // nu o marcam ca input sau output pentru ca o folosim doar in interiorul acestei componente + in template-ul ei
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService); // alta varianta de dependency injection, echivalenta cu prima ca rezultat si functionalitate
  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );

    this.close.emit();
  }
}
