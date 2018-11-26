import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, OnChanges {
  public current_class = '';

  public current_class_settings = '';

  @Input()
  public picture : string;

  @Output() 
  eventSidebar = new EventEmitter;

  @Input() 
  public eventTopbar = 0;

  @Input()
  public fullName : string;

  @Input()
  public counter : number;

  constructor() { }

  ngOnInit() {
  }

  public changeMenu(event: Event): void {
    console.log('topbar changeMenu before ' + this.current_class);

    if (this.current_class === '-collapsed') {
      this.current_class = '';
      this.eventSidebar.emit(new Date().getTime());
    }
    else {
      this.current_class = '-collapsed';
      this.eventSidebar.emit(new Date().getTime());
    }

    console.log('topbar changeMenu after ' + this.current_class);
  }

  public changeMenuSettings(event: Event): void {
    console.log('topbar changeMenuSettings before ' + this.current_class_settings);

    if (this.current_class_settings === '-visible') {
      this.current_class_settings = '';
    }
    else {
      this.current_class_settings = '-visible';
    }

    console.log('topbar changeMenuSettings after ' + this.current_class_settings);
  }

  public hideMenuSettings(event: Event): void {
    console.log('topbar hideMenuSettings before ' + this.current_class_settings);

    this.current_class_settings = '';
 
    console.log('topbar hideMenuSettings after ' + this.current_class_settings);
  }

  public showMenuSettings(event: Event): void {
    console.log('topbar showMenuSettings before ' + this.current_class_settings);

    this.current_class_settings = '-visible';
 
    console.log('topbar showMenuSettings after ' + this.current_class_settings);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('topbar ngOnChanges before ' + this.current_class);

    for (let propName in changes) {
      if (propName === 'eventTopbar') {
        let evt = changes[propName];
        let value  = JSON.stringify(evt.currentValue);

        if (typeof value !== "undefined"){
          if (this.current_class === '-collapsed') {
            this.current_class = '';
          }
          else {
            this.current_class = '-collapsed';
          }
        }
      }
    }

    console.log('topbar ngOnChanges after ' + this.current_class);
  }
}
