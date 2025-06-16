document.addEventListener('scroll', function() {
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

document.addEventListener('DOMContentLoaded', function() {
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


