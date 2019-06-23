import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;
  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectedLog.subscribe(data => {
      if(data.id !== null) {
        this.id = data.id;
        this.text = data.text;
        this.date = data.date;
        this.isNew = false;
      }
    });
  }

  onSubmit() {
    if (this.isNew) {
      const newLog: Log = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      }
      this.logService.addLog(newLog);
    } else {
      const updatedLog: Log = {
        id: this.id,
        text: this.text,
        date: new Date()
      }
      this.logService.updateLog(updatedLog);
    }
    this.clearState();
  }

  clearState() {
    this.isNew = false;
    this.id = '';
    this.text = '';
    this.date = '';
    this.logService.clearState();
  }

  generateId() {
    let ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ID_LENGTH = 8;
    let rtn = '';
    for (let i = 0; i < ID_LENGTH; i++) {
      rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
  }

}
