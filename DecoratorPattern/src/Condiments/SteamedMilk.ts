import CondimentDecorator from '../CondimentDecorator';
import Beverage from '../Beverage';

class SteamedMilk extends CondimentDecorator {
    public beverage: Beverage;

    constructor(beverage: Beverage) {
        super(beverage.getDescription());
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", with Steamed Milk";
    }

    cost(): number {
        return 0.10 + this.beverage.cost();
    }
}

export default SteamedMilk;
