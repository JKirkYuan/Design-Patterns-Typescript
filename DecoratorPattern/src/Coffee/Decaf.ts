import Beverage from '../Beverage';

class Decaf extends Beverage {
    constructor() {
        super("Decaf coffee");
    }   

    cost(): number {
        return 1.05;
    }
}
