// Adds up positive integers from 1-n
function addNums(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i
  }
  return sum;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  console.time(addManyNums)
 let count = 0
 for(let i = 1; i <= n; i++) {
  count += addNums(i)
 }
 console.timeEnd(addManyNums)
return count
}



module.exports = [addNums, addManyNums];
