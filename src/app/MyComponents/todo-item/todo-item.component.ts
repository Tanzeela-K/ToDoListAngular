import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: ToDo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<ToDo> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  onClick(todo: ToDo) {
    this.todoDelete.emit(todo);
    console.log('On click has been triggered');
  }

  onCheckboxClick(todo: ToDo) {
    this.todoCheckbox.emit(todo);
  }
}
