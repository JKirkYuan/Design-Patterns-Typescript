import Beverage from '../Beverage';

class Espresso extends Beverage {
    constructor() {
        super("Espresso");
    }   

    cost(): number {
        return 1.99;
    }
}
