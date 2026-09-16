(function () {
  function initReviewSlider(root) {
    const slider = root && root.classList && root.classList.contains("review-slider") ? root : root.querySelector(".review-slider");
    if (!slider || slider.dataset.reviewInitialized === "true") return;
    slider.dataset.reviewInitialized = "true";

    const cards = Array.from(slider.querySelectorAll(".review-card"));
    if (cards.length === 0) return;

    let current = 0;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let pointerId = null;

    function getShortestDiff(index) {
      const total = cards.length;
      let diff = index - current;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;
      return diff;
    }

    function update() {
      cards.forEach(function (card, index) {
        const diff = getShortestDiff(index);
        card.classList.remove("is-center", "is-left", "is-right", "is-hidden-left", "is-hidden-right");
        if (diff === 0) card.classList.add("is-center");
        else if (diff === -1) card.classList.add("is-left");
        else if (diff === 1) card.classList.add("is-right");
        else if (diff < -1) card.classList.add("is-hidden-left");
        else card.classList.add("is-hidden-right");
      });
      updateDots();
    }

    let prevBtn = slider.querySelector(".review-carousel-prev");
    let nextBtn = slider.querySelector(".review-carousel-next");

    if (!prevBtn) {
      prevBtn = document.createElement("button");
      prevBtn.className = "review-carousel-prev";
      prevBtn.type = "button";
      prevBtn.setAttribute("aria-label", "Previous review");
      prevBtn.innerHTML = "\u2190";
      slider.appendChild(prevBtn);
    }

    if (!nextBtn) {
      nextBtn = document.createElement("button");
      nextBtn.className = "review-carousel-next";
      nextBtn.type = "button";
      nextBtn.setAttribute("aria-label", "Next review");
      nextBtn.innerHTML = "\u2192";
      slider.appendChild(nextBtn);
    }

    const dotsContainer = document.createElement("div");
    dotsContainer.className = "review-dots";
    cards.forEach(function (_, i) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Go to review " + (i + 1));
      dot.addEventListener("click", function () { current = i; update(); });
      dotsContainer.appendChild(dot);
    });
    slider.appendChild(dotsContainer);

    function updateDots() {
      const dots = dotsContainer.querySelectorAll("button");
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === current);
      });
    }

    function goNext() {
      current = (current + 1) % cards.length;
      update();
    }

    function goPrev() {
      current = (current - 1 + cards.length) % cards.length;
      update();
    }

    prevBtn.addEventListener("click", goPrev);
    nextBtn.addEventListener("click", goNext);

    slider.addEventListener("pointerdown", function (e) {
      if (e.target.closest(".review-carousel-prev, .review-carousel-next, .review-dots")) return;
      isDragging = true;
      startX = e.clientX;
      currentX = startX;
      pointerId = e.pointerId;
      try { slider.setPointerCapture(pointerId); } catch (_) {}
    });

    slider.addEventListener("pointermove", function (e) {
      if (!isDragging) return;
      currentX = e.clientX;
    });

    slider.addEventListener("pointerup", function (e) {
      if (!isDragging) return;
      isDragging = false;
      try { slider.releasePointerCapture(pointerId); } catch (_) {}
      const diff = e.clientX - startX;
      if (diff < -40) goNext();
      else if (diff > 40) goPrev();
    });

    slider.addEventListener("pointercancel", function () {
      isDragging = false;
    });

    update();
  }

  window.initReviewTestimonialSlider = initReviewSlider;

  function autoInit() {
    document.querySelectorAll(".review-slider").forEach(initReviewSlider);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInit);
  } else {
    autoInit();
  }
})();