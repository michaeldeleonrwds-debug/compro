(function() {
  function initBlogSlider(root) {
    const slider = root.classList && root.classList.contains('blog-slider')
      ? root
      : root.querySelector('.blog-slider');
    
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.blog-slider__item');
    const pagination = slider.querySelector('.blog-slider__pagination');
    
    if (!slides.length) return;
    
    let currentIndex = 0;
    let autoplayTimer = null;
    
    function goToSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('swiper-slide-active');
        if (i === index) {
          slide.classList.add('swiper-slide-active');
        }
      });
      
      if (pagination) {
        const bullets = pagination.querySelectorAll('.swiper-pagination-bullet');
        bullets.forEach((bullet, i) => {
          bullet.classList.remove('swiper-pagination-bullet-active');
          if (i === index) {
            bullet.classList.add('swiper-pagination-bullet-active');
          }
        });
      }
      
      currentIndex = index;
    }
    
    function nextSlide() {
      const next = (currentIndex + 1) % slides.length;
      goToSlide(next);
    }
    
    function prevSlide() {
      const prev = (currentIndex - 1 + slides.length) % slides.length;
      goToSlide(prev);
    }
    
    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(nextSlide, 4000);
    }
    
    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }
    
    // Create pagination bullets
    if (pagination) {
      pagination.innerHTML = '';
      slides.forEach((_, i) => {
        const bullet = document.createElement('span');
        bullet.className = 'swiper-pagination-bullet' + (i === 0 ? ' swiper-pagination-bullet-active' : '');
        bullet.addEventListener('click', () => {
          goToSlide(i);
          startAutoplay();
        });
        pagination.appendChild(bullet);
      });
    }
    
    // Initialize
    goToSlide(0);
    startAutoplay();
    
    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
    
    // Touch support
    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      stopAutoplay();
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      
      startAutoplay();
    }, { passive: true });
  }
  
  // Auto-initialize
  function autoInit() {
    document.querySelectorAll('.blog-slider').forEach(initBlogSlider);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
})();
