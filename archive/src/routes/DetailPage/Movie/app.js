(function(){
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileMenuClose');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (!btn || !menu) return;
  const open = () => { menu.classList.remove('hidden'); btn.setAttribute('aria-expanded','true'); document.body.classList.add('overflow-hidden'); };
  const close = () => { menu.classList.add('hidden'); btn.setAttribute('aria-expanded','false'); document.body.classList.remove('overflow-hidden'); };
  btn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);
  backdrop && backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });
})();

