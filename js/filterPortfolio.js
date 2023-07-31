(() => {
//   const refs = {
//     buttonList: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//     mobileList: document.querySelector('.mobile-menu__nav'),
//   };
    const ACTIVE_TAG_CLASS = "filter__btn--active";
    const HIDDEN_ITEM_CLASS = "portfolio__work-item--hidden"
    let selectedButton = 'all';

    const buttonList = document.querySelector(".portfolio__btn-list");
    buttonList.addEventListener("click", onbuttonListClick)

    function onbuttonListClick(e) {
        if (e.target.nodeName !== "BUTTON") {
            return;
        }
        const currentActiveButton = document.querySelector(`.${ACTIVE_TAG_CLASS}`);
        currentActiveButton?.classList.remove(ACTIVE_TAG_CLASS);

        const nextActiveButton = e.target;
        nextActiveButton.classList.add(ACTIVE_TAG_CLASS);

        selectedButton = nextActiveButton.dataset.value;

        const itemsList = document.querySelectorAll(`.portfolio__work-item`);
        itemsList.forEach(el => {
            if (el.dataset.value !== selectedButton && selectedButton !== 'all') {
                el.classList.add(HIDDEN_ITEM_CLASS);
            } else {
                el.classList.remove(HIDDEN_ITEM_CLASS);
            }
        })

    }
})();