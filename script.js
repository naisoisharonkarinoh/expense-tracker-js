import { calculateTotal, renderExpenses } from './budget.js';

const expenses = [
  { name: 'Rent', amount: 1200, category: 'Housing' },
  { name: 'Groceries', amount: 320.5, category: 'Food' },
  { name: 'Transport', amount: 95.25, category: 'Transport' },
  { name: 'Internet', amount: 70, category: 'Utilities' },
  { name: 'Movies', amount: 45.75, category: 'Entertainment' },
  { name: 'Electricity', amount: 85, category: 'Utilities' }
];

const tableBody = document.getElementById('expense-table-body');
const totalAmount = document.getElementById('total-amount');
const expenseForm = document.getElementById('expense-form');

function refreshExpenses() {
  renderExpenses(expenses, tableBody, totalAmount);
}

expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('expense-name');
  const amountInput = document.getElementById('expense-amount');
  const categoryInput = document.getElementById('expense-category');

  const newExpense = {
    name: nameInput.value.trim(),
    amount: Number(amountInput.value),
    category: categoryInput.value
  };

  if (!newExpense.name || Number.isNaN(newExpense.amount) || newExpense.amount <= 0 || !newExpense.category) {
    alert('Please enter a valid expense name, amount, and category.');
    return;
  }

  expenses.push(newExpense);
  expenseForm.reset();
  refreshExpenses();
});

refreshExpenses();
console.log('Total expenses:', calculateTotal(expenses));
