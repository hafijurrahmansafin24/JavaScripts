//! Personal Budget Tracker App Challenge (phase 11 - DOM) -->>

const budgetResultElement = document.getElementById("budgetResult");
const clearBudgetElement = document.getElementById("clearBudget");
const startBudgetElement = document.getElementById("startBudget");
const calculateBudgetElement = document.getElementById("calculateBudget");
const numberOfExpensesElement = document.getElementById("numExpenses");
const userNameElement = document.getElementById("userName");
const incomeElement = document.getElementById("income");
const expenseInputsDiv = document.getElementById("expenseInputs");

//! Attach all event listeners -->>
startBudgetElement.addEventListener("click", getExpenses);
calculateBudgetElement.addEventListener("click", startcalculateBudget);
clearBudgetElement.addEventListener("click", clearBudget);
incomeElement.addEventListener("input", validateForm);
userNameElement.addEventListener("input", validateForm);
numberOfExpensesElement.addEventListener("input", validateForm);

//! Disable calculate button initially -->>
startBudgetElement.disabled = true;

//! function to validate form inputs -->>
function validateForm() {
    const incomeValid = parseFloat(incomeElement.value) > 0;
    const userNameValid = userNameElement.value.trim().length > 0;
    const numberOfExpensesValid = parseFloat(numberOfExpensesElement.value) >= 0;

    startBudgetElement.disabled = !(incomeValid && userNameValid && numberOfExpensesValid);
}

//! Function to save budget data to localstorage -->>
function saveBudgetToLocal(userBudget) {
    localStorage.setItem('userBudget', JSON.stringify(userBudget));
}

//! Function to retrieve budget data from localstorage -->>
function getBudgetFromLocal() {
    const saveBudget = localStorage.getItem('userBudget');
    return saveBudget ? JSON.parse(saveBudget) : null;
}

//! Function to clear budget data from localstorage -->>
function clearBudgetFromLocal() {
    localStorage.removeItem('userBudget');
    alert('Budget Data Cleared from Local Storage.');
}

function getExpenses() {
    const numberOfExpenses = numberOfExpensesElement.value;
    expenseInputsDiv.innerHTML = '';

    if (isNaN(numberOfExpenses) || numberOfExpenses < 0) {
        alert('Enter a valid number of expenses.');
        return;
    }

    for (let i = 1; i <= numberOfExpenses; i++) {
        let expenseLabel = document.createElement("label");
        expenseLabel.textContent = `Enter expense ${i} : `;

        let expenseInput = document.createElement("input");
        expenseInput.type = "number";
        expenseInput.classList.add("expenseValue");


        expenseInputsDiv.appendChild(expenseLabel);
        expenseInputsDiv.appendChild(expenseInput);
        expenseInputsDiv.appendChild(document.createElement("br"));
    }

    document.getElementById("calculateBudget").style.display = "inline-block";
    clearBudgetElement.style.display = "inline-block";
}

function clearBudget(){
    clearBudgetFromLocal();
    budgetResultElement.innerHTML = '';
}

function startcalculateBudget(){
    let userBudget = {
        userName : userNameElement.value,
        income : parseFloat(incomeElement.value),
        expenses : [],
        numberOfExpenses : parseInt(numberOfExpensesElement.value),
        totalExpenses : 0,
        tax : 0,
        netIncome: 0,
        balance : 0,
        Savings : 0,
        financialStatus : 0,
    };

    let expenseInputs = document.getElementsByClassName("expenseValue");
    for (let i = 0; i < expenseInputs.length; i++) {
        let expense = parseFloat(expenseInputs[i].value);
        userBudget.expenses.push(isNaN(expense) || expense < 0 ? 0 : expense);
    }
    calculateBudget(userBudget);
    saveBudgetToLocal(userBudget);
    displayResults(userBudget);
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
        financialStatus = 'Ceitical! Your savings are too low!';
    }
    return financialStatus;
}

function displayResults(userBudget) {
budgetResultElement.innerHTML = `
    <p>User : ${userBudget.userName}</p>
    <p>Income : $${userBudget.income}</p>
    <p>Expenses : $${userBudget.totalExpenses}</p>
    <p>Tax (10% of income) : $${userBudget.tax}</p>
    <p>Net Income After Tax : $${userBudget.netIncome}</p>
    <p>Balance : $${userBudget.balance}</p>
    <p>Savings (20% of balance) : $${userBudget.Savings}</p>
    <p>${userBudget.financialStutus}</p>
`;
}

//! function to calculate financial details -->>
function calculateBudget(userBudget) {
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


function runBudgetTracker () {
    const saveBudget = getBudgetFromLocal();
    if(saveBudget) {
        displayResults(saveBudget);
    }
}

window.addEventListener("load", runBudgetTracker);
