// Add simple input animation
const searchInput = document.getElementById('search');

searchInput.addEventListener('focus', () => {
  document.querySelector('.search-box').style.boxShadow = '0 1px 6px rgba(32,33,36,0.4)';
});

searchInput.addEventListener('blur', () => {
  document.querySelector('.search-box').style.boxShadow = 'none';
});

// Add click functions
document.getElementById('searchBtn').addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
});

document.getElementById('luckyBtn').addEventListener('click', () => {
  window.open('https://www.google.com/doodles');
});
