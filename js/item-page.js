document.addEventListener('DOMContentLoaded', function () {
  const galleryThumbs = new Swiper('.image-grid__thumbs', {
    direction: 'vertical',
    slidesPerView: 4,
    watchSlidesProgress: true,
    freeMode: true,
  });

  const galleryMain = new Swiper('.image-grid__main', {
    spaceBetween: 10,
    loop: false,
    slidesPerView: 1,
    allowTouchMove: true,
    thumbs: {
      swiper: galleryThumbs
    },
    on: {
      slideChange: function () {
        const index = this.activeIndex;
        galleryThumbs.slideTo(index > 1 ? index - 1 : 0);
      }
    }
  });

  function updateThumbsSlideHeight(mainHeight) {
    const thumbsSlider = document.querySelector('.image-grid__thumbs');
    const slideEl = thumbsSlider?.querySelector('.swiper-slide');

    if (!thumbsSlider || !slideEl) return;

    const computedStyle = getComputedStyle(slideEl);
    const marginBottom = parseFloat(computedStyle.marginBottom) || 0;
    const slidesCount = 4;

    const totalMargins = marginBottom * (slidesCount - 1);
    const slideHeight = (mainHeight - totalMargins) / slidesCount;

    thumbsSlider.style.height = `${mainHeight}px`;

    thumbsSlider.querySelectorAll('.swiper-slide').forEach(slide => {
      slide.style.height = `${slideHeight}px`;
    });
  }

  const mainSlider = document.querySelector('.image-grid__main');

  if (mainSlider) {
    const ro = new ResizeObserver(entries => {
      for (let entry of entries) {
        const height = entry.contentRect.height;
        updateThumbsSlideHeight(height);
      }
    });

    ro.observe(mainSlider);
  }

  // Перестраховка: пересчёт при ресайзе окна
  window.addEventListener('resize', () => {
    const height = document.querySelector('.image-grid__main')?.clientHeight || 0;
    updateThumbsSlideHeight(height);
  });
});





const characteristicsTable = document.querySelector('.characteristics-table');
const sizesBlock = document.querySelector('.sizes-block');

const characteristicsTab = document.querySelector('#characteristicsTab');
const sizesTab = document.querySelector('#sizesTab');

let activeTab = 'characteristics';

function changeTab(tab) {
  activeTab = tab;

  const isCharacteristics = tab === 'characteristics';

  characteristicsTable.style.display = isCharacteristics ? 'flex' : 'none';
  sizesBlock.style.display = isCharacteristics ? 'none' : 'flex';

  characteristicsTab.classList.toggle('active', isCharacteristics);
  sizesTab.classList.toggle('active', !isCharacteristics);
}

characteristicsTab.addEventListener('click', () => changeTab('characteristics'));
sizesTab.addEventListener('click', () => changeTab('sizes'));

changeTab(activeTab);