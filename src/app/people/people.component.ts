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
    this.getAllPeople();
    this.reset();
  }

  getAllPeople() {
    this.peopleService.loadPeople()
      .subscribe(people => this.people = people);
  }

  selectPerson(person) {
    this.currentPerson = person;
  }

  reset() {
    this.currentPerson = {id: null, firstName: '', nickName: '', lastName: '', jobTitle: ''};
  }

  cancel(person) {
    this.reset();
  }

  savePerson(person) {
    if (!person.id) {
      this.createPerson(person);
    } else {
      this.updatePerson(person);
    }
  }

  createPerson(person) {
    this.peopleService.create(person)
      .subscribe(result => {
        this.getAllPeople();
        this.reset();
      })
  }

  updatePerson(person) {
    this.peopleService.update(person)
      .subscribe(result => {
        this.getAllPeople();
        this.reset();
      })
  }

  deletePerson(person) {
    this.peopleService.delete(person)
      .subscribe(result => {
        this.getAllPeople();
        this.reset();
      })
  }
}
