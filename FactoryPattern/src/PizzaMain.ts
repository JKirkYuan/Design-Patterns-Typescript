import PizzaStore from './PizzaStore';
import ChicagoStyleCheesePizza from './ChicagoStyleCheesePizza';
import ChicagoPizzaStore from './ChicagoPizzaStore';
import Pizza from './Pizza';

let chicagoStore: PizzaStore;
chicagoStore = new ChicagoPizzaStore();

let pizza: Pizza;
pizza = chicagoStore.orderPizza("cheese");
console.log("Joe ordered a " + pizza.getName() + "\n");
