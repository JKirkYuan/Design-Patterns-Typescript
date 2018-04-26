import Pizza from './Pizza';
class ChicagoStyleCheesePizza extends Pizza {
    constructor(){
        super();
        this.name = "Chicago Style Deep Dish Cheese Pizza";
        this.dough = "Extra Thick Crust Dough";
        this.sauce = "Plum Tomato Sauce";
        this.toppings = new Array();
		this.toppings.push("Shredded Mozzarella Cheese");
    }
    
    cut(): void {
        console.log("Cutting pizza into square slices");
    }
}

export default ChicagoStyleCheesePizza;
