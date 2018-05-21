import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item.model';
import { Widget, WidgetsService } from '../shared';
import { Person } from '../shared/person.model';
import { PeopleService } from '../shared/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  items: Item[];
  widgets: Widget[];
  people: Person[];

  constructor(private itemsService: ItemsService,
              private widgetsService: WidgetsService,
              private peopleService: PeopleService) { }

  ngOnInit() {
    this.getItems();
    this.getWidgets();
    this.getPeople();
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }

  getWidgets() {
    this.widgetsService.loadWidgets()
      .subscribe(widgets => this.widgets = widgets);
  }

  getPeople() {
    this.peopleService.loadPeople()
      .subscribe(people => this.people = people);
  }

  handleResults(items) {
    this.items = items;
  }

  handlePeople(people) {
    this.people = people;
  }
}
