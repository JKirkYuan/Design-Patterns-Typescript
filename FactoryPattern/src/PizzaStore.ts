import Pizza from './Pizza';

abstract class PizzaStore {
    abstract createPizza(item: string): Pizza;

    public orderPizza(type: string): Pizza {
        let pizza: Pizza;
        pizza = this.createPizza(type);
        console.log("Making a " + pizza.getName());
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}

export default PizzaStore;
