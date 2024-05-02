// const cart = document.getElementById('cart');
const total = document.getElementById("total");

// Update the total price
function updateTotal() {
  let totalPrice = 0;
  cart.querySelectorAll(".item").forEach((item) => {
    const price = parseFloat(item.querySelector("p").innerText.split("$")[1]);
    const quantity = parseInt(item.querySelector(".quantity").innerText);
    totalPrice += price * quantity;
  });
  total.innerText = totalPrice.toFixed(2);
}

// Update the quantity of an item
function updateQuantity(item, value) {
  const quantity = parseInt(item.querySelector(".quantity").innerText);
  item.querySelector(".quantity").innerText = Math.max(quantity + value, 0);
  updateTotal();
}

// Like an item
function likeItem(item) {
  const likeButton = item.querySelector(".like");
  likeButton.style.color = likeButton.style.color === "red" ? "black" : "red";
}

// Delete an item
function deleteItem(item) {
  cart.removeChild(item);
  updateTotal();
}

// Add event listeners
cart.querySelectorAll(".item").forEach((item) => {
  item
    .querySelector(".minus")
    .addEventListener("click", () => updateQuantity(item, -1));
  item
    .querySelector(".plus")
    .addEventListener("click", () => updateQuantity(item, 1));
  item.querySelector(".like").addEventListener("click", () => likeItem(item));
  item
    .querySelector(".delete")
    .addEventListener("click", () => deleteItem(item));
});

updateTotal();
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.backgroundColor = "yellow";
  });
});
