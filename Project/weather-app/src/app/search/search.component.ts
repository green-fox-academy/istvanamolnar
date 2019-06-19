import { Component, OnInit} from '@angular/core';
import { GetWeatherInfoService } from '../services/getweatherinfo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputValue:string;

  constructor(private info: GetWeatherInfoService) { }

  ngOnInit() {
  }

  searchInput() {
    this.info.getInfo(this.inputValue);
    this.inputValue = '';
  }
}
