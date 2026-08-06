// que 1 

let a = Number(prompt("Enter Your Number"));

console.log(a % 2 == 0 ? 'Even' : 'Odd');

// que 2 

let age = Number(prompt("Enter Your Number"));
console.log(age >= 18 ? "eligible for driving license" : "not eligible for driving license")

// que 3

let monthSalary = 12300;

let annualSalary = (monthSalary * 12)

let CTC = annualSalary + (annualSalary * (2 / 10));

console.log(CTC)

// q 4

let color = 'red';

command = color === 'green' || color === 'Green' ? 'GO' : 'STOP'

console.log(command)

// q5
let dailyUnit = [2, 3 ,5, 6, 7, 3, 4, 5, 6, 7,
                 5, 6, 7, 5, 6, 5, 6, 7, 7, 7,
                 3, 4, 5, 6, 7, 7, 7, 8, 9, 9
]

let monthlyUnit = 0;

for (let i=0; i<dailyUnit.length; i++) {
    monthlyUnit += dailyUnit[i];
}

let unitCost = 150;

let monthyBill = monthlyUnit * 150;

console.log(monthyBill)

// q6
let p = 20;
let q = 30;
let r = 60;

let max = p > q 
          ? p > r ? p : r 
          : q > r ? q : r

console.log(max)
