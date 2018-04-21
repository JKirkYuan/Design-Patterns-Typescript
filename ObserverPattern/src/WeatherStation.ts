import WeatherData from './WeatherData';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';

let weatherData = new WeatherData();
let currentDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
