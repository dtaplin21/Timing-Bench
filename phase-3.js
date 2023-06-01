const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  function addNums10(increment) {
    const start = date.now()
    let arr = [];
   for(let i = 1; i <= 10; i++) {
    arr.push(addNums(i * increment))
    const end = date.now();
    console.log(end - start)
   }
   return arr
  } // Copy your `addNums10` code here
  // Then, add timing code
}


function addManyNums10Timing(increment) {
  function addManyNums10(increment) {
    const start = date.now()
    let arr = [];
    for(let i = 1; i <= 10; i++) {
      arr.push(addManyNums(i * increment))
    const end = date.now();
    console.log(end - start)
    }
    return arr
    }// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
