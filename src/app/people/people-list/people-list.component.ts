import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../shared/person.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  @Input() people: Person[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
