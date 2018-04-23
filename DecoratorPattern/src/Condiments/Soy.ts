import CondimentDecorator from '../CondimentDecorator';
import Beverage from '../Beverage';

class Soy extends CondimentDecorator {
    public beverage: Beverage;

    constructor(beverage: Beverage) {
        super(beverage.getDescription());
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", with Soy";
    }

    cost(): number {
        return 0.15 + this.beverage.cost();
    }
}

export default Soy;
