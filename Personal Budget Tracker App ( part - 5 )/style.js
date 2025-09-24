//! Personal Budget Tracker App Challenge (phase 5 - Conditional Control Statement) -->>
const userName = "Jubayer Safin";
const income = 5000;

//! Multiple Expenses -->>
const rent = 1200;
const groceries = 600;
const transport = 200;
const entertainment = 300;

//! Caltulate the Expenses -->>
const totalExpenses = rent + groceries + transport + entertainment;

//! Tax Deduction (10% of income) -->>
const tax = income * 0.10;

//! Net income after the tax -->>
const netIncome = income - tax;

//! Calculate remaining balance -->>
const balance = netIncome - totalExpenses;

//! Savings (20% of remaining balance) -->>
const Savings = balance * 0.20;

//! Determine the financial health status -->>
let financialStatus = '';

if(Savings >= 1000) {
    financialStatus = 'Excellent! You are saving well!';
} 

else if(Savings >= 500) {
    financialStatus = 'Good! You have a decent savings amount.';
}

else if(Savings >= 100) {
    financialStatus = 'Needs Improvement. Consider reduction expenses.';
}

else {
    financialStatus = 'Ceitical! Your savings are too low!.';
}

//! Check if expenses exceed income -->>
let overspendingMessage = '';

if(totalExpenses > income) {
    overspendingMessage = 'Warning: You are spending more than your income!';
}


console.log("Personal Budget Tracker App");
console.log(`User : ${userName}`);
console.log(`Total Income : $${income}`);
console.log(`Total Expenses : $${totalExpenses}`);
console.log(`Tax Deduction (10% of income) : $${tax}`);
console.log(`Net Income After Tax : $${netIncome}`);
console.log(`Remaining Balance : $${balance} (in 2025)`);
console.log(`Savings (20% of balance) : $${Savings}`);
console.log(financialStatus);

if(overspendingMessage) {
    console.log(overspendingMessage);
}
