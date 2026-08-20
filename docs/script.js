const expenses = [
  { name: 'Rent', amount: 1200, category: 'Housing' },
  { name: 'Groceries', amount: 320.5, category: 'Food' },
  { name: 'Transport', amount: 95.25, category: 'Transport' },
  { name: 'Internet', amount: 70, category: 'Utilities' },
  { name: 'Movies', amount: 45.75, category: 'Entertainment' },
  { name: 'Electricity', amount: 85, category: 'Utilities' }
];

function calculateTotal(expenseList) {
  let total = 0;

  for (const expense of expenseList) {
    total += Number(expense.amount);
  }

  const roundedTotal = Math.round((total + Number.EPSILON) * 100) / 100;
  return `$${roundedTotal.toFixed(2)}`;
}

function renderExpenses() {
  const tableBody = document.getElementById('expense-table-body');
  const totalAmount = document.getElementById('total-amount');

  tableBody.innerHTML = '';

  expenses.forEach((expense) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${expense.name}</td>
      <td>${expense.category}</td>
      <td>$${Number(expense.amount).toFixed(2)}</td>
    `;

    tableBody.appendChild(row);
  });

  totalAmount.textContent = calculateTotal(expenses);
}

const expenseForm = document.getElementById('expense-form');

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
  renderExpenses();
});

renderExpenses();
