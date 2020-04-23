import { Injectable } from '@angular/core';
import { FORM_INITIAL_STATE } from '../constants/INITIAL_STATE';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  key: string;
  title: string;
  date: string;
  category: string;
  isImportant: boolean;
  completed: boolean;
  isChecked: boolean;
  dataIndex: number;
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public sharedTasks: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(FORM_INITIAL_STATE.todos);
  tasks: Task[] = FORM_INITIAL_STATE.todos;

  initTasks(tasks) {
    this.tasks = tasks;
    this.sharedTasks.next(tasks);
  }

  addTask(task) {
    this.tasks.push(task);
    this.sharedTasks.next(this.tasks);
  }

  getAllTasks() {
    return this.tasks;
  }

  getTask(key) {
    return this.tasks.filter(x => x.key === key);
  }

  deleteTask(key) {
    this.tasks = this.tasks.filter(x => x.key !== key);
    this.sharedTasks.next(this.tasks);
  }

  deleteAllTasks() {
    this.tasks = [];
    this.sharedTasks.next([]);
    return this.tasks;
  }

  constructor() { }
}
