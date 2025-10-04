//! Personal Budget Tracker App Challenge (phase 8 - Function) -->>

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

function displayResults(userName, income, totalExpenses, tax, netIncome, balance, Savings, financialStatus) {
    console.log("Personal Budget Tracker App");
    console.log(`User : ${userName}`);
    console.log(`Total Income : $${income}`);
    console.log(`Total Expenses : $${totalExpenses}`);
    console.log(`Tax Deduction (10% of income) : $${tax}`);
    console.log(`Net Income After Tax : $${netIncome}`);
    console.log(`Remaining Balance : $${balance} (in 2025)`);
    console.log(`Savings (20% of balance) : $${Savings}`);
    console.log(financialStatus);

    const overspendingMessage = checkOverSpending(income, totalExpenses);
    if(overspendingMessage) {
        console.log(overspendingMessage);
    }
    console.log('Expense Breakdown');
    for(let i = 0; i < expenses.length; i++) {
        console.log(`Expense ${i + 1} : $${expenses[i]}`);
    }
}

function checkOverSpending(income, totalExpenses) {
    //! Check if expenses exceed income -->>
    return totalExpenses > income ? 'Warning: You are spending more than your income!' : '';
    }

//! Main function to the run budget tracker app -->>
function runBudgetTracker() {
    //! Ask for user input dynamically -->>
    const userName = getUserInput('Enter your name : ');
    const income = getUserInput("Enter your total income : ", true);

    //! Ask how many expenses the user has -->>
    const numberOfExpenses = getUserInput("How many expenses do you have? ", true);

    //! Validate inputs to ensure they are numbers -->>
    if (isNaN(income) || isNaN(numberOfExpenses) || income <= 0 || numberOfExpenses < 0) {
        console.log('Invalid input. Please enter valid numbers.')
        return;
    }
    else {
        const expenses = getExpenses(numberOfExpenses);
        const totalExpenses = calculateTotalExpenses(expenses);

    //! Tax Deduction (10% of income) -->>
    const tax = calculateTax(income, 0.1);

    //! Net income after the tax -->>
    const netIncome = calculateNetIncome(income, tax);

    //! Calculate remaining balance -->>
    const balance = calculateBalance(netIncome, totalExpenses);

    //! Savings (20% of remaining balance) -->>
    const Savings = calculateSavings(balance, 0.2);

    //! Determine the financial health status -->>
    let financialStatus = getFinancialStatus(Savings);

    displayResults(userName, income, totalExpenses, tax, netIncome, balance, Savings, financialStatus)
    }
}
runBudgetTracker();
