// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

mobileMenuBtn?.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

mobileMenuClose?.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

mobileMenuBackdrop?.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

// Monthly/Yearly tab toggle
document.getElementById('monthly-tab')?.addEventListener('click', function() {
  this.classList.add('bg-black-12');
  this.classList.remove('bg-transparent');
  const monthlySpan = this.querySelector('span');
  monthlySpan.classList.remove('text-grey-60');
  monthlySpan.classList.add('text-white');
  
  const yearlyTab = document.getElementById('yearly-tab');
  yearlyTab.classList.remove('bg-black-12');
  yearlyTab.classList.add('bg-transparent');
  const yearlySpan = yearlyTab.querySelector('span');
  yearlySpan.classList.add('text-grey-60');
  yearlySpan.classList.remove('text-white');
});

document.getElementById('yearly-tab')?.addEventListener('click', function() {
  this.classList.add('bg-black-12');
  this.classList.remove('bg-transparent');
  const yearlySpan = this.querySelector('span');
  yearlySpan.classList.remove('text-grey-60');
  yearlySpan.classList.add('text-white');
  
  const monthlyTab = document.getElementById('monthly-tab');
  monthlyTab.classList.remove('bg-black-12');
  monthlyTab.classList.add('bg-transparent');
  const monthlySpan = monthlyTab.querySelector('span');
  monthlySpan.classList.add('text-grey-60');
  monthlySpan.classList.remove('text-white');
});

