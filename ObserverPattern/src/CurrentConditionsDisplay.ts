class CurrentConditionsDisplay implements DisplayElement, Observer {
    private temperature!: number;
    private humidity!: number;
    private weatherData!: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this. humidity = humidity;
        this.display();
    }

    display() {
        console.log("Current conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity");
    }
}

export default CurrentConditionsDisplay;
