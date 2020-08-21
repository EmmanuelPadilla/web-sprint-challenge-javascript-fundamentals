// ==== Closures ==== 
console.log ("__________________________________________CLOSURES________________________")
/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */
// 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//It can access internal because it is part of the `myFunction` function, const internal, would not be available to any other function ouside of `myFunction

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation2(number){
  let count = 0
  for (let i =1; i< number+1; i++){
    count =  i +count
  }
return count
}

console.log(summation2(4))


function sumation(n) {
  const summit = (n) = (n * (n + 1)) / 2;
  return summit;
}

console.log(sumation(4));
