// src/App.js

class App {
  constructor(target) {
    this.coins = [200, 100, 50, 20, 10, 5, 2, 1];
    this.target = target || 200;
  }

  testCombination(coinsUsed, target) {
    let total = 0;

    // Calculate the total of the current coins used
    for (let i = 0; i < coinsUsed.length; i += 1) {
      total += this.coins[i] * coinsUsed[i];
    }

    // Return how short the value is, negative if over
    return target - total;
  }

  recursiveCalculation(target, idx) {
    // If we're done with 1p coins or the target is under 0 we've gone too far
    if (idx > this.coins.length - 1 || target < 0) {
      return 0;
    }

    // Once the target is 0, we've found a combo
    if (target === 0) {
      return 1;
    }

    // The result will be a summation of the two cases
    // Case 1: The current coin is too large and cannot be subtracted
    //         from the target, move to the next smallest coin and repeat
    // Case 2: The current coin can be subtracted from the target, repeat
    //         the process with the same coin after the subtraction to verify
    //         the current coin cannot fit again into the target
    return (
      this.recursiveCalculation(target, idx + 1) +
      this.recursiveCalculation(target - this.coins[idx], idx)
    );
  }

  run() {
    return this.recursiveCalculation(this.target, 0);
  }
}

export default App;
