document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

  const searchButton = document.getElementById('searchButton');
  const mobileSearch = document.getElementById('mobileSearch');

  if (mobileMenuBtn && mobileMenu && mobileMenuClose && mobileMenuBackdrop) {
    // Open menu
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      // Hide mobile search bar if open when menu is opened
      mobileSearch.classList.add('hidden'); 
    });

    // Close menu with the 'X' button
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });

    // Close menu by clicking the backdrop
    mobileMenuBackdrop.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  if (searchButton && mobileSearch) {
    // Toggle mobile search bar visibility
    searchButton.addEventListener('click', () => {
      mobileSearch.classList.toggle('hidden');
      // Close mobile menu if open when search is toggled
      mobileMenu.classList.add('hidden'); 
    });
  }
});