import Beverage from './Beverage';
import DarkRoast from './Coffee/DarkRoast';
import Whip from './Condiments/Whip'

let beverage: Beverage;
beverage = new DarkRoast();
console.log(beverage.getDescription());
beverage = new Whip(beverage);
console.log(beverage.getDescription());
