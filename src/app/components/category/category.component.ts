import { Component, OnInit, Input } from '@angular/core';
import { categories } from '../../constants/categories';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = categories;
  optionList = categories;
  selectedValue = categories[0];

  @Input() group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
