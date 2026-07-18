//Comparsion

// console.log(5==5) //true
// console.log(5=='5') //true  beacause == checks for value only and not type it converts the string '5' to number 5 and then compares
// console.log(5===5) //true
// console.log(5==='5') //false beacause === checks for both value and type


function display() {
    console.log(z) //ReferenceError: z is not defined 
                    // then

    // let z = 10; // ReferenceError: Cannot access 'z' before initialization it is hoited to top but not initialized so it is in temporal dead zone
    var z = 10; // undefined because var is hoisted to the top of the function scope and initialized with undefined
}

// display()

// if(null){
//     console.log("This will not be executed because 0 is falsy");
// }else{
//     console.log("This will be executed because 0 is falsy");
// }

// function myFunc(){
//     let a = 10;
//     function innerFunc(){
//         console.log("Hello from innerFunc" , a); // innerFunc has access to the variable a from its outer function myFunc due to closure
//     }
//     return innerFunc; // returns the function itself, not the result of calling it

// }

// let myFunc2 = myFunc(); 

// myFunc2(); // the core idea of clousers is


function createAccount(initialBalance) {
  let balance = initialBalance; // nobody outside can touch this directly

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log('Insufficient funds');
        return balance;
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

// const acc = createAccount(100);
// acc.deposit(50);      // 150
// acc.withdraw(30);      // 120
// console.log(acc.deposit(49)); // undefined -- can't access it directly!

// console.log(typeof NaN) // it is number because java

function maxSubArray(...numbers) {
    console.log(numbers.reduce((sum, i) => sum+i, 0))
}

maxSubArray(1, 4, 2, 10, 23, 3, 1, 0, 20)

function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    console.log(cache)
    return result;
  };
}

const res = memoize(maxSubArray(1, 4, 2, 10, 23, 3, 1, 0, 20))
console.log(res)