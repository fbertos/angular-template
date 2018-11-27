import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit, OnChanges {
  public current_class = '';

  public current_class_settings = '';

  public current_class_alerts = '';

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

  constructor(private session: SessionService) {}

  ngOnInit() {
  }

  public changeMenu(event: Event): void {
    if (this.current_class === '-collapsed') {
      this.current_class = '';
      this.eventSidebar.emit(new Date().getTime());
    }
    else {
      this.current_class = '-collapsed';
      this.eventSidebar.emit(new Date().getTime());
    }
  }

  public changeMenuSettings(event: Event): void {
    if (this.current_class_settings === '-visible') {
      this.current_class_settings = '';
    }
    else {
      this.current_class_settings = '-visible';
    }
  }

  public changeMenuAlerts(event: Event): void {
    if (this.current_class_alerts === '-visible') {
      this.current_class_alerts = '';
    }
    else {
      this.current_class_alerts = '-visible';
    }
  }

  public hideMenuAlerts(event: Event): void {
    this.current_class_alerts = '';
  }

  public showMenuAlerts(event: Event): void {
    this.current_class_alerts = '-visible';
  }

  public hideMenuSettings(event: Event): void {
    this.current_class_settings = '';
  }

  public showMenuSettings(event: Event): void {
    this.current_class_settings = '-visible';
  }

  public logout(event: Event) {
    this.session.logout();
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
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
  }
}
