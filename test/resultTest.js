// test/combinationTest.js

import { expect } from 'chai';
import App from '../src/App';

const inst = new App();

describe('Correct results', () => {
  it('should return 73682 combinations to make £2', () => {
    const expectedResult = 73682;

    expect(inst.run()).to.equal(expectedResult);
  });
});
