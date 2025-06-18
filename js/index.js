document.addEventListener('scroll', function () {
    const bg = document.querySelector('.bg-svg');
    const scrollPosition = window.pageYOffset;
    bg.style.transform = `translateX(-50%) translateY(-${scrollPosition}px)`;
});

const footerNavColumns = document.querySelectorAll('.footer-nav__column');
footerNavColumns.forEach(footerNavColumn => {
    const openBtn = footerNavColumn.querySelector('#openFooterNavBtn');
    openBtn.addEventListener('click', () => {
        footerNavColumn.classList.toggle('active');
    })
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    const overlay = document.querySelector('#overlay');
    let activeDropdown = null;
    let hoverTimeout;

    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
        overlay.classList.remove('active');
        activeDropdown = null;
    }

    dropdownLinks.forEach(link => {
        const dropdown = link.closest('.dropdown');
        const menu = dropdown.querySelector('.dropdown-menu__container');

        link.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            if (activeDropdown && activeDropdown !== dropdown) {
                activeDropdown.classList.remove('open');
            }
            dropdown.classList.add('open');
            overlay.classList.add('active');
            activeDropdown = dropdown;
        });

        dropdown.addEventListener('mouseleave', (e) => {
            const relatedDropdown = e.relatedTarget?.closest('.dropdown');
            if (!relatedDropdown) {
                hoverTimeout = setTimeout(() => {
                    if (!menu.matches(':hover') && !link.matches(':hover')) {
                        closeAllDropdowns();
                    }
                }, 150);
            }
        });

        menu.addEventListener('mouseenter', () => clearTimeout(hoverTimeout));
        menu.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(closeAllDropdowns, 150);
        });
    });

    overlay.addEventListener('click', closeAllDropdowns);
});

const openBurgerBtn = document.querySelector('#openBurger');
const closeBurgerBtn = document.querySelector('#closeBurger');
const burgerMenu = document.querySelector('.burger-menu__container');
const body = document.body;

openBurgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add('active');
    body.classList.add('lock');
});

closeBurgerBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    body.classList.remove('lock');
});

document.addEventListener('DOMContentLoaded', function () {
    Inputmask({
        mask: "+7 (999) 999-99-99", // Маска для номера телефона
        placeholder: "", // Убираем плейсхолдер
        showMaskOnFocus: false, // Скрываем маску при фокусе
        showMaskOnHover: false // Скрываем маску при наведении
    }).mask(document.getElementById('phone-input'));
});

const openModal = document.querySelector('#openModal');
const openModalBurger = document.querySelector('#openModalBurger');
const closeModals = document.querySelectorAll('#close-modal-btn');
const modalOverlay = document.querySelector('#modal-overlay');
const mainModal = document.querySelector('#mainModal');
const successBlock = document.querySelector('.success-block');
const modalForm = document.querySelector('.modal-form');

openModal.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    body.classList.add('lock');
})

openModalBurger.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    body.classList.add('lock');
    burgerMenu.classList.remove('active');
})

closeModals.forEach(closeModal => {
    closeModal.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        body.classList.remove('lock');
        mainModal.style.display = 'flex';
        successBlock.style.display = 'none';
    })
});

modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    mainModal.style.display = 'none';
    successBlock.style.display = 'flex';
})