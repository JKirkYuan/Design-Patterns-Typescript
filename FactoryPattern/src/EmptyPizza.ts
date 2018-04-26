import Pizza from './Pizza';
class EmptyPizza extends Pizza {
    constructor() {
        super();
        this.name = "EMPTY PIZZA";
        this.dough = "NO DOUGH";
		this.sauce = "NO SAUCE";
    }
}

export default EmptyPizza;
