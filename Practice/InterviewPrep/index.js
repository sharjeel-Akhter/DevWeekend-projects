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

function heavyCalculation(n) {
  let result = 0;
  for (let i = 0; i < 5_000_000; i++) {
    result += (i % 10) * n;
  }
  return result;
}

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

// how memoization works in this example is that it stores the result of the heavyCalculation function in a cache (a Map object) the first time it is called with a specific argument. When the function is called again with the same argument, it retrieves the result from the cache instead of recalculating it, which saves time and resources.
// the dry run of code is as follows:
// memoize function is an example of closure because it returns a function that has access to the cache variable (cache) even after the memoize function has finished executing. This allows the returned function to remember the results of previous calculations and avoid redundant work.
// 1. The first time heavyCalculation(20) is called, it performs the calculation and stores the result in the cache with the key '20'.
// 2. The second time heavyCalculation(20) is called, it retrieves the result from the cache instead of performing the calculation again.
// 3. The console.log(cache) statement inside the memoize function will show the contents of the cache after each call, allowing you to see how the cache is populated and used.
// 


// const memoizedHeavyCalculation = memoize(heavyCalculation);

// console.time('without memoize');
// console.log('without memoize:', heavyCalculation(20));
// console.timeEnd('without memoize');

// console.time('with memoize first call');
// console.log('with memoize first call:', memoizedHeavyCalculation(20));
// console.timeEnd('with memoize first call');

// console.time('with memoize second call');
// console.log('with memoize second call:', memoizedHeavyCalculation(20));
// console.timeEnd('with memoize second call');

// let arr = [15];
// arr.length = 5;
// arr[6] = 10;

// console.log(Object.keys(arr))
// arr.forEach((ar,inx) => console.log(ar, inx))  
// console.log(arr.length)

// for(const key of arr.keys()){
//   console.log(`${key}: ${arr[key]}`)
// }

let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]

let arr = arr1.concat(arr2)
// console.log(arr.length)

// console.log(arr1.copyWithin(3, 0)) // copyWithin function copies a sequence of array elements within the array to the position starting at target index. In this case, it copies the element at index 4 (which is 5) to index 3, resulting in [1, 2, 3, 5, 5]. The original array is modified in place.

let obj = arr2.entries() // returns an iterator object that contains key/value pairs for each index in the array. Each key is the index of the element, and each value is the element itself. The output will be an iterator object that can be used to iterate over the entries of the array.

// for (const [index, value] of obj) {
//   console.log(`${index}: ${value}`);
// }

// console.log(arr1.every((value) => value > 5)) // false because not all elements in arr2 are greater than 5. The every() method tests whether all elements in the array pass the provided function. In this case, it checks if each element is greater than 5, and since 6 is not greater than 5, it returns false.

// console.log(arr1.fill(0))

// arr1 = [1,2,3,[4,5,6],1]
// console.log(arr1)

// console.log(arr1.flatMap((value) => [value * 2])) // [2, 4, 6, 8, 10] because flatMap first maps each element to a new value (in this case, multiplying by 2) and then flattens the result into a new array. The output is a new array with each element doubled. it also removes the duplicates from the array. The flatMap() method is useful when you want to transform and flatten an array in a single step.


// let strArr = ['s', 'h', 'a', 'r', 'j', 'e', 'e', 'l']

// console.log(strArr.join(""))

