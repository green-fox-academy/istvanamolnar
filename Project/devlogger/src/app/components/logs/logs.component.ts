import { Component, OnInit } from '@angular/core';

import { Log } from '../../models/Log';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: Log[];
  selectedLog: Log;
  loaded: boolean = false;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedLog = {id: '', text: '', date: ''}
      }
    });

    this.logService.getLogs().subscribe(data => {
      this.logs = data;
      this.loaded = true;
    });
  }

  onSelect(log: Log) {
    this.logService.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Log) {
    this.logService.deleteLog(log);
  }

}
