# 📘 JavaScript Notes – Variables, Data Types & JavaScript Engine

> 🎯 Beginner-friendly revision notes with diagrams, examples, emojis, and important interview points.

---

# 📑 Table of Contents

1. Variables
2. Variable Assignment
3. let vs const vs var
4. Identifiers
5. Rules for Naming Identifiers
6. Naming Conventions
7. JavaScript Data Types
8. Primitive vs Non-Primitive
9. Stack vs Heap Memory
10. JavaScript Execution Phases
11. Example Program
12. Important Notes
13. Assignments

---

# 📌 Variables

A **variable** is a container that stores data.

📦 Think of it like a labeled box.

```
📦 fruit
┌────────────┐
│ "Mango"    │
└────────────┘
```

JavaScript provides **three ways** to declare variables.

```javascript
let name = "Farhan";
const PI = 3.14159;
var age = 20;
```

---

# 🔥 let vs const vs var

| Feature | let | const | var |
|----------|-----|-------|------|
| Scope | Block | Block | Function |
| Reassign | ✅ Yes | ❌ No | ✅ Yes |
| Redeclare | ❌ No | ❌ No | ✅ Yes |
| Hoisted | ✅ Yes (TDZ) | ✅ Yes (TDZ) | ✅ Yes |
| Preferred | ✅ Yes | ✅ Yes | ❌ Avoid |

---

## 🟢 let

- Block scoped
- Can be reassigned
- Cannot be redeclared

```javascript
let city = "Delhi";

city = "Mumbai";      // ✅

console.log(city);
```

Output

```
Mumbai
```

❌ Invalid

```javascript
let city = "Delhi";
let city = "Mumbai";
```

---

## 🔵 const

- Block scoped
- Cannot be reassigned
- Must be initialized while declaring

```javascript
const country = "India";
```

❌

```javascript
const country;
```

❌

```javascript
const PI = 3.14;

PI = 3.14159;
```

---

## 🟡 var

- Function scoped
- Can be reassigned
- Can be redeclared
- Avoid using in modern JavaScript

```javascript
var age = 20;

age = 21;

var age = 22;

console.log(age);
```

Output

```
22
```

---

# 📌 Variable Assignment

Variables can store values.

```javascript
let fruit = "Mango";
```

They can also store another variable's value.

```javascript
let fruit = "Mango";
let vegetable = "Carrot";

fruit = vegetable;

console.log(fruit);
```

Output

```
Carrot
```

---

## 📖 What happened?

```
Initially

fruit -----------> "Mango"

vegetable -------> "Carrot"



After Assignment

fruit -----------> "Carrot"

vegetable -------> "Carrot"
```

⚠️ The value is copied.

Changing one later won't affect the other (for primitive values).

---

# 📌 What are let, const and var?

These are called **declaration keywords** (sometimes informally referred to as specifiers).

They are used to declare identifiers like

- Variables
- Functions
- Classes

Examples

```javascript
let name;

const PI = 3.14;

function greet(){}

class Student{}
```

---

# 📌 Identifier

An **Identifier** is simply the name given to:

- Variables
- Functions
- Classes
- Objects
- Arrays

Example

```javascript
let firstName = "Farhan";

function greet(){}

class Student{}
```

Identifiers here are

```
firstName

greet

Student
```

---

# 📌 Rules for Naming Identifiers

## ✅ Rule 1

Can contain letters

```javascript
let username;
```

---

## ✅ Rule 2

Can contain digits

```javascript
let student1;
```

---

## ✅ Rule 3

Cannot start with a digit

❌

```javascript
let 2student;
```

✅

```javascript
let student2;
```

---

## ✅ Rule 4

Only two special symbols are allowed

- $
- _

```javascript
let $price = 500;

let _username = "Farhan";
```

---

## ❌ Other special symbols are NOT allowed

```javascript
let user-name;
```

```javascript
let my@name;
```

```javascript
let react-play;
```

---

## ✅ Rule 5

Reserved keywords cannot be used

❌

```javascript
let for;
```

❌

```javascript
let return;
```

❌

```javascript
let class;
```

---

# ✅ Examples

```javascript
let $ = "Dollar";
```

```javascript
let _ = "Underscore";
```

```javascript
let student123 = "Farhan";
```

---

# ❌ Invalid Examples

```javascript
let 2morrow;
```

```javascript
let react-play;
```

```javascript
let class;
```

---

# 📌 Naming Conventions

Good naming makes code readable.

---

## 🟢 camelCase

Used for

- Variables
- Functions

```javascript
let firstName;

let totalMarks;

function calculateTotal(){}
```

---

## 🔵 PascalCase

Used for

- Classes
- Constructor Functions

```javascript
class StudentWork{}

class EmployeeDetails{}
```

---

## 🟡 UPPER_SNAKE_CASE

Used for

- Constants

```javascript
const MAX_ATTEMPTS = 5;

const PI = 3.14;
```

---

## ⚪ _snake_case

Sometimes used for

- Private variables
- Internal values

```javascript
let _username;
```

---

# 📌 JavaScript Data Types

JavaScript has **8 Data Types**

```
Data Types

├── Primitive
│
└── Non Primitive
```

---

# 🟢 Primitive Data Types

Primitive values are immutable.

```
Primitive

├── String
├── Number
├── Boolean
├── Undefined
├── Null
├── Symbol
└── BigInt
```

---

## 1️⃣ String

Stores text.

```javascript
let name = "Farhan";
```

---

## 2️⃣ Number

Stores numbers.

```javascript
let age = 20;

let price = 99.99;
```

---

## 3️⃣ Boolean

True or False

```javascript
let isLoggedIn = true;
```

---

## 4️⃣ Undefined

Declared but no value assigned.

```javascript
let score;

console.log(score);
```

Output

```
undefined
```

---

## 5️⃣ Null

Represents intentional absence of value.

```javascript
let user = null;
```

---

## 6️⃣ Symbol

Creates unique identifiers.

```javascript
let id = Symbol("id");
```

---

## 7️⃣ BigInt

Stores very large integers.

```javascript
let number = 123456789012345678901234567890n;
```

---

# 🔵 Non-Primitive (Reference) Data Types

```
Reference Types

├── Object
├── Array
└── Function
```

---

## Object

Stores key-value pairs.

```javascript
const student = {
    name: "Farhan",
    age: 20
};
```

---

## Array

Stores ordered data.

```javascript
const fruits = [
    "Apple",
    "Mango",
    "Orange"
];
```

---

## Function

Reusable block of code.

```javascript
function greet(){
    console.log("Hello");
}
```

---

# 📌 Primitive vs Non-Primitive

| Primitive | Reference |
|------------|-----------|
| Stored by value | Stored by reference |
| Immutable | Mutable |
| Stack Memory | Heap Memory |

---

# 📌 Stack vs Heap Memory

## 🟢 Stack Memory

Stores

- Primitive values
- Function calls

Fast access.

```
Stack

┌────────────┐
│ age = 20   │
├────────────┤
│ name       │
└────────────┘
```

---

## 🔵 Heap Memory

Stores

- Objects
- Arrays
- Functions

```
Stack

student
   │
   │
   ▼

Heap

{
 name:"Farhan",
 age:20
}
```

---

## 📖 Example

```javascript
let a = 10;

let b = a;

b = 20;
```

```
Stack

a ----> 10

b ----> 20
```

---

Reference Example

```javascript
let person1 = {
    name: "Farhan"
};

let person2 = person1;

person2.name = "Ali";
```

```
Stack

person1 ----┐
            │
person2 ----┘

        │
        ▼

Heap

{
 name:"Ali"
}
```

Both variables point to the same object.

---

# ⚙️ JavaScript Engine

A JavaScript engine converts your code into machine code so the computer can execute it.

Examples:

- Chrome → V8 Engine
- Firefox → SpiderMonkey
- Safari → JavaScriptCore

---

# 🧠 JavaScript Execution Phases

```
JavaScript Code

      │
      ▼

1️⃣ Tokenization

      │
      ▼

2️⃣ Parsing

      │
      ▼

3️⃣ Interpretation

      │
      ▼

4️⃣ Code Generation

      │
      ▼

Machine Code

      │
      ▼

Output
```

---

## 1️⃣ Tokenization

Code is broken into tokens.

Example

```javascript
let age = 20;
```

Tokens

```
let

age

=

20

;
```

---

## 2️⃣ Parsing

Creates a Syntax Tree (AST).

```
Assignment

├── Variable

└── Value
```

---

## 3️⃣ Interpretation

The engine begins executing the code line by line.

---

## 4️⃣ Code Generation

Frequently used code is optimized into machine code using JIT (Just-In-Time) compilation.

This makes JavaScript much faster.

---

# 📌 Example

```javascript
function sayName() {

    var name = "Some Name";

    console.log("The name is", name);

}
```

Memory

```
Global

│

└── sayName()
```

Function Call

```
sayName()

│

├── name

└── console.log()
```

Output

```
The name is Some Name
```

---

# 💡 Important Notes

✅ Prefer `const` whenever possible.

✅ Use `let` only when reassignment is needed.

✅ Avoid `var` in modern JavaScript.

✅ Primitive values are copied by value.

✅ Objects and arrays are copied by reference.

✅ Every function creates a new execution context.

✅ JavaScript is single-threaded.

---

# 🎯 Assignments

## Assignment 1

Declare variables using

- let
- const
- var

Print all values.

---

## Assignment 2

Swap two variables without using a third variable.

---

## Assignment 3

Create variables for

- Name
- Age
- City
- College

Print them.

---

## Assignment 4

Create one variable of every primitive data type.

---

## Assignment 5

Create an object named `student`.

Properties

- name
- age
- branch
- marks

Print the object.

---

## Assignment 6

Create an array of five fruits.

Print every fruit.

---

## Assignment 7

Create a function called `greet()`.

Print

```
Hello JavaScript
```

---

## Assignment 8

Predict the output.

```javascript
let a = 10;

let b = a;

b = 20;

console.log(a);

console.log(b);
```

---

## Assignment 9

Predict the output.

```javascript
let obj1 = {
    name: "Farhan"
};

let obj2 = obj1;

obj2.name = "Ali";

console.log(obj1.name);
```

---

## Assignment 10

Identify whether each is Primitive or Reference.

```javascript
"Hello"

100

true

[]

{}

function(){}

null

Symbol()

BigInt(123)
```

---

# 🎓 Revision Summary

```
Variables
│
├── let
├── const
└── var

Identifiers
│
├── Naming Rules
└── Naming Conventions

Data Types
│
├── Primitive
│   ├── String
│   ├── Number
│   ├── Boolean
│   ├── Undefined
│   ├── Null
│   ├── Symbol
│   └── BigInt
│
└── Reference
    ├── Object
    ├── Array
    └── Function

Memory
│
├── Stack
└── Heap

JavaScript Engine
│
├── Tokenization
├── Parsing
├── Interpretation
└── Code Generation
```

---
⭐ **Best Practice:** `const` → first choice, `let` → when values change, `var` → avoid in modern JavaScript.