"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherData_1 = __importDefault(require("./WeatherData"));
var CurrentConditionsDisplay_1 = __importDefault(require("./CurrentConditionsDisplay"));
var weatherData = new WeatherData_1.default();
var currentDisplay = new CurrentConditionsDisplay_1.default(weatherData);
weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
