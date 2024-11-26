// Simple script to simulate adding products to the cart
function addToCart(productName) {
  alert(`${productName} has been added to your cart!`);
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you, ${name}! We will get back to you at ${email}.`);
  document.getElementById('contactForm').reset(); // Clear the form
});
