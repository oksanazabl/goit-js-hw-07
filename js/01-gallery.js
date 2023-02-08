import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.lightbox');
const modalImg = document.querySelector('');

function createGalleryMarkup({ preview, original, description }) {
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </div>;
}

console.log(createGalleryItems(galleryItems));
