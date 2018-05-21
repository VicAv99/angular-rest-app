import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PeopleService } from '../../shared/people.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {
  @ViewChild('peopleSearch') peopleSearch;
  @Output() results = new EventEmitter;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    const search$ =
      Observable.fromEvent(this.getNativeElement(this.peopleSearch), 'keyup')
        .debounceTime(500)
        .distinctUntilChanged()
        .map((event: any) => event.target.value)
        .switchMap(query => this.peopleService.search(query))
        .subscribe(people => this.results.emit(people));
  }

  getNativeElement(element) {
    return element.nativeElement;
  }
}
