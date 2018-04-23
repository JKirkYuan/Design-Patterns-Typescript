import CurrentConditionsDisplay from '../CurrentConditionsDisplay';
import WeatherData from '../WeatherData';
import { expect } from 'chai';
import 'mocha';

describe('Weather Station Test', () => {
    it('should return temperature and humidity', () => {
        let weatherData = new WeatherData();
        let currentDisplay = new CurrentConditionsDisplay(weatherData);
        weatherData.setMeasurements(80, 65, 30.4);
        expect(weatherData.currentTemp).to.equal(80);
        expect(weatherData.currentHumidity).to.equal(65);
    });
  });
