# Observer Pattern

So the textbook definition of the Observer Pattern is

**Observer Pattern**: defines a one-to-many dependecy between objects so that when one object changes state, all of its dependents are notified and updated automatically

The subject and observers define a one-to-many relationshp. Observers are dependent  on the subject such that when the subject's state changes, observers are notified. Here is the UML diagram of our program

![ObserverUML](ObserverUML.png)

In this program, the WeatherData object updates CurrentConditionsDisplay which results in a print statement that states the temperature and humidity upon receiving an update from the observer.

To run the program, first run the command to compile ts files to js files.
```
tsc
```

After compilation, the files should be found in the *build* folder

Run the main program with the command
```
node build/WeatherStation.js
```
