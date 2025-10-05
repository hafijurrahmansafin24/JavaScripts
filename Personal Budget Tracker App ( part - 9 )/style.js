//! Personal Budget Tracker App Challenge (phase 8 - Object) -->>

//! Function to get user input -->>
function  getUserInput(promptMessage, isNumber = false) {
    const userInput = prompt(promptMessage);
    return isNumber ? parseFloat(userInput) : userInput;
}

function getExpenses(numberOfExpenses) {
    const expenses = [];
    //! Collect expenses dynamically -->>
        for (let i = 1; i <= numberOfExpenses; i++) {
            let expense = getUserInput(`Enter expense ${i} : `, true);

        if (isNaN(expense) || expense < 0) {
            console.log(`Invalid input for expense ${i}, setting it to $0.`)
            expense = 0;
        }
        expenses.push(expense);
    }
    return expenses;
}

function calculateTotalExpenses(expenses) {
    //! Calculate total expenses using the array -->>
    let totalExpenses = 0;
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i];
    }
    return totalExpenses;
}

function calculateTax(income, taxRate) {
    return income * taxRate;
}

function calculateNetIncome(income, tax) {
    return income - tax;
}

function calculateBalance(netIncome, totalExpenses) {
    return netIncome - totalExpenses;
}

function calculateSavings(balance, savingPercentage) {
    return balance * savingPercentage;
}

function getFinancialStatus(Savings) {
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
    return financialStatus;
}

function displayResults(userBudget) {
    console.log("Personal Budget Tracker App");
    console.log(`User : ${userBudget.userName}`);
    console.log(`Total Income : $${userBudget.income}`);
    console.log(`Total Expenses : $${userBudget.totalExpenses}`);
    console.log(`Tax Deduction (10% of income) : $${userBudget.tax}`);
    console.log(`Net Income After Tax : $${userBudget.netIncome}`);
    console.log(`Remaining Balance : $${userBudget.balance} (in 2025)`);
    console.log(`Savings (20% of balance) : $${userBudget.Savings}`);
    console.log(userBudget.financialStatus);

    const overspendingMessage = checkOverSpending(userBudget);
    if(overspendingMessage) {
        console.log(overspendingMessage);
    }
    console.log('Expense Breakdown');
    for(let i = 0; i < userBudget.expenses.length; i++) {
        console.log(`Expense ${i + 1} : $${userBudget.expenses[i]}`);
    }
}

function checkOverSpending(userBudget) {
    //! Check if expenses exceed income -->>
    return userBudget.totalExpenses > userBudget.income ? 'Warning: You are spending more than your income!' : '';
}

//! function to calculate financial details -->>
function calculateBudget(userBudget) {
    userBudget.expenses = getExpenses(userBudget.numberOfExpenses);
    userBudget.totalExpenses = calculateTotalExpenses(userBudget.expenses);

    //! Tax Deduction (10% of income) -->>
    userBudget.tax = calculateTax(userBudget.income, 0.1);

    //! Net income after the tax -->>
    userBudget.netIncome = calculateNetIncome(userBudget.income, userBudget.tax);

    //! Calculate remaining balance -->>
    userBudget.balance = calculateBalance(userBudget.netIncome, userBudget.totalExpenses);

    //! Savings (20% of remaining balance) -->>
    userBudget.Savings = calculateSavings(userBudget.balance, 0.2);

    //! Determine the financial health status -->>
    userBudget.financialStatus = getFinancialStatus(userBudget.Savings);
}

//! Main function to the run budget tracker app -->>
function runBudgetTracker() {
let userBudget = {
    userName : '',
    income : 0,
    expenses : [],
    numberOfExpenses : 0,
    totalExpenses : 0,
    tax : 0,
    netIncome: 0,
    balance : 0,
    Savings : 0,
    financialStatus : 0
};

    userBudget.userName = getUserInput('Enter your name : ');
    userBudget.income = getUserInput('Enter your total income : ', true);
    userBudget.numberOfExpenses = getUserInput('How many expenses do you have? ', true);

    //! Validate inputs to ensure they are numbers -->>
    if (isNaN(userBudget.income) || isNaN(userBudget.numberOfExpenses) || userBudget.income <= 0 || userBudget.numberOfExpenses < 0) {
        console.log('Invalid input. Please enter valid numbers.');
        return;
    }
    else {
    calculateBudget(userBudget);

    displayResults(userBudget);
    }
}
runBudgetTracker();
