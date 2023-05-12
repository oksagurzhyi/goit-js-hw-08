import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const listElement = document.querySelector('.gallery');

const imagesMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img  class="gallery__image" src="${preview}" alt="${description}"/></a></li>`
  )
  .join('');

listElement.insertAdjacentHTML('afterbegin', imagesMarkup);

const options = {
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
};

const lightbox = new SimpleLightbox('.gallery a', options);

console.log(Boolean('videoplayer-current-time'));
console.log(123);
