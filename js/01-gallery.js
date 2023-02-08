import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return ` <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </div>`;
});

const openModal = e => {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const exampl = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: exampl => {
        window.addEventListener('keydown', closeModal);
      },
      onClose: exampl => {
        window.removeEventListener('keydown', closeModal);
      },
    }
  );

  const closeModal = e => {
    if (e.code === 'Escape') {
      exampl.close();
    }
  };
  exampl.show();
};

gallery.insertAdjacentHTML('beforeend', galleryMarkup.join(''));
gallery.addEventListener('click', openModal);
