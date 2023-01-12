import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryWrapper = document.querySelector('.gallery');


const addGalleryItems = galleryItems.map((item) =>`
<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
).join('')

galleryWrapper.insertAdjacentHTML('beforeend', addGalleryItems);
galleryWrapper.addEventListener('click', handle);


function handle(item) { 
   
    item.preventDefault();   
    const instance = basicLightbox.create(`<img src="${item.target.dataset.source}" width="800" height="600">`);

    instance.show();  
    
    document.addEventListener('keydown', event => { 
        if (event.key === "Escape") { 
            instance.close();
        }
    }); 
}

