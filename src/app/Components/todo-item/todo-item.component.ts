import { todo } from './../../Todo';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: todo = new todo();
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter<todo>();
  @Output() todoCheckbox: EventEmitter<todo> = new EventEmitter<todo>();

  constructor() {}

  ngOnInit(): void {}

  onClick(todo: todo) {
    this.todoDelete.emit(todo);
    console.log('onClick - active');
  }
  onCheckboxClick(todo: todo) {
    this.todoCheckbox.emit(todo);
  }
}
