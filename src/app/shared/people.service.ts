import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Person } from './person.model';

const BASE_URL = 'http://localhost:3000/people/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};

@Injectable()
export class PeopleService {
  constructor(private http: Http) { }

  loadPeople() {
    return this.http.get(`${BASE_URL}`)
      .map(res => res.json());
  }

  loadPerson(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .map(res => res.json());
  }

  create(person: Person) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(person), HEADER)
    .map(res => res.json());
  }

  update(person: Person) {
    return this.http.patch(`${BASE_URL}${person.id}`, JSON.stringify(person), HEADER)
      .map(res => res.json());
  }

  delete(person: Person) {
    return this.http.delete(`${BASE_URL}${person.id}`)
      .map(res => res.json());
  }

}
