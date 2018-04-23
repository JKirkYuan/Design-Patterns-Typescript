import Beverage from '../Beverage';
import DarkRoast from '../Coffee/DarkRoast';
import Mocha from '../Condiments/Mocha';
import Whip from '../Condiments/Whip';
import { expect } from 'chai';
import 'mocha';

describe('Dark Roast Description Test', () => {
  it('should return description of Dark Roast', () => {
    let beverage: Beverage;
    beverage = new DarkRoast();
    expect(beverage.getDescription()).to.equal('Dark Roast Coffee');
  });
});

describe('Dark Roast with Mocha and Whip', () => {
  it(' should return the value of the cost ', () => {
    let beverage: Beverage;
    beverage = new DarkRoast();
    beverage = new Mocha(beverage);
    beverage = new Whip(beverage);
    console.log("Beverage cost is: " + beverage.cost());
    expect(beverage.cost()).to.be.an('number').to.equal(1.29);
  });
});

describe('Dark Roast with Mocha and Whip', () => {
  it(' should return the right description ', () => {
    let beverage: Beverage;
    beverage = new DarkRoast();
    beverage = new Mocha(beverage);
    beverage = new Whip(beverage);
    console.log("Beverage name is: " + beverage.getDescription());
    expect(beverage.getDescription()).to.be.an('string').to.equal("Dark Roast Coffee, with Mocha, with Whip");
  });
});
