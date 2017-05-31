// test/combinationTest.js

import { expect } from 'chai';
import App from '../src/App';

const inst = new App();

describe('Valid combination (1x£1, 1x50p, 2x20p, 1x5p, 1x2p, 3x1p)', () => {
  it('should add up to £2(200p)', () => {
    const input = [0, 1, 1, 2, 0, 1, 1, 3];
    const target = 200;
    const expectedResult = 0;

    expect(inst.testCombination(input, target)).to.equal(expectedResult);
  });
});

describe('Invalid combination (high)', () => {
  it('should exceed £2(200p) by 1', () => {
    const input = [1, 0, 0, 0, 0, 0, 0, 1];
    const target = 200;
    const expectedResult = -1;

    expect(inst.testCombination(input, target)).to.equal(expectedResult);
  });
});

describe('Invalid combination (low)', () => {
  it('should be less than £2(200p) by 1', () => {
    const input = [0, 1, 1, 2, 0, 1, 1, 2];
    const target = 200;
    const expectedResult = 1;

    expect(inst.testCombination(input, target)).to.equal(expectedResult);
  });
});
