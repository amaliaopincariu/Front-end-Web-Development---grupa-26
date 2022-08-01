const b = 20;
import { a } from './file1.js';

const c = a + b;

console.log("file2.js ", c);
for(let i = 0; i < 10; i++) { // se va executa cand facem importul in file3.js
  console.log("file2.js ", i);
}

const getFullName = () => {
  return "Adi"
}

const test = 100;
export {
  b,
  test as altNume,
  getFullName
}





