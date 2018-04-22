 /* implemented by all observers, all have to implement the update() method */
interface Observer {
    update(temp: number, humidity: number, pressure: number): void; //state values the Observer gets from the Subject when a weather measurement changes
}
