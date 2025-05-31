function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const countElem = document.getElementById('cart-count');
  if (countElem) {
    countElem.textContent = cart.length;
  }
}

// Call on page load to show count
window.addEventListener('DOMContentLoaded', updateCartCount);

// Also, modify your addToCartAndGo function to update count before redirecting:
function addToCartAndGo(event) {
  event.preventDefault();
  const button = event.currentTarget;

  const name = button.dataset.name || 'Unknown Product';
  const price = parseFloat(button.dataset.price.replace(/[$,]/g, ''));

  if (isNaN(price)) {
    console.error('Invalid price for product:', name);
    return;
  }

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartCount(); // update count badge immediately

  window.location.href = "cart.html"; // redirect to separate cart page
}
