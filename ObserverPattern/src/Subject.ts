interface Subject {
    registerObserver(o: Observer): void; //takes in the observer to be registered
    removeObserver(o: Observer): void; //takes in the observer to be removed
    notifyObservers(): void; // notifies all observer's when the subject changes
}
