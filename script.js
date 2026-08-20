// Expense tracker project

const rent = 180;
const food = 95;
const transport = 60;
const internet = 120;
const entertainment = 75;
const utilities = 90;

// Part 2 - Flag high spending
if (rent > 100) {
  console.log(`Rent: High Spending`);
} else {
  console.log(`Rent: Normal Spending`);
}

if (food > 100) {
  console.log(`Food: High Spending`);
} else {
  console.log(`Food: Normal Spending`);
}

if (transport > 100) {
  console.log(`Transport: High Spending`);
} else {
  console.log(`Transport: Normal Spending`);
}

if (internet > 100) {
  console.log(`Internet: High Spending`);
} else {
  console.log(`Internet: Normal Spending`);
}

if (entertainment > 100) {
  console.log(`Entertainment: High Spending`);
} else {
  console.log(`Entertainment: Normal Spending`);
}

if (utilities > 100) {
  console.log(`Utilities: High Spending`);
} else {
  console.log(`Utilities: Normal Spending`);
}

// Part 3 - Calculate total expenses
const expenses = [rent, food, transport, internet, entertainment, utilities];
let totalExpenses = 0;

for (const expense of expenses) {
  totalExpenses += expense;
}

console.log(`Total Expenses: $${totalExpenses}`);

// Part 4 - Budget check
const monthlyIncome = 800;

console.log(`Monthly Income: $${monthlyIncome}`);

if (totalExpenses <= monthlyIncome) {
  console.log(`Status: Within Budget`);
} else {
  console.log(`Status: Over Budget`);
}
