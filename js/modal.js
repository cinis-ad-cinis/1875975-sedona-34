const searchButton = document.querySelector('.search-hotel__link');
const modal = document.querySelector('.modal-container');
const closeButton = document.querySelector('.modal__button-close');

const toggleModal = () => {
  modal.classList.toggle('modal-container--close');
}

searchButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleModal();
});

closeButton.addEventListener('click', toggleModal);
