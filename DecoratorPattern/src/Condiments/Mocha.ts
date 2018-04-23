import CondimentDecorator from '../CondimentDecorator';
import Beverage from '../Beverage';

class Mocha extends CondimentDecorator {
    public beverage: Beverage;

    constructor(beverage: Beverage) {
        super(beverage.getDescription());
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", with Mocha";
    }

    cost(): number {
        return 0.20 + this.beverage.cost();
    }
}

export default Mocha;
