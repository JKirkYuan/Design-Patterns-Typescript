import PizzaStore from './PizzaStore';
import Pizza from './Pizza';
import ChicagoStyleCheesePizza from './ChicagoStyleCheesePizza';
import EmptyPizza from './EmptyPizza';

class ChicagoPizzaStore extends PizzaStore {
    createPizza(item: string): Pizza {
        if(item === 'cheese') {
            return new ChicagoStyleCheesePizza();
        }
        else {
            return new EmptyPizza();
        }
    }
}

export default ChicagoPizzaStore;
