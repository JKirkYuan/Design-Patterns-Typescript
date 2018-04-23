import CondimentDecorator from '../CondimentDecorator';
import Beverage from '../Beverage';

class Whip extends CondimentDecorator {
    public beverage: Beverage;

    constructor(beverage: Beverage) {
        super(beverage.getDescription());
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", with Whip";
    }

    cost(): number {
        return this.beverage.cost() + 0.10;
    }
}

export default Whip;
