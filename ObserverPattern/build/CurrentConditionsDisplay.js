"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("Current conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity");
    };
    return CurrentConditionsDisplay;
}());
exports.default = CurrentConditionsDisplay;
