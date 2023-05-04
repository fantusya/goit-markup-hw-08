(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    mobileList: document.querySelector('.mobile-menu__nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.mobileList.addEventListener('click', onMobileListClick);

  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    refs.menu.classList.toggle('is-closed');
  }

  function onMobileListClick(e) {
    if (e.target.classList.contains('mobile-menu__link')) {
      toggleMenu();
    }
  }
})();
