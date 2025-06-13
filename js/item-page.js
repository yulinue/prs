document.addEventListener('DOMContentLoaded', function () {
    const galleryThumbs = new Swiper('.image-grid__thumbs', {
      direction: 'vertical',
      slidesPerView: 4,
      watchSlidesProgress: true,
      allowTouchMove: false, // запрещает скролл руками
    });
  
    const galleryMain = new Swiper('.image-grid__main', {
      spaceBetween: 10,
      loop: false,
      slidesPerView: 1,
      allowTouchMove: true,
      thumbs: {
        swiper: galleryThumbs
      }
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