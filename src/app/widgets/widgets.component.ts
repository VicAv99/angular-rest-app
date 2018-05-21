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
    this.loadWidgets();
    this.reset();
  }

  loadWidgets() {
    this.widgetsService.loadWidgets()
      .subscribe(widgets => this.widgets = widgets)
  }

  selectWidget(widget) {
    this.currentWidget = widget;
  }

  reset() {
    this.currentWidget = { id: null, name: '', description: '' };
  }

  cancel(widget) {
    this.reset();
  }

  saveWidget(widget) {
    if (!widget.id) {
      this.createWidget(widget);
    } else {
      this.updateWidget(widget);
    }
  }

  createWidget(widget) {
    this.widgetsService.create(widget)
      .subscribe(result => {
        this.loadWidgets();
        this.reset();
      })
  }

  updateWidget(widget) {
    this.widgetsService.update(widget)
      .subscribe(result => {
        this.loadWidgets();
        this.reset();
      });
  }

  deleteWidget(widget) {
    this.widgetsService.delete(widget)
      .subscribe(result => {
        this.loadWidgets();
        this.reset();
      })
  }
}
