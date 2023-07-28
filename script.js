// Fetch products from products.json
fetch('products.json')
    .then(response => response.json())
    .then(products => displayProducts(products));

// Function to display products in the #products section
function displayProducts(products) {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = createProductElement(product);
        productsContainer.appendChild(productElement);
    });
}

// Function to create a product element
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.className = 'product';

    const nameElement = document.createElement('h3');
    nameElement.textContent = product.name;

    const priceElement = document.createElement('p');
    priceElement.textContent = `$${product.price}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCart(product));

    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
    productElement.appendChild(addToCartButton);

    return productElement;
}

// Cart functionality
let cartItems = [];

function addToCart(product) {
    cartItems.push(product);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    const cartHeader = document.createElement('h2');
    cartHeader.textContent = 'Shopping Cart';
    cartContainer.appendChild(cartHeader);

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('p');
        cartItemElement.textContent = `${item.name} - $${item.price}`;
        cartContainer.appendChild(cartItemElement);
    });

    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Checkout';
    checkoutButton.addEventListener('click', () => checkout());
    cartContainer.appendChild(checkoutButton);
}

function checkout() {
    alert('Thank you for shopping with us!');
    cartItems = [];
    updateCart();
}
