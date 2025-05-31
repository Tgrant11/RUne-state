
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const countEl = document.querySelector('.cart-count');
  if (countEl) {
    countEl.textContent = totalItems;
    countEl.style.display = totalItems > 0 ? 'inline-block' : 'none';
  }
}

function addToCartAndGo(event) {
  event.preventDefault();

  const button = event.currentTarget;


  const rawPrice = button.getAttribute('data-price') || "0";
  const price = parseFloat(rawPrice.replace(/[^0-9.]/g, ""));

  if (isNaN(price)) {
    console.error(`Invalid price for product "${button.getAttribute('data-name')}". Value received: ${rawPrice}`);
    return;
  }

  const product = {
    name: button.getAttribute('data-name'),
    price: price,
    quantity: 1
  };


  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingIndex = cart.findIndex(item => item.name === product.name);

  if (existingIndex >= 0) {

    cart[existingIndex].quantity += 1;
  } else {

    cart.push(product);
  }


  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartCount();

  window.location.href = 'cart.html';
}


document.addEventListener('DOMContentLoaded', updateCartCount);
