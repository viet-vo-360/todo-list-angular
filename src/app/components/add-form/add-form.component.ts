import { Component, OnInit } from '@angular/core';
import { TodoService, Task } from '../../services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  validateForm: FormGroup;
  dateFormat = "DD/MM/YYYY";

  addTask() {
    const task: Task = {
      key: uuidv4(),
      title: this.validateForm.get('title').value,
      date: moment(this.validateForm.get('calendar').value).format(this.dateFormat),
      category: this.validateForm.get('category').value,
      isImportant: this.validateForm.get('isImportant').value,
      completed: false,
      isChecked: false,
      dataIndex: 0
    };

    this.todoService.addTask(task);
  }

  constructor(
    private todoService: TodoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      calendar: [null, [Validators.required]],
      category: [null, [Validators.required]],
      isImportant: [null, [Validators.required]]
    });
  }

}
