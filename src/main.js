// src/main.js

import App from './App';

const inst = new App();

console.time('execution');
const combinations = inst.run();
console.log(`${combinations} combinations`);
console.timeEnd('execution');
