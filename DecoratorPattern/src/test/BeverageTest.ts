import Beverage from '../Beverage';
import DarkRoast from '../Coffee/DarkRoast';
import { expect } from 'chai';
import 'mocha';

describe('Dark Roast Description Test', () => {
    it('should return description of Dark Roast', () => {
      let beverage: Beverage;
      beverage = new DarkRoast();
      expect(beverage.getDescription()).to.equal('Dark Roast Coffee');
    });
  });
