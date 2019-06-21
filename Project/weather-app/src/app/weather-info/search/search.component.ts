import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GetWeatherInfoService } from '../../services/getweatherinfo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  timer: any;
  inputValue:string;
  @Output() newInputCity: EventEmitter<string> = new EventEmitter();
  @Output() visible: EventEmitter<string> = new EventEmitter();

  constructor(private getWeatherInfo: GetWeatherInfoService) { }

  ngOnInit() {
  }

  searchInput() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
        this.newInputCity.emit(this.inputValue),
      this.inputValue = '';
    }, 2000);
  }
}
