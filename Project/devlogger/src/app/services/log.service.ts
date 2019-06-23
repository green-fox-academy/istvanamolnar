import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  constructor() { 
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('06/23/2019 09:10:34')},
      {id: '2', text: 'HTML setup', date: new Date('06/23/2019 09:15:51')},
      {id: '3', text: 'Bootstrap added', date: new Date('06/23/2019 09:21:34')}
    ]
  }

  getLogs() {
    return this.logs;
  }
}
