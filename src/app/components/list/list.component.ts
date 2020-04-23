import { Component, OnInit } from '@angular/core';
import { TodoService, Task } from '../../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  size = 'small';
  tasks: Task[];

  deleteTask(key) {
    this.todoService.deleteTask(key);
  }

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.sharedTasks.subscribe(value => {
      this.tasks = value;
    });
  }
}
