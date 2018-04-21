"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = new Array();
    }
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        var i = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i, 1);
        }
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    WeatherData.prototype.notifyObservers = function () {
        for (var i = 0; i < this.observers.length; i++) {
            var observer = this.observers[i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    return WeatherData;
}());
exports.default = WeatherData;
