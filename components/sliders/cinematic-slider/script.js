(function() {
  function initCinematicSlider(root) {
    const slider = root.classList && root.classList.contains('cinematic-slider')
      ? root
      : root.querySelector('.cinematic-slider');

    if (!slider) return;

    const slidesData = [
      { title: "Eternal Silence", sub: "Mountain Studies — Vol. III", desc: "Where the air thins and the noise fades, only scale remains.", meta: "2024 · Dolomites, Italy" },
      { title: "Veil of Clouds", sub: "Mountain Studies — Vol. V", desc: "A monochrome study of weather rolling over stone.", meta: "2024 · Mount Kazbek, Georgia" },
      { title: "Last Light", sub: "Mountain Studies — Vol. I", desc: "The golden breath before night swallows the ridge.", meta: "2023 · Kashmir, India" },
      { title: "Twilight Bodies", sub: "Mountain Studies — Vol. VII", desc: "Shadows lengthen into memory across the Minas Gerais range.", meta: "2024 · Minas Gerais, Brazil" }
    ];

    const slideElements = slider.querySelectorAll(".cinematic-slide");
    const title = slider.querySelector(".slide-title");
    const subtitle = slider.querySelector(".slide-subtitle");
    const description = slider.querySelector(".slide-description");
    const meta = slider.querySelector(".slide-meta");
    const currentSlideEl = slider.querySelector("#currentSlide") || slider.querySelector("[data-counter]");
    const progressBar = slider.querySelector(".slider-progress-bar");
    const previousButton = slider.querySelector("[data-prev]") || slider.querySelector(".slider-control:first-child");
    const nextButton = slider.querySelector("[data-next]") || slider.querySelector(".slider-control:last-child");
    const playButton = slider.querySelector("[data-play]") || slider.querySelector(".slider-control:nth-child(2)");
    const playIcon = slider.querySelector("#playIcon") || slider.querySelector("[data-play-icon]");

    let current = 0;
    let playing = true;
    let interval;
    const intervalTime = 5500;

    function updateSlide() {
      slideElements.forEach(function(slide, index) {
        slide.classList.toggle("is-active", index === current);
      });

      if (title) {
        title.classList.remove("slide-title");
        void title.offsetWidth;
        title.classList.add("slide-title");
      }

      if (subtitle) subtitle.textContent = slidesData[current].sub;
      if (title) title.textContent = slidesData[current].title;
      if (description) description.textContent = slidesData[current].desc;
      if (meta) meta.textContent = slidesData[current].meta;
      if (currentSlideEl) currentSlideEl.textContent = String(current + 1).padStart(2, "0");

      restartProgress();
    }

    function next() {
      current = (current + 1) % slidesData.length;
      updateSlide();
    }

    function previous() {
      current = (current - 1 + slidesData.length) % slidesData.length;
      updateSlide();
    }

    function startAutoplay() {
      clearInterval(interval);
      if (!playing) return;
      interval = setInterval(next, intervalTime);
      restartProgress();
    }

    function stopAutoplay() {
      clearInterval(interval);
    }

    function restartProgress() {
      if (progressBar) {
        progressBar.classList.remove("animate");
        void progressBar.offsetWidth;
        if (playing) progressBar.classList.add("animate");
      }
    }

    function togglePlay() {
      playing = !playing;
      if (playing) {
        if (playIcon) playIcon.textContent = "Ⅱ";
        if (playButton) playButton.setAttribute("aria-label", "Pause slideshow");
        startAutoplay();
      } else {
        if (playIcon) playIcon.textContent = "▶";
        if (playButton) playButton.setAttribute("aria-label", "Play slideshow");
        stopAutoplay();
        restartProgress();
      }
    }

    if (nextButton) {
      nextButton.addEventListener("click", function() { next(); startAutoplay(); });
    }

    if (previousButton) {
      previousButton.addEventListener("click", function() { previous(); startAutoplay(); });
    }

    if (playButton) {
      playButton.addEventListener("click", togglePlay);
    }

    slider.addEventListener("touchstart", function(e) {
      slider._touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener("touchend", function(e) {
      const distance = slider._touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(distance) < 50) return;
      if (distance > 0) { next(); } else { previous(); }
      startAutoplay();
    }, { passive: true });

    updateSlide();
    startAutoplay();
  }

  // Auto-initialize
  function autoInit() {
    document.querySelectorAll('.cinematic-slider').forEach(initCinematicSlider);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
})();
