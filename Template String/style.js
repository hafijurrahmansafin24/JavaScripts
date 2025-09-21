//! Template String -->>
const userName = "Jubayer Safin";
const income = 5000;

//! Multiple Expenses -->>
let rent = 1200;
let groceries = 600;
let transport = 200;
let entertainment = 300;

//! Caltulate the Expenses -->>
let totalExpenses = rent + groceries + transport + entertainment;

//! Tax Deduction (10% of income) -->>
let tax = income * 0.10;

//! Net income after the tax -->>
let netIncome = income - tax;

//! Calculate remaining balance -->>
let balance = netIncome - totalExpenses;

//! Savings (20% of remaining balance) -->>
let Savings = balance * 0.20;

console.log("Personal Budget Tracker App");
console.log(`User : ${userName}`);
console.log(`Total Income : $${income}`);
console.log(`Total Expenses : $${totalExpenses}`);
console.log(`Tax Deduction (10% of income) : $${tax}`);
console.log(`Net Income After Tax : $${netIncome}`);
console.log(`Remaining Balance : $${balance} (in 2025)`);
console.log(`Savings (20% of balance) : $${Savings}`);
console.log(`Hi \nBye`);
