function applyModifiersFooterButtons() {
    let firstBtn = document.querySelector(".footer__top-button");
    let secondBtn = document.querySelector(".footer__bottom-button");
    let deviceWidth = window.innerWidth;

    firstBtn.classList.remove("button_medium-large", "button_medium-small", "button_regular-large");
    secondBtn.classList.remove("button_medium-large", "button_medium-small", "button_regular-large");

    if (deviceWidth <= 430) {
        firstBtn.classList.add("button_medium-small");
        secondBtn.classList.add("button_regular-large");
    } else if (deviceWidth <= 768) {
        firstBtn.classList.add("button_medium-large");
        secondBtn.classList.add("button_medium-small");
    } else {
        firstBtn.classList.add("button_medium-large");
        secondBtn.classList.add("button_regular-small");
    }
}
window.addEventListener('load', function () {
    applyModifiersFooterButtons();
});
window.addEventListener('resize', function () {
    applyModifiersFooterButtons();
});
