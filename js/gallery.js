'use strict';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


//* Функція для створення карточки createGalleryCard(cardInfo)
const createGalleryCard = imageInfo => {
  
  //* Повернення шаблоного рядка з розміткою
  return `
    <li class="gallery-item">
  <a class="gallery-link" href="${imageInfo.original}">
    <img
      class="gallery-image"
      src="${imageInfo.preview}"
      data-source="${imageInfo.original}"
      alt="${imageInfo.description}"
    />
  </a>
</li>
  `;
};

//* Створення масиву рядків із елементами
const galleryCardsTemplate = images.map(image => createGalleryCard(image)).join('');

//* Вставка елементів на сторінку (innerHTML/insertAdjacentHTML)
const galleryListEl = document.querySelector('.gallery');

// galleryListEl.innerHTML = galleryCardsTemplate;
galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

//* Додаємо слухач події для відкриття модального вікна
galleryListEl.addEventListener('click', event => {
  event.preventDefault();

  // Перевірка чи кліком був елемент <img>
  const clickedElement = event.target;
  if (clickedElement.tagName !== 'IMG') return;
  // console.dir(clickedElement);
  // console.log('clickedElement :>> ', clickedElement.dataset.source);
  // URL оригінального зображення
  const originalImageURL = clickedElement.dataset.source;

  // Створюємо і показуємо модальне вікно
  const instance = basicLightbox.create(`
    <img src="${originalImageURL}" alt="${clickedElement.alt}" />
  `);

  instance.show();
});