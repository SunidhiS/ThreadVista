// Function to load and inject the header and footer
function loadHeaderAndFooter() {
  // Load header.html
  fetch("header.html")
    .then((response) => response.text())
    .then((headerHtml) => {
      // Inject header into the page
      document.querySelector("header").innerHTML = headerHtml;
    });

  // Load footer.html
  fetch("footer.html")
    .then((response) => response.text())
    .then((footerHtml) => {
      // Inject footer into the page
      document.querySelector("footer").innerHTML = footerHtml;
    });
}

// Call the function to inject header and footer when the page loads
window.addEventListener("load", loadHeaderAndFooter);

// Function to render products dynamically on home page
// product data
const products = [
  {
    name: "Casual Men's Clothings",
    price: "₹4999",
    imageSrc: "img/menproduct.jpg",
  },
  {
    name: "Casual Men's White Shirt",
    price: "₹2499",
    imageSrc: "img/mshirt1.jpg",
  },
  {
    name: "Men's Red Polo Shirt",
    price: "₹1499",
    imageSrc: "img/mshirt2.jpg",
  },
  {
    name: "Baby Girl's Dress",
    price: "₹2999",
    imageSrc: "img/kids1.jpg",
  },
  {
    name: "Boy's White Shirt",
    price: "₹999",
    imageSrc: "img/kids2.jpg",
  },
  {
    name: "BFF Prited Red Hoodie",
    price: "₹2499",
    imageSrc: "img/mhoddie1.jpg",
  },
  {
    name: "Women's White Hoodie",
    price: "₹1499",
    imageSrc: "img/wtop5.jpg",
  },
  {
    name: "Trendy Fall Gray Sweater",
    price: "₹2999",
    imageSrc: "img/wtop6.jpg",
  },
  // Add more product objects as needed
];

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardContent = `
    <img src="${product.imageSrc}" class="card-img-top" alt="Product Image" />
    <div class="card-body">
      <div class="mt-3 mb-3 align-items-center">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price}</p>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <a href="#" class="btn btn-pink-bg">View</a>
        <a href="#" class="btn btn-pink-bg">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  `;

  card.innerHTML = cardContent;
  return card;
}

function renderProducts() {
  const container = document.getElementById("product-container");

  products.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

// Call the function to render the product cards
renderProducts();
