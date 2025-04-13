
let cart = [];
let totalPrice = 0;

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    totalPrice += price;

    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalElement = document.getElementById("total-price");

    // Clear previous cart items
    cartList.innerHTML = "";

    // Add all items to the cart list
    cart.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Update total price
    totalElement.textContent = totalPrice.toFixed(2);
}
function showMessage() {
    alert("Thanks for ordering! We will contact you soon.");
}
