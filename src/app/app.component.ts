import { Component, OnInit } from '@angular/core';
// import { SwUpdate } from '@angular/service-worker';

import { EspService } from '../services/esp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(private espService: EspService) {
  }

  ngOnInit(): void {

  }

  PRENDER() {
    this.espService.ledOn();
  }

  APAGAR() {
    this.espService.ledOff();
  }
}
