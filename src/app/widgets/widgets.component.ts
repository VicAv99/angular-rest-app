import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[];
  currentWidget: Widget;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
    this.reset();
  }

  reset() {
    this.currentWidget = { id: null, name: '', description: '' };
  }

  selectWidget(widget) {
    this.currentWidget = widget;
  }

  deleteWidget(widget) {
    console.log('DELETE WIDGET', widget);
  }

  saveWidget(widget) {
    console.log('SAVING WIDGET', widget);
    this.reset();
  }

  cancel(widget) {
    this.reset();
  }
}
