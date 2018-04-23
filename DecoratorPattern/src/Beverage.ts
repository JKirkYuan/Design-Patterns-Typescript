abstract class Beverage {

    public description: string;

    constructor(description: string) {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }

    abstract cost(): number;
}

export default Beverage;
