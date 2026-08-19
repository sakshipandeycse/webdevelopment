

//array method
console.log("=== ARRAY FUNCTIONS ===");

let arr = ["Apple", "Banana", "Mango"];

console.log("Original Array =", arr);

// push() - adds element at the end
arr.push("Orange");
console.log("After push =", arr);

// pop() - removes element from the end
arr.pop();
console.log("After pop =", arr);

// unshift() - adds element at the beginning
arr.unshift("Grapes");
console.log("After unshift =", arr);

// shift() - removes element from the beginning
arr.shift();
console.log("After shift =", arr);

// length - gives number of elements
console.log("Length =", arr.length);

// indexOf() - gives index of element
console.log("Index of Mango =", arr.indexOf("Mango"));

// includes() - checks if element exists
console.log("Includes Apple =", arr.includes("Apple"));

// reverse() - reverses the array
arr.reverse();
console.log("After reverse =", arr);

// sort() - sorts the array
arr.sort();
console.log("After sort =", arr);

// join() - converts array into string
console.log("Join =", arr.join(", "));
