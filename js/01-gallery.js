import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.lightbox');
const modalImg = document.querySelector('.lightbox_img');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return ` <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </div>`;
});

gallery.insertAdjacentHTML('beforeend', galleryMarkup.join(''));

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  modal.classList.add('is-open');
  modalImg.src = event.target.dataset.source;
  modalImg.alt = event.target.alt;
});

modal.addEventListener('click', event => {
  if (event.target.nodeName !== 'IMG') {
    modal.classList.remove('is-open');
    modalImg.src = '';
    modalImg.alt = '';
  }
});
