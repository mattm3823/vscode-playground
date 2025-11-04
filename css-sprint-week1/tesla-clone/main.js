// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Custom order click animation
const orderBtn = document.getElementById('orderBtn');
orderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  orderBtn.innerText = 'Ordering...';
  orderBtn.style.background = '#3e3f42';
  setTimeout(() => {
    orderBtn.innerText = 'Order Placed ✅';
    orderBtn.style.background = '#0a0a0a';
  }, 1200);
});
