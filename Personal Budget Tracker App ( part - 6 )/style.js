//! Personal Budget Tracker App Challenge (phase 6 - Loop Control Statement) -->>

//! Ask for user input dynamically -->>
const userName = prompt("Enter your name : ");
const income = parseFloat(prompt("Enter your total income : "));

//! Ask how many expenses the user has -->>
const numberOfExpenses = parseInt(prompt("How many expenses do you have? "));

//! Validate inputs to ensure they are numbers -->>
if (isNaN(income) || isNaN(numberOfExpenses) || income <= 0 || numberOfExpenses < 0) {
    console.log('Invalid input. Please enter valid numbers.')
}
else {
    let totalExpenses = 0;

    //! Collect expenses dynamically -->>
    for (let i = 1; i <= numberOfExpenses; i++) {
        let expense = parseFloat(prompt(`Enter expense ${i} : `));

    if (isNaN(expense) || expense < 0) {
        console.log(`Invalid input for expense ${i}, setting it to $0.`)
        expense = 0;
    }
    totalExpenses += expense;
}

//! Tax Deduction (10% of income) -->>
const tax = income * 0.1;

//! Net income after the tax -->>
const netIncome = income - tax;

//! Calculate remaining balance -->>
const balance = netIncome - totalExpenses;

//! Savings (20% of remaining balance) -->>
const Savings = balance * 0.2;

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
}
