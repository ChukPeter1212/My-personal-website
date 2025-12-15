// Responsive nav toggle
function setupNav(toggleId, navId){
  const t = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if(!t || !nav) return;
  t.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? '' : 'block';
  });
}
setupNav('navToggle','mainNav');
setupNav('navToggle2','mainNav2');
setupNav('navToggle3','mainNav3');
setupNav('navToggle4','mainNav4');

// Gallery modal
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document?.getElementById('modalClose');

if(gallery){
  gallery.addEventListener('click', (e) => {
    const figure = e.target.closest('figure');
    if(!figure) return;
    const img = figure.querySelector('img');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalCaption.textContent = figure.querySelector('figcaption')?.textContent || '';
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden','false');
  });

  // keyboard support
  gallery.querySelectorAll('figure').forEach(f => {
    f.addEventListener('keydown', (ev) => {
      if(ev.key === 'Enter' || ev.key === ' ') f.click();
    });
  });
}

if(modalClose){
  modalClose.addEventListener('click', closeModal);
}
if(modal){
  modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
}
function closeModal(){
  if(!modal) return;
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden','true');
  modalImg.src=''; modalCaption.textContent='';
}
