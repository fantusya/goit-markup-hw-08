(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('modal-open');
    refs.modal.classList.remove('is-hidden');
  }

  function onCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('modal-open');
    refs.modal.classList.add('is-hidden');
  }

  function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  }

  function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscPress = e.code === ESC_KEY_CODE;

    if (isEscPress) {
      onCloseModal();
    }
  }
})();
