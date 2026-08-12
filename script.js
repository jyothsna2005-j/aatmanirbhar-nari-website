const products = [
  {name: "Handmade Candles", price: "₹299", desc: "Organic soy wax candles by Priya from Hyderabad"},
  {name: "Home Pickles", price: "₹199", desc: "Traditional mango & lemon pickles by Lakshmi"},
  {name: "Knitted Sweaters", price: "₹899", desc: "Winter wear made by Self Help Group, Vijayawada"}
];

function loadProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p><b>${product.price}</b></p>
      <p>${product.desc}</p>
      <button onclick="contactSeller('${product.name}')">Contact on WhatsApp</button>
    `;
    productList.appendChild(card);
  });
}

function showMessage() {
  alert("Welcome to Aatmanirbhar Nari! Registration coming soon 💪");
}

function contactSeller(productName) {
  alert(`Connecting you to seller for: ${productName}`);
}

loadProducts();