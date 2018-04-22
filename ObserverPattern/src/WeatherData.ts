class WeatherData implements Subject {
    private observers: Observer[]; // This is the array that contains our observers
    private temperature!: number;
    private humidity!: number;
    private pressure!: number;

    constructor() {
        this.observers = new Array();
    }

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    removeObserver(o: Observer) {
        let i: number = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i, 1);
        }
    }

    measurementsChanged() {
        this.notifyObservers();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number){
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    notifyObservers() {
        for (let i = 0; i<this.observers.length; i++){
            let observer: Observer = this.observers[i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }
}

export default WeatherData;
