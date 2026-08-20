export function calculateTotal(expenseList) {
  const total = expenseList.reduce((sum, expense) => sum + Number(expense.amount), 0);
  const roundedTotal = Math.round((total + Number.EPSILON) * 100) / 100;
  return `$${roundedTotal.toFixed(2)}`;
}

export function renderExpenses(expenses, tableBody, totalAmount) {
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
