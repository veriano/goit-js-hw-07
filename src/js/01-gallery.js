import { galleryItems } from './gallery-items.js';
// Change code below this line
const getGallery = document.querySelector('.gallery');

const createGallery = (galleryItems) =>
    galleryItems.map(({ preview, original, description }) => 
         `<div class="gallery__item">
           <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
             src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>`).join('');

getGallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));

getGallery.addEventListener('click', onElementGalleryClick);

function onElementGalleryClick(evt) {
    evt.preventDefault();

    if (!evt.target.nodeName === 'img') {
        return;
    };
    const url = evt.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src=${url} width="800" height="600">
`,{
        onShow: (instance) => {
            window.addEventListener('keydown', (event) => {
                if (event.code === 'Escape') {
                    instance.close();
                }
            });
        }
    })
    instance.show()
};




