import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/people.service';
import { Person } from '../shared/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  currentPerson: Person;
  people: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.people;
    this.reset();
  }

  selectPerson(person) {
    this.currentPerson = person;
  }

  deletePerson(person) {
    console.log('DELETING', person);
  }

  reset() {
    this.currentPerson = {id: null, firstName: '', nickName: '', lastName: '', jobTitle: ''};
  }

  savePerson(person) {
    console.log('SAVING', person);
  }

  cancel(person) {
    this.reset();
  }

}
