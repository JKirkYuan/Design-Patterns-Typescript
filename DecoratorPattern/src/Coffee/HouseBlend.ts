import Beverage from '../Beverage';

class HouseBlend extends Beverage {
    constructor() {
        super("House Blend Coffee");
    }   

    cost(): number {
        return 0.89;
    }
}
