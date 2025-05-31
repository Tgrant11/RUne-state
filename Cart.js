document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartBody = document.getElementById('cart-body');
  const cartTotalElem = document.getElementById('cart-total');

  if (cart.length === 0) {
    document.getElementById('cart-table').style.display = 'none';
    document.getElementById('empty-msg').style.display = 'block';
    return;
  }

  document.getElementById('cart-table').style.display = 'table';
  document.getElementById('empty-msg').style.display = 'none';

  // Aggregate quantities of the same product
  const aggregatedCart = {};
  cart.forEach(item => {
    const name = item.name;
    const price = Number(item.price);
    if (!aggregatedCart[name]) {
      aggregatedCart[name] = { name, price, quantity: 0 };
    }
    aggregatedCart[name].quantity += 1;
  });

  let total = 0;

  Object.values(aggregatedCart).forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>${item.quantity}</td>
      <td>${subtotal.toFixed(2)}</td>
    `;
    cartBody.appendChild(tr);
  });

  cartTotalElem.textContent = total.toFixed(2);

  // Clear Cart button logic
  const clearCartBtn = document.getElementById('clear-cart-btn');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      localStorage.removeItem('cart');
      location.reload();
    });
  }
});
