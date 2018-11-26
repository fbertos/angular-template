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
    console.log('sidebar expandMenu before ' + this.current_class);

    if (this.current_class === '') {
      this.current_class = '-expanded'; 
      this.eventTopbar.emit(new Date().getTime());
    }

    console.log('sidebar expandMenu before ' + this.current_class);
  }

  public collapseMenu(event: Event): void {
    console.log('sidebar collapseMenu before ' + this.current_class);

    if (this.current_class === '-expanded') {
      this.current_class = '';
      this.eventTopbar.emit(new Date().getTime());
    }

    console.log('sidebar collapseMenu after ' + this.current_class);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('sidebar ngOnChanges before ' + this.current_class);

    for (let propName in changes) {
      if (propName === 'eventSidebar') {
        let evt = changes[propName];
        let value  = JSON.stringify(evt.currentValue);

        if (typeof value !== "undefined") {
          if (this.current_class === '') {
            this.current_class = '-expanded';
          }
          else {
            this.current_class = '';
          }
        } 
      }
    }

    console.log('sidebar ngOnChanges after ' + this.current_class);
  }
}
