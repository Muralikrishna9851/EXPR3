let cart = [];
let cartCount = document.getElementById('cart-count');
let cartItemsList = document.getElementById('cart-items');
let totalPriceElement = document.getElementById('total-price');

function addToCart(id, name, price) {
    // Check if the product already exists in the cart
    let existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartItemsList.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function toggleCart() {
    let modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function checkout() {
    alert(`Total: $${totalPriceElement.textContent}. Thank you for your purchase!`);
    cart = [];
    updateCart();
    toggleCart();
}
