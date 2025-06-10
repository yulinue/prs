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