# Factory Method Pattern

All factory patterns encapsulate object creation. The Factory Method Pattern encapsulates object creation by letting subclasses decide what objects to create.

The textbook definition of the Factory Method Pattern is

**Factory Method Pattern**: defines an interface for creating an object, but lets subclasses *decide* which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

*decides* is because the creator class is written without knowledge of the actual products that will be created, which is decided purely by the choice of the subclass that is used

## Build & Run Instructions

To build the program, go inside the ObserverPattern directory.

Install dependencies

```
yarn install
```

Build typescript

```
yarn run build
```

Run command to start

```
yarn run start
```
