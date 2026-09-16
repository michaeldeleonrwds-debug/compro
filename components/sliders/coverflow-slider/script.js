(function() {
  function initCoverflow(root) {
    const component = root.classList && root.classList.contains('coverflow-component')
      ? root
      : root.querySelector('.coverflow-component');

    if (!component) return;

    const cards = Array.from(component.querySelectorAll('.coverflow-card'));
    const prev = component.querySelector('.coverflow-prev');
    const next = component.querySelector('.coverflow-next');
    const dotsContainer = component.querySelector('.coverflow-dots');

    if (!cards.length) return;

    let current = 2;

    // Create dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      cards.forEach(function(_, index) {
        const dot = document.createElement('button');
        dot.className = 'coverflow-dot';
        dot.setAttribute('aria-label', 'Go to slide ' + (index + 1));
        dot.addEventListener('click', function() {
          current = index;
          update();
        });
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.coverflow-dot')) : [];

    function update() {
      cards.forEach(function(card, index) {
        const offset = index - current;
        const distance = Math.abs(offset);

        if (distance > 2) {
          card.style.display = 'none';
          return;
        }

        card.style.display = 'block';

        const x = offset * 220;
        const z = -distance * 200;
        const rotation = offset * -25;
        const scale = offset === 0 ? 1 : .78;

        card.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotation}deg) scale(${scale})`;
        card.style.zIndex = 30 - distance;
        card.style.opacity = 1 - distance * .15;

        if (offset === 0) {
          card.classList.add('is-active');
          card.style.filter = 'none';
        } else {
          card.classList.remove('is-active');
          card.style.filter = `brightness(${.5 - distance * .1})`;
        }
      });

      dots.forEach(function(dot, index) {
        dot.classList.toggle('is-active', index === current);
      });
    }

    if (prev) {
      prev.addEventListener('click', function() {
        if (current > 0) {
          current--;
          update();
        }
      });
    }

    if (next) {
      next.addEventListener('click', function() {
        if (current < cards.length - 1) {
          current++;
          update();
        }
      });
    }

    component.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft' && current > 0) {
        current--;
        update();
      }
      if (event.key === 'ArrowRight' && current < cards.length - 1) {
        current++;
        update();
      }
    });

    let startX = 0;
    component.addEventListener('touchstart', function(e) {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });

    component.addEventListener('touchend', function(e) {
      const endX = e.changedTouches[0].screenX;
      const distance = startX - endX;
      if (Math.abs(distance) < 50) return;
      if (distance > 0 && current < cards.length - 1) {
        current++;
      } else if (distance < 0 && current > 0) {
        current--;
      }
      update();
    }, { passive: true });

    component.setAttribute('tabindex', '0');
    update();
  }

  // Auto-initialize
  function autoInit() {
    document.querySelectorAll('.coverflow-component').forEach(initCoverflow);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
})();
