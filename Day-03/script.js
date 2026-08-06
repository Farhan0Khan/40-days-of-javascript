let a = 10;
let b = 20;

let f_name = "farhan"
let l_name = "khan"

console.log(f_name + l_name);

// Arithmetic Operators

console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(a / b); // 0.5
console.log(a ** b); // 10^20
console.log(a % b); // 0

let count = 5;
// post increment - firt return output then increment
console.log(count++) // count = count + 1
console.log(count) // 6 
// pre increment - first it inrement then return output
console.log(++count) // count = count + 1

// post decrement
// pre decrement


// Assignment Operator
let x = 10;
x += 5 // x = x + 5 -> 15
x -= 3 // x = x - 3 -> 12
x *= 2 // x = x * 2 -> 24
x /= 4 // x = x / 4 -> 6

// Comparison Operator
// == loosely equal
// === strictly equals

console.log(0 == false) // true
console.log(0 === false) // false
console.log(3 == '3') // true
console.log(3 != '3') // false
console.log(3 === '3') // false

console.log(null === null)
console.log(undefined === undefined)

// NaN = Not a Number 
// if any thing parsed as a non number is called NaN

let obj1 = {'name': 'farhan'}  // 00xx
let obj2 = {'name': 'farhan'} // 00xxyy

console.log(obj1 === obj2) // false
console.log(obj1 !== obj2) // true

// because for a reference type strinct equal equate it memory adrress from heap 

4 > 3
2 > 1
1 > 7
2 >= 2

4 < 3
4 < 7
3 <= 9


// Logical Operators
// && , || , ?? , !

// op1 && op2

// if this "op1" first operand can be coverted to false then it will return this "op1" particular operator otherwise it return this "op2" second operator 
// it return true if only both operators are true

console.log(false && false) // false
console.log(true && false) // false
console.log(true && true) // true
console.log(false && true) // false

console.log('cow' && 'horse'); // Horse

4 > 5 && 4 === 6 // false

// op1 || op2
// if op1 can be converted true then it return op1 otherwise it return op2
// it return true if one of condition among two is true otherwise it return false

console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log('cow' || 'horse') // cow

// !

console.log(!true) // false
console.log(!false) // true

// ?? nullish colaeshing
// op1 ?? op2
// if the first one can be converted into null or undefined then it return the second otherwise it return first

let a1 = null ?? 1; // 1
let a2 = undefined ?? 3; // 3
let a3 = false ?? 'farhan'; // false
let a4 = 0 ?? 'farhan'; // 0 


// conditional ternary Operator
let age = 23;
age >= 60 ? 'senior citizen' : 'non-senior citizen'

// bitwisw operator
// & , | , ^ , << , >>

// groupig

let p = 1
let q = 2
let r = 3

console.log(p + q * r) // 7
console.log(p + (q * r)) // 7
console.log((p + q) * r) // 9

// typeof
console.log(typeof("farhan")) // string
console.log(typeof(false)) // boolean
console.log(typeof(200)) // number
console.log(typeof({})) // object
console.log(typeof([])) // object
console.log(typeof(null)) // object
console.log(typeof(undefined)) // undefind

// instanceof
// if a particualr object is instance of particular objecttype then it will true otherwise it return false

console.log()


