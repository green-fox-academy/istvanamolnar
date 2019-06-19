export class City {
  temperature: string;
  city: string;
  icon: string;
  country: string;

  constructor (temperature: string, city: string, icon: string, country: string) {
    this.temperature = temperature;
    this.city = city;
    this.icon = icon;
    this.country = country;
  }
}