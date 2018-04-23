import Beverage from './Beverage';
import DarkRoast from './Coffee/DarkRoast';
import Whip from './Condiments/Whip';
import Mocha from './Condiments/Mocha';

let beverage: Beverage;
beverage = new DarkRoast();
console.log(beverage.getDescription());
beverage = new Mocha(beverage);
console.log(beverage.getDescription());
beverage = new Whip(beverage);
console.log(beverage.getDescription() + " " + beverage.cost());
