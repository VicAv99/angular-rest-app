import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {
  people = [
    { id: 1, firstName: 'Victor', nickName: 'SlickVic', lastName: 'Avila', jobTitle: 'Developer' },
    { id: 2, firstName: 'Christopher', nickName: 'Bropher', lastName: 'Take', jobTitle: 'Developer' },
    { id: 3, firstName: 'Micah', nickName: 'Big Mike', lastName: 'Torres', jobTitle: 'Developer' },
    { id: 4, firstName: 'Jonathan', nickName: 'Garv', lastName: 'Garvey', jobTitle: 'Lead Engineer' },
    { id: 5, firstName: 'Joshua', nickName: 'Josh', lastName: 'Jones', jobTitle: 'Developer' },
    { id: 6, firstName: 'Josh', nickName: 'Yoshi', lastName: 'de Gouveia', jobTitle: 'Developer' },
    { id: 6, firstName: 'Blaise', nickName: 'Big B', lastName: 'Tshiamala', jobTitle: 'Developer' },
  ];

}
