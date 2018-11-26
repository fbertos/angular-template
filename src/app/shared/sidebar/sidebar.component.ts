import { Component, OnInit, Input, OnChanges, Output, SimpleChange, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input()
  public title : string;

  @Input()
  public logo : string;

  private mode_static = false;

  public current_class = '';

  @Input()
  public options = [];

  @Input() 
  public eventSidebar = 0;

  @Output() 
  eventTopbar = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  public expandMenu(event: Event): void {
    if (!this.mode_static) {
      if (this.current_class === '') {
        this.current_class = '-expanded'; 
      }
    }
  }

  public collapseMenu(event: Event): void {
    if (!this.mode_static) {
      if (this.current_class === '-expanded') {
        this.current_class = '';
        //this.eventTopbar.emit(new Date().getTime());
      }
    }
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      if (propName === 'eventSidebar') {
        let evt = changes[propName];
        let value  = JSON.stringify(evt.currentValue);

        if (typeof value !== "undefined") {
          if (this.current_class === '') {
            this.current_class = '-expanded';
            this.mode_static = true;
          }
          else {
            this.current_class = '';
            this.mode_static = false;
          }
        } 
      }
    }
  }
}
