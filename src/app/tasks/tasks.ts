import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTask} from './new-task/new-task';
import {type NewTaskData} from './task/task.model';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) id!: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService){}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
