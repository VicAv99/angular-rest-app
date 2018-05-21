import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '../../shared/person.model';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent {
  originalPerson: string;
  selectedPerson: Person;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set person(value: Person) {
    if (value) {
      this.originalPerson = value.firstName;
    }
    this.selectedPerson = Object.assign({}, value);
  }

}
