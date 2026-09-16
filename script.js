/**
 * Components — Premium UI Component Library
 * Pure HTML, CSS, and vanilla JavaScript.
 * All components are defined inline in this file.
 */

(function () {
  "use strict";

  // Shared image set reused across components
  const images = [
    "https://images.pexels.com/photos/36754317/pexels-photo-36754317.jpeg",
    "https://images.pexels.com/photos/39180930/pexels-photo-39180930.jpeg",
    "https://images.pexels.com/photos/39300342/pexels-photo-39300342.jpeg",
    "https://images.pexels.com/photos/14200080/pexels-photo-14200080.jpeg",
    "https://images.pexels.com/photos/9001212/pexels-photo-9001212.jpeg",
    "https://images.pexels.com/photos/39216851/pexels-photo-39216851.jpeg",
    "https://images.pexels.com/photos/39309937/pexels-photo-39309937.jpeg",
    "https://images.pexels.com/photos/39008912/pexels-photo-39008912.jpeg",
    "https://images.pexels.com/photos/39504266/pexels-photo-39504266.jpeg",
    "https://images.pexels.com/photos/39315284/pexels-photo-39315284.jpeg"
  ];

  // ============================================================
  // State
  // ============================================================
  let currentCategory = "all";
  let currentFilter = "all";
  let searchQuery = "";
  let activeModalComponent = null;

  // ============================================================
  // Categories
  // ============================================================
  const categories = [
    { id: "all", name: "All", desc: "Browse every reusable UI component in the library." },
    { id: "sliders", name: "Sliders", desc: "Interactive carousel and slider components." },
    { id: "gallery", name: "Gallery", desc: "Image grids, masonry, and reveal galleries." },
    { id: "reviews", name: "Reviews", desc: "Testimonials and review components." },
    { id: "cards", name: "Cards", desc: "Hover, glass, tilt, and product cards." },
    { id: "marquee", name: "Marquee", desc: "Infinite scrolling text, logos, and images." },
    { id: "cursor", name: "Cursor Effects", desc: "Cursor follow, spotlight, and magnetic effects." },
    { id: "text", name: "Text Effects", desc: "Reveal, gradient, and animated typography." },
    { id: "buttons", name: "Buttons", desc: "Premium interactive button components." },
    { id: "navigation", name: "Navigation", desc: "Navbars, sidebars, and menus." },
    { id: "hero", name: "Hero Sections", desc: "Landing hero layouts and styles." },
    { id: "loaders", name: "Loaders", desc: "Loading indicators and skeletons." },
    { id: "backgrounds", name: "Backgrounds", desc: "Animated mesh, particles, and grids." },
    { id: "webgl", name: "3D / WebGL", desc: "CSS 3D objects and interactive scenes." },
    { id: "forms", name: "Forms", desc: "Inputs, toggles, and form elements." },
    { id: "misc", name: "Misc", desc: "Tabs, accordions, tooltips, and more." }
  ];

  // ============================================================
  // Components
  // ============================================================
  const components = [
{
      id: "ghl-infinite-carousel",
      name: "GHL Infinite Carousel",
      description: "Draggable infinite carousel built for GoHighLevel with clone-based looping, floating arrows, and dots.",
      category: "sliders",
      tags: ["free", "interactive", "javascript", "ghl"],
      preview: `
        <div class="ghl-carousel-preview">
          <div class="ghl-carousel-preview__window">
            <div class="ghl-carousel-preview__track">
              <div class="ghl-carousel-preview__card"><img src="${images[0]}" alt="" /></div>
              <div class="ghl-carousel-preview__card"><img src="${images[1]}" alt="" /></div>
              <div class="ghl-carousel-preview__card"><img src="${images[2]}" alt="" /></div>
              <div class="ghl-carousel-preview__card"><img src="${images[3]}" alt="" /></div>
            </div>
          </div>
          <div class="ghl-carousel-preview__arrows">
            <button class="ghl-carousel-preview__prev" aria-label="Previous">&#8249;</button>
            <button class="ghl-carousel-preview__next" aria-label="Next">&#8250;</button>
          </div>
          <div class="ghl-carousel-preview__dots"><span class="active"></span><span></span><span></span><span></span></div>
        </div>
      `,
      html: `<div class="slider-section">
    <div class="carousel">
        <div class="inner">
            <div class="c-column"><div class="inner"><img src="${images[0]}" alt="" /></div></div>
            <div class="c-column"><div class="inner"><img src="${images[1]}" alt="" /></div></div>
            <div class="c-column"><div class="inner"><img src="${images[2]}" alt="" /></div></div>
        </div>
    </div>
</div>

<div id="ghl-loop-pagination"></div>`,
      css: `/* GHL Infinite Draggable Carousel CSS */\n.slider-section {\n    width: 100% !important; max-width: 100% !important;\n    position: relative !important; overflow: hidden !important;\n    box-sizing: border-box !important;\n}\n.slider-section .carousel {\n    width: 100% !important; max-width: 100% !important;\n    position: relative !important; overflow: hidden !important;\n    box-sizing: border-box !important;\n}\n.slider-section .carousel > .inner {\n    display: flex !important; flex-direction: row !important; flex-wrap: nowrap !important;\n    justify-content: flex-start !important; align-items: stretch !important;\n    width: max-content !important; min-width: max-content !important; max-width: none !important;\n    margin: 0 !important; padding: 0 !important; gap: 0 !important;\n    position: relative !important; box-sizing: border-box !important;\n    user-select: none !important; -webkit-user-select: none !important;\n    touch-action: pan-y !important; cursor: grab !important;\n    will-change: transform !important; transition: transform 450ms ease !important;\n}\n.slider-section .carousel > .inner.ghl-loop-dragging {\n    cursor: grabbing !important; transition: none !important;\n}\n.slider-section .carousel > .inner.ghl-loop-no-transition {\n    transition: none !important;\n}\n.slider-section .carousel > .inner > .c-column {\n    display: block !important; flex-grow: 0 !important; flex-shrink: 0 !important;\n    height: auto !important; padding: 0 !important; float: none !important;\n    box-sizing: border-box !important; position: relative !important;\n}\n.slider-section .carousel > .inner > .c-column > .inner {\n    width: 100% !important; height: 100% !important; box-sizing: border-box !important;\n}\n.slider-section .carousel .c-image,\n.slider-section .carousel .image-container {\n    width: 100% !important; max-width: 100% !important; box-sizing: border-box !important;\n}\n.slider-section .carousel img {\n    display: block !important; width: 100% !important; max-width: 100% !important;\n    height: 260px !important; object-fit: cover !important; object-position: center !important;\n    border-radius: 10px !important; pointer-events: none !important;\n    -webkit-user-drag: none !important; box-sizing: border-box !important;\n}\n#ghl-loop-arrow-overlay {\n    position: absolute !important; pointer-events: none !important;\n    z-index: 2147483000 !important; box-sizing: border-box !important;\n}\n.ghl-loop-arrow {\n    position: absolute !important; top: 50% !important;\n    transform: translateY(-50%) !important; width: 38px !important; height: 38px !important;\n    padding: 0 !important; margin: 0 !important;\n    border: 1px solid rgba(255,255,255,0.85) !important; border-radius: 50% !important;\n    background: rgba(90,90,90,0.90) !important; color: #ffffff !important;\n    display: flex !important; align-items: center !important; justify-content: center !important;\n    font-family: Arial, sans-serif !important; font-size: 25px !important;\n    font-weight: 400 !important; line-height: 1 !important; cursor: pointer !important;\n    pointer-events: auto !important; opacity: 1 !important;\n    transition: background 200ms ease, transform 200ms ease !important;\n}\n#ghl-loop-prev { left: 12px !important; }\n#ghl-loop-next { right: 12px !important; }\n.ghl-loop-arrow:hover { background: #50C1AF !important; }\n#ghl-loop-pagination {\n    width: 100% !important; display: flex !important;\n    align-items: center !important; justify-content: center !important;\n    gap: 6px !important; min-height: 16px !important;\n    margin-top: 28px !important; margin-bottom: 5px !important;\n    box-sizing: border-box !important;\n}\n.ghl-loop-dot {\n    appearance: none !important; -webkit-appearance: none !important;\n    width: 6px !important; height: 6px !important; min-width: 6px !important;\n    padding: 0 !important; margin: 0 !important; border: none !important;\n    border-radius: 999px !important; background: rgba(255,255,255,0.60) !important;\n    opacity: 1 !important; cursor: pointer !important;\n    transition: width 250ms ease, min-width 250ms ease, background 250ms ease !important;\n}\n.ghl-loop-dot.active {\n    width: 34px !important; min-width: 34px !important;\n    background: #ffffff !important;\n}\n@media (max-width: 1024px) {\n    .slider-section .carousel img { height: 230px !important; }\n    #ghl-loop-prev { left: 7px !important; }\n    #ghl-loop-next { right: 7px !important; }\n}\n@media (max-width: 767px) {\n    .slider-section { padding: 20px 30px 20px 10px !important; }\n    button#ghl-loop-next, button#ghl-loop-prev { display: none !important; }\n    .slider-section .carousel img { height: 210px !important; }\n    .ghl-loop-arrow { width: 34px !important; height: 34px !important; font-size: 22px !important; }\n    .ghl-loop-dot.active { width: 26px !important; min-width: 26px !important; }\n}`,
      js: `(function () {\n\n    const CONFIG = {\n        desktopCards: 3, laptopCards: 3, tabletCards: 2, mobileCards: 1,\n        desktopMin: 1281, laptopMin: 1025, tabletMin: 768,\n        desktopGap: 32, laptopGap: 28, tabletGap: 20, mobileGap: 16,\n        slidesPerMove: 1, dragThreshold: 50, transitionSpeed: 450\n    };\n\n    let state = null;\n    let initTimer = null;\n\n    function mod(value, total) {\n        return ((value % total) + total) % total;\n    }\n\n    function cleanClone(clone) {\n        clone.removeAttribute('id');\n        clone.querySelectorAll('[id]').forEach(function (element) {\n            element.removeAttribute('id');\n        });\n        clone.querySelectorAll('img').forEach(function (image) {\n            image.setAttribute('draggable', 'false');\n        });\n        clone.setAttribute('aria-hidden', 'true');\n        clone.classList.add('ghl-loop-clone');\n    }\n\n    function getResponsiveSettings() {\n        const width = window.innerWidth;\n        if (width >= CONFIG.desktopMin) return { visible: CONFIG.desktopCards, gap: CONFIG.desktopGap };\n        if (width >= CONFIG.laptopMin) return { visible: CONFIG.laptopCards, gap: CONFIG.laptopGap };\n        if (width >= CONFIG.tabletMin) return { visible: CONFIG.tabletCards, gap: CONFIG.tabletGap };\n        return { visible: CONFIG.mobileCards, gap: CONFIG.mobileGap };\n    }\n\n    function createArrowOverlay() {\n        const oldOverlay = document.getElementById('ghl-loop-arrow-overlay');\n        if (oldOverlay) oldOverlay.remove();\n\n        const overlay = document.createElement('div');\n        overlay.id = 'ghl-loop-arrow-overlay';\n\n        const previousButton = document.createElement('button');\n        previousButton.type = 'button';\n        previousButton.id = 'ghl-loop-prev';\n        previousButton.className = 'ghl-loop-arrow';\n        previousButton.setAttribute('aria-label', 'Previous slide');\n        previousButton.innerHTML = '&#8249;';\n\n        const nextButton = document.createElement('button');\n        nextButton.type = 'button';\n        nextButton.id = 'ghl-loop-next';\n        nextButton.className = 'ghl-loop-arrow';\n        nextButton.setAttribute('aria-label', 'Next slide');\n        nextButton.innerHTML = '&#8250;';\n\n        overlay.appendChild(previousButton);\n        overlay.appendChild(nextButton);\n        document.body.appendChild(overlay);\n\n        return { overlay, previousButton, nextButton };\n    }\n\n    function initCarousel() {\n\n        const section = document.querySelector('.slider-section');\n        if (!section) return;\n\n        const carousel = section.querySelector('.carousel');\n        if (!carousel) return;\n\n        const track = carousel.querySelector(':scope > .inner');\n        if (!track) return;\n\n        const pagination = document.getElementById('ghl-loop-pagination');\n        if (!pagination) return;\n\n        if (state && state.track === track && track.querySelectorAll(':scope > .ghl-loop-clone').length > 0) {\n            state.calculateLayout();\n            state.positionArrowOverlay();\n            return;\n        }\n\n        if (state) {\n            if (state.abortController) state.abortController.abort();\n            if (state.resizeObserver) state.resizeObserver.disconnect();\n            if (state.overlay) state.overlay.remove();\n        }\n\n        track.querySelectorAll(':scope > .ghl-loop-clone').forEach(function (clone) {\n            clone.remove();\n        });\n\n        const originals = Array.from(\n            track.querySelectorAll(':scope > .c-column:not(.ghl-loop-clone)')\n        );\n\n        const originalCount = originals.length;\n        if (originalCount === 0) return;\n\n        const beforeFragment = document.createDocumentFragment();\n        originals.forEach(function (card) {\n            const clone = card.cloneNode(true);\n            cleanClone(clone);\n            beforeFragment.appendChild(clone);\n        });\n        track.insertBefore(beforeFragment, track.firstChild);\n\n        const afterFragment = document.createDocumentFragment();\n        originals.forEach(function (card) {\n            const clone = card.cloneNode(true);\n            cleanClone(clone);\n            afterFragment.appendChild(clone);\n        });\n        track.appendChild(afterFragment);\n\n        const allCards = Array.from(track.querySelectorAll(':scope > .c-column'));\n\n        let logicalIndex = 0;\n        let physicalIndex = originalCount;\n        let cardWidth = 0;\n        let gap = 0;\n        let cardsVisible = 1;\n        let isDragging = false;\n        let dragStartX = 0;\n        let dragCurrentX = 0;\n        let dragStartTranslate = 0;\n\n        const abortController = new AbortController();\n        const eventSignal = abortController.signal;\n\n        const arrowData = createArrowOverlay();\n        const overlay = arrowData.overlay;\n        const previousButton = arrowData.previousButton;\n        const nextButton = arrowData.nextButton;\n\n        function positionArrowOverlay() {\n            const rect = carousel.getBoundingClientRect();\n            overlay.style.left = (rect.left + window.scrollX) + 'px';\n            overlay.style.top = (rect.top + window.scrollY) + 'px';\n            overlay.style.width = rect.width + 'px';\n            overlay.style.height = rect.height + 'px';\n        }\n\n        function getTranslate(index) {\n            return -(index * (cardWidth + gap));\n        }\n\n        function setTrackPosition(animate) {\n            if (animate) {\n                track.classList.remove('ghl-loop-no-transition');\n                track.classList.remove('ghl-loop-dragging');\n            } else {\n                track.classList.add('ghl-loop-no-transition');\n            }\n\n            const translate = getTranslate(physicalIndex);\n            track.style.setProperty('transform', 'translate3d(' + translate + 'px,0,0)', 'important');\n            updatePagination();\n\n            if (!animate) {\n                requestAnimationFrame(function () {\n                    requestAnimationFrame(function () {\n                        track.classList.remove('ghl-loop-no-transition');\n                    });\n                });\n            }\n        }\n\n        function normalizeInfinitePosition() {\n            let changed = false;\n            while (physicalIndex >= originalCount * 2) {\n                physicalIndex -= originalCount;\n                changed = true;\n            }\n            while (physicalIndex < originalCount) {\n                physicalIndex += originalCount;\n                changed = true;\n            }\n            logicalIndex = mod(physicalIndex - originalCount, originalCount);\n            if (changed) setTrackPosition(false);\n            updatePagination();\n        }\n\n        function buildPagination() {\n            pagination.innerHTML = '';\n            for (let index = 0; index < originalCount; index++) {\n                const dot = document.createElement('button');\n                dot.type = 'button';\n                dot.className = 'ghl-loop-dot';\n                dot.setAttribute('aria-label', 'Go to slide ' + (index + 1));\n                dot.addEventListener('click', function () {\n                    goToLogicalIndex(index);\n                }, { signal: eventSignal });\n                pagination.appendChild(dot);\n            }\n            updatePagination();\n        }\n\n        function updatePagination() {\n            const dots = Array.from(pagination.children);\n            dots.forEach(function (dot, index) {\n                dot.classList.toggle('active', index === logicalIndex);\n            });\n        }\n\n        function goToLogicalIndex(targetLogicalIndex) {\n            const candidates = [\n                targetLogicalIndex,\n                targetLogicalIndex + originalCount,\n                targetLogicalIndex + (originalCount * 2)\n            ];\n            let targetPhysical = candidates[0];\n            let smallestDistance = Math.abs(targetPhysical - physicalIndex);\n            candidates.forEach(function (candidate) {\n                const distance = Math.abs(candidate - physicalIndex);\n                if (distance < smallestDistance) {\n                    smallestDistance = distance;\n                    targetPhysical = candidate;\n                }\n            });\n            logicalIndex = targetLogicalIndex;\n            physicalIndex = targetPhysical;\n            setTrackPosition(true);\n        }\n\n        function nextSlide() {\n            physicalIndex += CONFIG.slidesPerMove;\n            logicalIndex = mod(logicalIndex + CONFIG.slidesPerMove, originalCount);\n            setTrackPosition(true);\n        }\n\n        function previousSlide() {\n            physicalIndex -= CONFIG.slidesPerMove;\n            logicalIndex = mod(logicalIndex - CONFIG.slidesPerMove, originalCount);\n            setTrackPosition(true);\n        }\n\n        function calculateLayout() {\n            const settings = getResponsiveSettings();\n            cardsVisible = Math.max(1, Math.min(settings.visible, originalCount));\n            gap = settings.gap;\n\n            const viewportWidth = carousel.getBoundingClientRect().width;\n            if (viewportWidth <= 0) return;\n\n            cardWidth = (viewportWidth - (gap * (cardsVisible - 1))) / cardsVisible;\n\n            allCards.forEach(function (card) {\n                card.style.setProperty('flex', '0 0 ' + cardWidth + 'px', 'important');\n                card.style.setProperty('width', cardWidth + 'px', 'important');\n                card.style.setProperty('min-width', cardWidth + 'px', 'important');\n                card.style.setProperty('max-width', cardWidth + 'px', 'important');\n                card.style.setProperty('margin-left', '0px', 'important');\n                card.style.setProperty('margin-right', gap + 'px', 'important');\n                card.style.setProperty('padding', '0px', 'important');\n                card.style.setProperty('float', 'none', 'important');\n                card.style.setProperty('box-sizing', 'border-box', 'important');\n            });\n\n            physicalIndex = originalCount + logicalIndex;\n            setTrackPosition(false);\n            positionArrowOverlay();\n        }\n\n        track.addEventListener('transitionend', function (event) {\n            if (event.propertyName !== 'transform') return;\n            normalizeInfinitePosition();\n        }, { signal: eventSignal });\n\n        previousButton.addEventListener('click', previousSlide, { signal: eventSignal });\n        nextButton.addEventListener('click', nextSlide, { signal: eventSignal });\n\n        function startDrag(event) {\n            if (event.button !== undefined && event.button !== 0) return;\n            isDragging = true;\n            dragStartX = event.clientX;\n            dragCurrentX = dragStartX;\n            dragStartTranslate = getTranslate(physicalIndex);\n            track.classList.add('ghl-loop-dragging');\n            if (track.setPointerCapture && event.pointerId !== undefined) {\n                try {\n                    track.setPointerCapture(event.pointerId);\n                } catch (error) { /* safe */ }\n            }\n        }\n\n        function drag(event) {\n            if (!isDragging) return;\n            dragCurrentX = event.clientX;\n            const distance = dragCurrentX - dragStartX;\n            const translate = dragStartTranslate + distance;\n            track.style.setProperty('transform', 'translate3d(' + translate + 'px,0,0)', 'important');\n        }\n\n        function endDrag() {\n            if (!isDragging) return;\n            isDragging = false;\n            track.classList.remove('ghl-loop-dragging');\n            const distance = dragCurrentX - dragStartX;\n            if (distance < -CONFIG.dragThreshold) nextSlide();\n            else if (distance > CONFIG.dragThreshold) previousSlide();\n            else setTrackPosition(true);\n        }\n\n        track.addEventListener('pointerdown', startDrag, { signal: eventSignal });\n        track.addEventListener('pointermove', drag, { signal: eventSignal });\n        track.addEventListener('pointerup', endDrag, { signal: eventSignal });\n        track.addEventListener('pointercancel', endDrag, { signal: eventSignal });\n\n        track.querySelectorAll('img').forEach(function (image) {\n            image.setAttribute('draggable', 'false');\n        });\n\n        let resizeTimer;\n        window.addEventListener('resize', function () {\n            clearTimeout(resizeTimer);\n            resizeTimer = setTimeout(calculateLayout, 120);\n        }, { signal: eventSignal });\n\n        window.addEventListener('orientationchange', function () {\n            setTimeout(calculateLayout, 150);\n        }, { signal: eventSignal });\n\n        let scrollFrame = null;\n        window.addEventListener('scroll', function () {\n            if (scrollFrame) return;\n            scrollFrame = requestAnimationFrame(function () {\n                scrollFrame = null;\n                positionArrowOverlay();\n            });\n        }, { passive: true, signal: eventSignal });\n\n        let resizeObserver = null;\n        if (typeof ResizeObserver !== 'undefined') {\n            let previousWidth = 0;\n            resizeObserver = new ResizeObserver(function (entries) {\n                entries.forEach(function (entry) {\n                    const width = entry.contentRect.width;\n                    if (Math.abs(width - previousWidth) > 1) {\n                        previousWidth = width;\n                        calculateLayout();\n                    }\n                });\n            });\n            resizeObserver.observe(carousel);\n        }\n\n        buildPagination();\n        calculateLayout();\n\n        state = {\n            section, carousel, track, originalCount,\n            overlay, abortController, resizeObserver,\n            calculateLayout, positionArrowOverlay\n        };\n\n        setTimeout(calculateLayout, 200);\n        setTimeout(calculateLayout, 600);\n        setTimeout(calculateLayout, 1200);\n    }\n\n    function startCarousel() {\n        clearTimeout(initTimer);\n        initTimer = setTimeout(function () {\n            try {\n                initCarousel();\n            } catch (error) {\n                console.error('GHL Infinite Carousel Error:', error);\n            }\n        }, 50);\n    }\n\n    if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', startCarousel);\n    } else {\n        startCarousel();\n    }\n\n    document.addEventListener('hydrationDone', function () {\n        startCarousel();\n        setTimeout(startCarousel, 400);\n    });\n\n    window.addEventListener('load', function () {\n        startCarousel();\n        setTimeout(startCarousel, 700);\n    });\n\n    const pageObserver = new MutationObserver(function () {\n        clearTimeout(pageObserver.timer);\n        pageObserver.timer = setTimeout(function () {\n            const currentTrack = document.querySelector('.slider-section .carousel > .inner');\n            if (!currentTrack) return;\n            if (!state || state.track !== currentTrack) {\n                startCarousel();\n                return;\n            }\n            const cloneCount = currentTrack.querySelectorAll(':scope > .ghl-loop-clone').length;\n            if (cloneCount < state.originalCount * 2) startCarousel();\n        }, 120);\n    });\n\n    function startPageObserver() {\n        const section = document.querySelector('.slider-section');\n        if (!section) return;\n        pageObserver.observe(section, { childList: true, subtree: true });\n    }\n\n    if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', startPageObserver);\n    } else {\n        startPageObserver();\n    }\n\n})();`
    },
{
      id: "ghl-infinite-scroll",
      name: "GHL Infinite Scroll",
      description: "Continuous auto-scrolling infinite carousel with responsive card counts for GoHighLevel.",
      category: "sliders",
      tags: ["free", "interactive", "javascript", "ghl"],
      preview: `
        <div class="ghl-infinite-scroll-preview">
          <div class="ghl-infinite-scroll-preview__window">
            <div class="ghl-infinite-scroll-preview__track">
              <div class="ghl-infinite-scroll-preview__card"><img src="${images[0]}" alt="" /></div>
              <div class="ghl-infinite-scroll-preview__card"><img src="${images[1]}" alt="" /></div>
              <div class="ghl-infinite-scroll-preview__card"><img src="${images[2]}" alt="" /></div>
              <div class="ghl-infinite-scroll-preview__card"><img src="${images[3]}" alt="" /></div>
            </div>
          </div>
        </div>
      `,
      html: `<div class="slider-section">
    <div class="carousel">
        <div class="inner">
            <div class="c-column"><div class="inner"><img src="${images[0]}" alt="" /></div></div>
            <div class="c-column"><div class="inner"><img src="${images[1]}" alt="" /></div></div>
            <div class="c-column"><div class="inner"><img src="${images[2]}" alt="" /></div></div>
        </div>
    </div>
</div>`,
      css: `/* GHL Infinite Scroll Carousel CSS */\n.slider-section {\n    width: 100% !important; max-width: 100% !important;\n    position: relative !important; overflow: hidden !important;\n    box-sizing: border-box !important;\n}\n.slider-section .carousel {\n    display: block !important; width: 100% !important; max-width: 100% !important;\n    margin: 0 !important; padding: 0 !important;\n    position: relative !important; overflow: hidden !important;\n    box-sizing: border-box !important;\n    animation: none !important; transition: none !important;\n}\n.slider-section .carousel > .inner {\n    display: flex !important; flex-direction: row !important; flex-wrap: nowrap !important;\n    justify-content: flex-start !important; align-items: stretch !important;\n    width: max-content !important; min-width: max-content !important; max-width: none !important;\n    margin: 0 !important; padding: 0 !important; gap: 0 !important;\n    overflow: visible !important; float: none !important;\n    position: relative !important; animation: none !important; transition: none !important;\n    will-change: transform !important; box-sizing: border-box !important;\n}\n.slider-section .carousel > .inner > .c-column {\n    display: block !important; flex-grow: 0 !important; flex-shrink: 0 !important;\n    flex-basis: auto !important; width: auto !important; min-width: 0 !important;\n    max-width: none !important; height: auto !important; margin-top: 0 !important;\n    margin-bottom: 0 !important; padding: 0 !important; float: none !important;\n    box-sizing: border-box !important; position: relative !important;\n    animation: none !important; transition: none !important; transform: none !important;\n}\n.slider-section .carousel > .inner > .c-column > .inner {\n    display: block !important; width: 100% !important; min-width: 0 !important;\n    max-width: 100% !important; margin: 0 !important; padding: 0 !important;\n    box-sizing: border-box !important; transform: none !important;\n    animation: none !important; transition: none !important;\n}\n.slider-section .carousel .c-image,\n.slider-section .carousel .image-container,\n.slider-section .carousel picture {\n    display: block !important; width: 100% !important; max-width: 100% !important;\n    margin: 0 !important; padding: 0 !important; box-sizing: border-box !important;\n}\n.slider-section .carousel img {\n    display: block !important; width: 100% !important; max-width: 100% !important;\n    height: 478px !important; object-fit: cover !important; object-position: center !important;\n    margin: 0 !important; padding: 0 !important; border-radius: 10px !important;\n    box-sizing: border-box !important; animation: none !important; transition: none !important;\n}\n.slider-section .carousel::before,\n.slider-section .carousel::after,\n.slider-section .carousel > .inner::before,\n.slider-section .carousel > .inner::after {\n    display: none !important; content: none !important;\n}\n@media (min-width: 1025px) {\n    .slider-section .carousel > .inner { height: 478px !important; }\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n    .slider-section .carousel > .inner { height: 420px !important; }\n    .slider-section .carousel img { height: 420px !important; }\n}\n@media (max-width: 767px) {\n    .slider-section .carousel > .inner { height: 350px !important; }\n    .slider-section .carousel img { height: 350px !important; }\n}\n@media (max-width: 480px) {\n    .slider-section .carousel > .inner { height: 320px !important; }\n    .slider-section .carousel img { height: 320px !important; }\n}`,
      js: `(function () {\n\n    function initInfiniteCarousel() {\n\n        const section = document.querySelector('.slider-section');\n        if (!section) { console.log('Carousel: section not found'); return; }\n\n        const carousel = section.querySelector('.carousel');\n        if (!carousel) { console.log('Carousel: carousel not found'); return; }\n\n        const track = carousel.querySelector(':scope > .inner');\n        if (!track) { console.log('Carousel: inner not found'); return; }\n\n        track.removeAttribute('data-custom-infinite-carousel');\n        track.removeAttribute('data-infinite-ready');\n\n        track.style.setProperty('animation', 'none', 'important');\n        track.style.setProperty('transition', 'none', 'important');\n        track.style.setProperty('transform', 'translate3d(0,0,0)', 'important');\n\n        const originals = Array.from(track.querySelectorAll(':scope > .c-column'));\n        if (originals.length === 0) { console.log('Carousel: no columns found'); return; }\n\n        console.log('Carousel: found', originals.length, 'original cards');\n\n        track.querySelectorAll('.infinite-carousel-clone').forEach(function (clone) {\n            clone.remove();\n        });\n\n        const cards = originals.slice();\n        const copies = 4;\n\n        for (let copy = 0; copy < copies; copy++) {\n            cards.forEach(function (card) {\n                const clone = card.cloneNode(true);\n                clone.removeAttribute('id');\n                clone.classList.add('infinite-carousel-clone');\n                clone.setAttribute('aria-hidden', 'true');\n                track.appendChild(clone);\n            });\n        }\n\n        track.style.setProperty('display', 'flex', 'important');\n        track.style.setProperty('flex-direction', 'row', 'important');\n        track.style.setProperty('flex-wrap', 'nowrap', 'important');\n        track.style.setProperty('justify-content', 'flex-start', 'important');\n        track.style.setProperty('align-items', 'stretch', 'important');\n        track.style.setProperty('width', 'max-content', 'important');\n        track.style.setProperty('min-width', 'max-content', 'important');\n        track.style.setProperty('max-width', 'none', 'important');\n        track.style.setProperty('margin', '0', 'important');\n        track.style.setProperty('padding', '0', 'important');\n        track.style.setProperty('gap', '0', 'important');\n        track.style.setProperty('float', 'none', 'important');\n        track.style.setProperty('overflow', 'visible', 'important');\n        track.style.setProperty('position', 'relative', 'important');\n\n        const allCards = Array.from(track.querySelectorAll(':scope > .c-column'));\n\n        function getCardWidth() {\n            const viewport = section.getBoundingClientRect().width;\n            if (window.innerWidth <= 767) return viewport - 32;\n            if (window.innerWidth <= 1024) return (viewport - 52) / 2;\n            return (viewport - 104) / 4;\n        }\n\n        function applyCardWidth() {\n            const width = getCardWidth();\n            let margin;\n            if (window.innerWidth <= 480) margin = 6;\n            else if (window.innerWidth <= 767) margin = 8;\n            else margin = 13;\n\n            allCards.forEach(function (card) {\n                card.style.setProperty('display', 'block', 'important');\n                card.style.setProperty('flex', '0 0 ' + width + 'px', 'important');\n                card.style.setProperty('width', width + 'px', 'important');\n                card.style.setProperty('min-width', width + 'px', 'important');\n                card.style.setProperty('max-width', width + 'px', 'important');\n                card.style.setProperty('margin-left', margin + 'px', 'important');\n                card.style.setProperty('margin-right', margin + 'px', 'important');\n                card.style.setProperty('margin-top', '0', 'important');\n                card.style.setProperty('margin-bottom', '0', 'important');\n                card.style.setProperty('padding', '0', 'important');\n                card.style.setProperty('float', 'none', 'important');\n                card.style.setProperty('box-sizing', 'border-box', 'important');\n            });\n        }\n\n        applyCardWidth();\n        track.getBoundingClientRect();\n\n        function getSetWidth() {\n            if (cards.length === 0) return 0;\n            const first = allCards[0];\n            const nextSetFirst = allCards[cards.length];\n            if (!first || !nextSetFirst) return 0;\n            const firstRect = first.getBoundingClientRect();\n            const nextRect = nextSetFirst.getBoundingClientRect();\n            return (nextRect.left - firstRect.left);\n        }\n\n        let setWidth = getSetWidth();\n        console.log('Carousel set width:', setWidth);\n\n        let position = 0;\n        const speed = 0.4;\n        let animationFrame;\n\n        function animate() {\n            position -= speed;\n            if (setWidth > 0 && position <= -setWidth) {\n                position += setWidth;\n            }\n            track.style.setProperty('transform', 'translate3d(' + position + 'px, 0, 0)', 'important');\n            animationFrame = requestAnimationFrame(animate);\n        }\n\n        let resizeTimer;\n        window.addEventListener('resize', function () {\n            clearTimeout(resizeTimer);\n            cancelAnimationFrame(animationFrame);\n            resizeTimer = setTimeout(function () {\n                applyCardWidth();\n                requestAnimationFrame(function () {\n                    setWidth = getSetWidth();\n                    position = 0;\n                    track.style.setProperty('transform', 'translate3d(0,0,0)', 'important');\n                    animationFrame = requestAnimationFrame(animate);\n                });\n            }, 250);\n        });\n\n        track.setAttribute('data-custom-infinite-carousel', 'true');\n        animationFrame = requestAnimationFrame(animate);\n        console.log('Infinite carousel started');\n    }\n\n    function start() {\n        try {\n            initInfiniteCarousel();\n        } catch (error) {\n            console.error('Carousel error:', error);\n        }\n    }\n\n    if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', start);\n    } else {\n        start();\n    }\n\n    setTimeout(start, 500);\n    setTimeout(start, 1500);\n    setTimeout(start, 3000);\n\n})();`
    },
            {
      id: "review-testimonial-slider",
      name: "Review Testimonial Slider",
      description: "Coverflow-style testimonial slider with centered active card and side previews.",
      category: "reviews",
      tags: ["free", "interactive", "javascript"],
      injectScript: true,
      preview: `<div class="comp review-slider">
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <blockquote>"Clean code and smooth animations out of the box."</blockquote>
              <div class="review-author">
                <img src="${images[4]}" alt="" />
                <div>
                  <strong>Marcus Reid</strong>
                  <span>Developer</span>
                </div>
              </div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <blockquote>"Super easy to customize and drop into any project."</blockquote>
              <div class="review-author">
                <img src="${images[5]}" alt="" />
                <div>
                  <strong>Avery L.</strong>
                  <span>Product Designer</span>
                </div>
              </div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <blockquote>"Our clients love the polished, premium feel."</blockquote>
              <div class="review-author">
                <img src="${images[6]}" alt="" />
                <div>
                  <strong>Morgan K.</strong>
                  <span>Agency Owner</span>
                </div>
              </div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <blockquote>"Best testimonial slider we've used by a wide margin."</blockquote>
              <div class="review-author">
                <img src="${images[7]}" alt="" />
                <div>
                  <strong>Jordan P.</strong>
                  <span>Founder</span>
                </div>
              </div>
            </div>
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <blockquote>"Looks premium out of the box with minimal tweaks."</blockquote>
              <div class="review-author">
                <img src="${images[8]}" alt="" />
                <div>
                  <strong>Riley S.</strong>
                  <span>Engineer</span>
                </div>
              </div>
            </div>
        </div>`,
      html: `<div class="review-slider">
  <div class="review-card">
    <div class="review-stars">★★★★★</div>
    <blockquote>"Clean code and smooth animations out of the box."</blockquote>
    <div class="review-author">
      <img src="${images[4]}" alt="" />
      <div>
        <strong>Marcus Reid</strong>
        <span>Developer</span>
      </div>
    </div>
  </div>
  <div class="review-card">
    <div class="review-stars">★★★★★</div>
    <blockquote>"Super easy to customize and drop into any project."</blockquote>
    <div class="review-author">
      <img src="${images[5]}" alt="" />
      <div>
        <strong>Avery L.</strong>
        <span>Product Designer</span>
      </div>
    </div>
  </div>
  <div class="review-card">
    <div class="review-stars">★★★★★</div>
    <blockquote>"Our clients love the polished, premium feel."</blockquote>
    <div class="review-author">
      <img src="${images[6]}" alt="" />
      <div>
        <strong>Morgan K.</strong>
        <span>Agency Owner</span>
      </div>
    </div>
  </div>
  <div class="review-card">
    <div class="review-stars">★★★★★</div>
    <blockquote>"Best testimonial slider we've used by a wide margin."</blockquote>
    <div class="review-author">
      <img src="${images[7]}" alt="" />
      <div>
        <strong>Jordan P.</strong>
        <span>Founder</span>
      </div>
    </div>
  </div>
  <div class="review-card">
    <div class="review-stars">★★★★★</div>
    <blockquote>"Looks premium out of the box with minimal tweaks."</blockquote>
    <div class="review-author">
      <img src="${images[8]}" alt="" />
      <div>
        <strong>Riley S.</strong>
        <span>Engineer</span>
      </div>
    </div>
  </div>
</div>`,
      css: `/* =========================================================
   REVIEW TESTIMONIAL SLIDER
   Structure:
   Row
   └── Column.review-slider
       ├── Group.review-card
       ├── Group.review-card
       ├── Group.review-card
       ├── Group.review-card
       ├── Group.review-card
       └── Group.review-card

   DESKTOP:  iiIii
   TABLET:   iIi
   MOBILE:   I
   ========================================================= */


/* =========================================================
   SLIDER
   ========================================================= */

.review-slider {
    position: relative !important;

    width: 100% !important;

    height: 500px !important;

    margin: 0 !important;
    padding: 0 !important;

    overflow: hidden !important;

    box-sizing: border-box !important;

    display: block !important;

    isolation: isolate !important;

    z-index: 0 !important;
}

/* Remove Divi column defaults */

.review-slider.et_pb_column {
    float: none !important;

    width: 100% !important;

    margin: 0 !important;
    padding: 0 !important;
}


/* =========================================================
   CARDS
   ========================================================= */

.review-slider .review-card {

    position: absolute !important;

    top: 50% !important;
    left: 50% !important;

    width: 380px !important;
    min-width: 380px !important;
    max-width: 380px !important;

    margin: 0 !important;

    box-sizing: border-box !important;

    /* Default position */
    transform:
        translate(-50%, -50%)
        scale(0.72) !important;

    opacity: 0.45 !important;

    z-index: 1 !important;

    transform-origin: center center !important;

    transition:
        transform 0.5s ease,
        opacity 0.5s ease,
        z-index 0s !important;

    visibility: visible !important;

    pointer-events: none !important;

    padding: 34px 30px !important;

    border: 1px solid rgba(255,255,255,0.22) !important;
    border-radius: 24px !important;

    background: linear-gradient(145deg, rgba(255,255,255,0.74), rgba(255,255,255,0.42)) !important;
    color: #171717 !important;

    box-shadow:
        0 24px 70px rgba(0,0,0,0.24),
        inset 0 1px 0 rgba(255,255,255,0.60) !important;

    backdrop-filter: blur(18px) saturate(150%) !important;
    -webkit-backdrop-filter: blur(18px) saturate(150%) !important;

    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    gap: 22px !important;
}

.review-slider .review-stars {
    color: #ff4b18 !important;
    font-size: 20px !important;
    line-height: 1 !important;
    letter-spacing: 2px !important;
}

.review-slider blockquote {
    margin: 0 !important;
    color: #181818 !important;
    font-size: 22px !important;
    font-weight: 600 !important;
    line-height: 1.35 !important;
}

.review-slider .review-author {
    display: flex !important;
    align-items: center !important;
    gap: 14px !important;
}

.review-slider .review-author img {
    width: 52px !important;
    height: 52px !important;
    min-width: 52px !important;
    border-radius: 50% !important;
    object-fit: cover !important;
}

.review-slider .review-author strong,
.review-slider .review-author span {
    display: block !important;
}

.review-slider .review-author strong {
    color: #171717 !important;
    font-size: 15px !important;
    line-height: 1.25 !important;
}

.review-slider .review-author span {
    color: #747474 !important;
    font-size: 13px !important;
    line-height: 1.35 !important;
}


/* =========================================================
   CARD POSITIONS
   ========================================================= */


/* LEFT OUTSIDE */

.review-slider .review-card.slider-left-2 {
    transform:
        translate(calc(-50% - 430px), -50%)
        scale(0.68) !important;

    opacity: 0.42 !important;

    z-index: 1 !important;
}


/* LEFT */

.review-slider .review-card.slider-left {
    transform:
        translate(calc(-50% - 250px), -50%)
        scale(0.84) !important;

    opacity: 0.68 !important;

    z-index: 2 !important;
}


/* =========================================================
   CENTER
   ========================================================= */

.review-slider .review-card.slider-center {

    transform:
        translate(-50%, -50%)
        scale(1) !important;

    opacity: 1 !important;

    z-index: 10 !important;

    pointer-events: auto !important;
}


/* =========================================================
   RIGHT
   ========================================================= */

.review-slider .review-card.slider-right {

    transform:
        translate(calc(-50% + 250px), -50%)
        scale(0.84) !important;

    opacity: 0.68 !important;

    z-index: 2 !important;
}


/* =========================================================
   RIGHT OUTSIDE
   ========================================================= */

.review-slider .review-card.slider-right-2 {

    transform:
        translate(calc(-50% + 430px), -50%)
        scale(0.68) !important;

    opacity: 0.42 !important;

    z-index: 1 !important;
}


/* =========================================================
   HIDDEN / FAR CARDS
   ========================================================= */

.review-slider .review-card.slider-hidden {

    transform:
        translate(-50%, -50%)
        scale(0.5) !important;

    opacity: 0 !important;

    z-index: 0 !important;

    visibility: hidden !important;
}


/* =========================================================
   PREVIOUS BUTTON
   ========================================================= */

.review-slider .review-carousel-prev,
.review-slider .review-carousel-next {

    position: absolute !important;

    top: 50% !important;

    width: 64px !important;
    height: 64px !important;

    padding: 0 !important;
    margin: 0 !important;

    border: 1px solid rgba(255,255,255,0.35) !important;

    border-radius: 50% !important;

    background: rgba(255,255,255,0.72) !important;

    color: #ff4b18 !important;

    font-family: Arial, sans-serif !important;

    font-size: 42px !important;
    font-weight: 300 !important;

    line-height: 1 !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    cursor: pointer !important;

    z-index: 20 !important;

    box-shadow:
        0 12px 30px rgba(0,0,0,0.20),
        inset 0 1px 0 rgba(255,255,255,0.72) !important;

    backdrop-filter: blur(14px) saturate(145%) !important;
    -webkit-backdrop-filter: blur(14px) saturate(145%) !important;

    transform: translateY(-50%) !important;

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease !important;
}


/* =========================================================
   BUTTON POSITIONS
   ========================================================= */

.review-slider .review-carousel-prev {
    left: 35px !important;
}

.review-slider .review-carousel-next {
    right: 35px !important;
}


/* =========================================================
   BUTTON HOVER
   ========================================================= */

.review-slider .review-carousel-prev:hover,
.review-slider .review-carousel-next:hover {

    transform:
        translateY(-50%)
        scale(1.08) !important;

    box-shadow:
        0 5px 15px rgba(0,0,0,0.14),
        0 10px 25px rgba(0,0,0,0.10) !important;
}


/* =========================================================
   TABLET
   iIi
   ========================================================= */

@media (max-width: 980px) {

    .review-slider {
        height: 480px !important;
    }


    .review-slider .review-card {

        width: 350px !important;
        min-width: 350px !important;
        max-width: 350px !important;
    }


    .review-slider .review-card.slider-left {
        transform:
            translate(calc(-50% - 190px), -50%)
            scale(0.76) !important;

        opacity: 0.58 !important;
    }


    .review-slider .review-card.slider-right {
        transform:
            translate(calc(-50% + 190px), -50%)
            scale(0.76) !important;

        opacity: 0.58 !important;
    }


    .review-slider .review-card.slider-left-2,
    .review-slider .review-card.slider-right-2 {
        opacity: 0 !important;
        visibility: hidden !important;
    }


    .review-slider .review-carousel-prev,
    .review-slider .review-carousel-next {

        width: 54px !important;
        height: 54px !important;

        font-size: 36px !important;
    }


    .review-slider .review-carousel-prev {
        left: 15px !important;
    }


    .review-slider .review-carousel-next {
        right: 15px !important;
    }
}


/* =========================================================
   MOBILE
   I
   ========================================================= */

@media (max-width: 767px) {

    .review-slider {

        height: 450px !important;
    }


    .review-slider .review-card {

        width: calc(100% - 100px) !important;

        min-width: calc(100% - 100px) !important;

        max-width: calc(100% - 100px) !important;
    }


    /* Hide side cards on mobile */

    .review-slider .review-card.slider-left,
    .review-slider .review-card.slider-right,
    .review-slider .review-card.slider-left-2,
    .review-slider .review-card.slider-right-2 {

        opacity: 0 !important;

        visibility: hidden !important;
    }


    /* Center card */

    .review-slider .review-card.slider-center {

        transform:
            translate(-50%, -50%)
            scale(1) !important;

        opacity: 1 !important;

        visibility: visible !important;
    }


    .review-slider .review-carousel-prev,
    .review-slider .review-carousel-next {

        width: 48px !important;
        height: 48px !important;

        font-size: 32px !important;
    }


    .review-slider .review-carousel-prev {
        left: 8px !important;
    }


    .review-slider .review-carousel-next {
        right: 8px !important;
    }
}


/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 480px) {

    .review-slider {
        height: 430px !important;
    }


    .review-slider .review-card {

        width: calc(100% - 80px) !important;

        min-width: calc(100% - 80px) !important;

        max-width: calc(100% - 80px) !important;
    }


    .review-slider .review-carousel-prev,
    .review-slider .review-carousel-next {

        width: 44px !important;
        height: 44px !important;

        font-size: 29px !important;
    }
}


/* Preview overrides */
.component-card__preview .review-slider {
    height: 196px !important;
    overflow: hidden !important;
    isolation: isolate !important;
}
.component-card__preview .review-slider .review-card {
    width: 230px !important;
    min-width: 230px !important;
    max-width: 230px !important;
    padding: 18px 20px !important;
    gap: 12px !important;
    border-radius: 14px !important;
}
.component-card__preview .review-slider .review-stars {
    font-size: 14px !important;
    letter-spacing: 1px !important;
}
.component-card__preview .review-slider blockquote {
    font-size: 15px !important;
    line-height: 1.35 !important;
}
.component-card__preview .review-slider .review-author {
    gap: 8px !important;
}
.component-card__preview .review-slider .review-author img {
    width: 34px !important;
    height: 34px !important;
    min-width: 34px !important;
}
.component-card__preview .review-slider .review-author strong {
    font-size: 11px !important;
}
.component-card__preview .review-slider .review-author span {
    font-size: 10px !important;
}
.component-card__preview .review-slider .review-card.slider-left {
    transform: translate(calc(-50% - 135px), -50%) scale(0.82) !important;
}
.component-card__preview .review-slider .review-card.slider-right {
    transform: translate(calc(-50% + 135px), -50%) scale(0.82) !important;
}
.component-card__preview .review-slider .review-card.slider-left-2 {
    transform: translate(calc(-50% - 245px), -50%) scale(0.68) !important;
}
.component-card__preview .review-slider .review-card.slider-right-2 {
    transform: translate(calc(-50% + 245px), -50%) scale(0.68) !important;
}
.component-card__preview .review-slider .review-carousel-prev,
.component-card__preview .review-slider .review-carousel-next {
    width: 36px !important;
    height: 36px !important;
    font-size: 22px !important;
    z-index: 20 !important;
}
.component-card__preview .review-slider .review-carousel-prev { left: 8px !important; }
.component-card__preview .review-slider .review-carousel-next { right: 8px !important; }

.modal__preview .review-slider {
    height: min(420px, 100%) !important;
    min-height: 260px !important;
    max-width: 1200px !important;
    margin-inline: auto !important;
}
.modal__preview .review-slider .review-card {
    width: min(380px, calc(100% - 112px)) !important;
    min-width: min(380px, calc(100% - 112px)) !important;
    max-width: 380px !important;
    visibility: visible !important;
}
.modal__preview .review-slider blockquote {
    font-size: clamp(1rem, 3.6vw, 22px) !important;
}
.modal__preview .review-slider .review-card.slider-center {
    transform: translate(-50%, -50%) scale(1) !important;
    opacity: 1 !important;
    z-index: 10 !important;
}
.modal__preview .review-slider .review-card.slider-left {
    transform: translate(calc(-50% - 250px), -50%) scale(0.84) !important;
    opacity: 0.68 !important;
    z-index: 2 !important;
}
.modal__preview .review-slider .review-card.slider-right {
    transform: translate(calc(-50% + 250px), -50%) scale(0.84) !important;
    opacity: 0.68 !important;
    z-index: 2 !important;
}
.modal__preview .review-slider .review-card.slider-left-2 {
    transform: translate(calc(-50% - 430px), -50%) scale(0.68) !important;
    opacity: 0.42 !important;
    z-index: 1 !important;
}
.modal__preview .review-slider .review-card.slider-right-2 {
    transform: translate(calc(-50% + 430px), -50%) scale(0.68) !important;
    opacity: 0.42 !important;
    z-index: 1 !important;
}
.preview-viewport.is-tablet .modal__preview .review-slider .review-card {
    width: 350px !important;
    min-width: 350px !important;
    max-width: 350px !important;
}
.preview-viewport.is-tablet .modal__preview .review-slider .review-card.slider-left {
    transform: translate(calc(-50% - 205px), -50%) scale(0.78) !important;
    opacity: 0.58 !important;
}
.preview-viewport.is-tablet .modal__preview .review-slider .review-card.slider-right {
    transform: translate(calc(-50% + 205px), -50%) scale(0.78) !important;
    opacity: 0.58 !important;
}
.preview-viewport.is-tablet .modal__preview .review-slider .review-card.slider-left-2 {
    transform: translate(calc(-50% - 335px), -50%) scale(0.62) !important;
    opacity: 0.24 !important;
}
.preview-viewport.is-tablet .modal__preview .review-slider .review-card.slider-right-2 {
    transform: translate(calc(-50% + 335px), -50%) scale(0.62) !important;
    opacity: 0.24 !important;
}
.preview-viewport.is-mobile .modal__preview .review-slider {
    height: min(360px, 100%) !important;
    min-height: 300px !important;
}
.preview-viewport.is-mobile .modal__preview .review-slider .review-card {
    width: calc(100% - 112px) !important;
    min-width: calc(100% - 112px) !important;
    max-width: 360px !important;
    padding: 26px 22px !important;
    gap: 16px !important;
}
.preview-viewport.is-mobile .modal__preview .review-slider blockquote {
    font-size: 1.05rem !important;
    line-height: 1.35 !important;
}
.preview-viewport.is-mobile .modal__preview .review-slider .review-card.slider-center {
    transform: translate(-50%, -50%) scale(1) !important;
    opacity: 1 !important;
}
.preview-viewport.is-mobile .modal__preview .review-slider .review-card.slider-left,
.preview-viewport.is-mobile .modal__preview .review-slider .review-card.slider-left-2 {
    transform: translate(calc(-50% - 140px), -50%) scale(0.82) !important;
    opacity: 0 !important;
    visibility: hidden !important;
}
.preview-viewport.is-mobile .modal__preview .review-slider .review-card.slider-right,
.preview-viewport.is-mobile .modal__preview .review-slider .review-card.slider-right-2 {
    transform: translate(calc(-50% + 140px), -50%) scale(0.82) !important;
    opacity: 0 !important;
    visibility: hidden !important;
}
.preview-viewport.is-mobile .modal__preview .review-slider .review-carousel-prev,
.preview-viewport.is-mobile .modal__preview .review-slider .review-carousel-next {
    width: 46px !important;
    height: 46px !important;
    font-size: 28px !important;
}
.preview-viewport.is-mobile .modal__preview .review-slider .review-carousel-prev {
    left: 10px !important;
}
.preview-viewport.is-mobile .modal__preview .review-slider .review-carousel-next {
    right: 10px !important;
}`,
      js: `(function () {

    function initReviewSlider(root) {

        const slider = root && root.classList && root.classList.contains("review-slider")
            ? root
            : root.querySelector(".review-slider");

        if (!slider) return;

        const cards = Array.from(
            slider.querySelectorAll(".review-card")
        );

        if (!cards.length) return;


        /* =====================================================
           PREVENT DUPLICATE INITIALIZATION
           ===================================================== */

        if (slider.dataset.sliderInitialized === "true") {
            return;
        }

        slider.dataset.sliderInitialized = "true";


        /* =====================================================
           CREATE BUTTONS
           ===================================================== */

        let prevButton = slider.querySelector(".review-carousel-prev");
        let nextButton = slider.querySelector(".review-carousel-next");


        if (!prevButton) {

            prevButton = document.createElement("button");

            prevButton.className = "review-carousel-prev";

            prevButton.type = "button";

            prevButton.setAttribute(
                "aria-label",
                "Previous testimonial"
            );

            prevButton.innerHTML = "‹";

            slider.appendChild(prevButton);
        }


        if (!nextButton) {

            nextButton = document.createElement("button");

            nextButton.className = "review-carousel-next";

            nextButton.type = "button";

            nextButton.setAttribute(
                "aria-label",
                "Next testimonial"
            );

            nextButton.innerHTML = "›";

            slider.appendChild(nextButton);
        }


        /* =====================================================
           CURRENT SLIDE
           ===================================================== */

        let current = 0;


        /* =====================================================
           UPDATE SLIDER
           ===================================================== */

        function updateSlider() {

            const total = cards.length;

            cards.forEach(function (card) {

                card.classList.remove(
                    "slider-left-2",
                    "slider-left",
                    "slider-center",
                    "slider-right",
                    "slider-right-2",
                    "slider-hidden"
                );

                card.style.visibility = "visible";
            });


            cards.forEach(function (card, index) {

                let difference = index - current;


                /*
                 * Handle circular positioning
                 */

                if (difference > total / 2) {
                    difference -= total;
                }

                if (difference < -total / 2) {
                    difference += total;
                }


                /*
                 * Desktop
                 */

                if (difference === 0) {

                    card.classList.add("slider-center");

                } else if (difference === -1) {

                    card.classList.add("slider-left");

                } else if (difference === 1) {

                    card.classList.add("slider-right");

                } else if (difference === -2) {

                    card.classList.add("slider-left-2");

                } else if (difference === 2) {

                    card.classList.add("slider-right-2");

                } else {

                    card.classList.add("slider-hidden");
                }

            });
        }


        /* =====================================================
           NEXT
           ===================================================== */

        nextButton.addEventListener("click", function (event) {

            event.preventDefault();

            current++;

            if (current >= cards.length) {
                current = 0;
            }

            updateSlider();
        });


        /* =====================================================
           PREVIOUS
           ===================================================== */

        prevButton.addEventListener("click", function (event) {

            event.preventDefault();

            current--;

            if (current < 0) {
                current = cards.length - 1;
            }

            updateSlider();
        });


        /* =====================================================
           INITIAL STATE
           ===================================================== */

        updateSlider();
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

})();`
    },
    {
      id: "basic-slider",
      name: "Basic Slider",
      description: "A clean responsive slider with previous/next navigation.",
      category: "sliders",
      tags: ["free", "interactive", "javascript"],
      preview: `
        <div class="comp basic-slider">
          <button class="bs-prev" aria-label="Previous">←</button>
          <div class="bs-window"><div class="bs-track">
            <div class="bs-slide" style="background:linear-gradient(135deg,#6366f1,#8b5cf6)">1</div>
            <div class="bs-slide" style="background:linear-gradient(135deg,#ec4899,#f43f5e)">2</div>
            <div class="bs-slide" style="background:linear-gradient(135deg,#10b981,#3b82f6)">3</div>
            <div class="bs-slide" style="background:linear-gradient(135deg,#f59e0b,#ef4444)">4</div>
          </div></div>
          <button class="bs-next" aria-label="Next">→</button>
        </div>
      `,
      html: `<div class="basic-slider">
  <button class="bs-prev" aria-label="Previous">←</button>
  <div class="bs-window"><div class="bs-track">
    
    <div class="bs-slide">Slide 1</div>
    <div class="bs-slide">Slide 2</div>
    <div class="bs-slide">Slide 3</div>
  </div></div>
  <button class="bs-next" aria-label="Next">→</button>
</div>`,
      css: `.basic-slider {\n  display: flex; align-items: center; gap: 12px; width: 100%; max-width: 400px;\n}\n.bs-window { overflow: hidden; border-radius: 12px; flex: 1; }\n.bs-track { display: flex; transition: transform 500ms cubic-bezier(0.22,1,0.36,1); }\n.bs-slide {\n  flex: 0 0 100%; aspect-ratio: 16/10; display: grid; place-items: center;\n  color: #fff; font-size: 2rem; font-weight: 800; border-radius: 12px;\n  background: linear-gradient(135deg,#6366f1,#8b5cf6);\n}\n.bs-prev, .bs-next {\n  width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.12);\n  border-radius: 50%; background: #1f222c; color: #fff; cursor: pointer;\n}`,
      js: `const slider = document.querySelector('.basic-slider');\nconst track = slider.querySelector('.bs-track');\nconst slides = slider.querySelectorAll('.bs-slide');\nlet i = 0;\nfunction update(){ track.style.transform = \`translateX(\${-i*100}%)\`; }\\nslider.querySelector('.bs-next').onclick = () => { i = (i+1)%slides.length; update(); };\\nslider.querySelector('.bs-prev').onclick = () => { i = (i-1+slides.length)%slides.length; update(); };\\nupdate();`
    },
{
      id: "product-slider",
      name: "Product Slider",
      description: "Carousel card slider for products with smooth hover lift.",
      category: "sliders",
      tags: ["free", "interactive", "javascript"],
      preview: `
        <div class="comp product-slider">
          <div class="ps-track">
            <div class="ps-card"><div class="ps-img"><img src="${images[0]}" alt="" /></div></div>
            <div class="ps-card"><div class="ps-img"><img src="${images[1]}" alt="" /></div></div>
            <div class="ps-card"><div class="ps-img"><img src="${images[2]}" alt="" /></div></div>
            <div class="ps-card"><div class="ps-img"><img src="${images[0]}" alt="" /></div></div>
            <div class="ps-card"><div class="ps-img"><img src="${images[1]}" alt="" /></div></div>
            <div class="ps-card"><div class="ps-img"><img src="${images[2]}" alt="" /></div></div>
          </div>
        </div>
      `,
      html: `<div class="product-slider">
  <div class="ps-track">
    <div class="ps-card"><div class="ps-img"><img src="${images[0]}" alt="" /></div></div>
    <div class="ps-card"><div class="ps-img"><img src="${images[1]}" alt="" /></div></div>
    <div class="ps-card"><div class="ps-img"><img src="${images[2]}" alt="" /></div></div>
  </div>
</div>`,
      css: `.product-slider { overflow: hidden; border-radius: 14px; width: 100%; max-width: 320px; }\n.ps-track { display: flex; gap: 12px; animation: psScroll 6s linear infinite; }\n@keyframes psScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }\n.ps-card {\n  flex: 0 0 140px; background: #15171d; border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px; padding: 12px; text-align: center; color: #f5f7ff;\n}\n.ps-img { aspect-ratio: 1; border-radius: 10px; background: linear-gradient(135deg,#6366f1,#8b5cf6); margin-bottom: 10px; overflow: hidden; }\n.ps-img img { width: 100%; height: 100%; object-fit: cover; display: block; }`,
      js: `// CSS animation handles continuous scroll.`
    },

{
  id: "cinematic-slider",
  name: "Cinematic Slider",
  description: "Full-width cinematic image slider with Ken Burns effect and overlay gradients.",
  category: "sliders",
  tags: ["free", "interactive", "javascript"],
  injectScript: true,
  preview: `<div class="comp cinematic-slider">
    <div class="cinematic-slides">
      <div class="cinematic-slide is-active">
        <img src="${images[0]}" alt="" />
        <div class="slide-overlay overlay-bottom"></div>
        <div class="slide-overlay overlay-left"></div>
      </div>
      <div class="cinematic-slide">
        <img src="${images[1]}" alt="" />
        <div class="slide-overlay overlay-bottom"></div>
        <div class="slide-overlay overlay-left"></div>
      </div>
    </div>
    <div class="cinematic-content">
      <div class="content-inner">
        <p class="slide-subtitle">Mountain Studies — Vol. III</p>
        <h2 class="slide-title">Eternal Silence</h2>
        <p class="slide-description">Where the air thins and the noise fades, only scale remains.</p>
        <p class="slide-meta">2024 · Dolomites, Italy</p>
      </div>
    </div>
    <div class="slider-controls">
      <button class="slider-control" aria-label="Previous"><span>←</span></button>
      <button class="slider-control" aria-label="Pause"><span>Ⅱ</span></button>
      <button class="slider-control" aria-label="Next"><span>→</span></button>
    </div>
    <div class="slider-progress"><div class="slider-progress-bar"></div></div>
    <div class="slider-counter"><span>01</span><span class="counter-separator">/</span><span>04</span></div>
  </div>`,
  html: `<section class="cinematic-slider">
    <div class="cinematic-slides">
        <div class="cinematic-slide is-active">
            <img src="https://images.pexels.com/photos/675257/pexels-photo-675257.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800" alt="Eternal Silence">
            <div class="slide-overlay overlay-bottom"></div>
            <div class="slide-overlay overlay-left"></div>
        </div>
        <div class="cinematic-slide">
            <img src="https://images.pexels.com/photos/1280840/pexels-photo-1280840.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800" alt="Veil of Clouds">
            <div class="slide-overlay overlay-bottom"></div>
            <div class="slide-overlay overlay-left"></div>
        </div>
        <div class="cinematic-slide">
            <img src="https://images.pexels.com/photos/15469407/pexels-photo-15469407.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800" alt="Last Light">
            <div class="slide-overlay overlay-bottom"></div>
            <div class="slide-overlay overlay-left"></div>
        </div>
        <div class="cinematic-slide">
            <img src="https://images.pexels.com/photos/34068536/pexels-photo-34068536.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800" alt="Twilight Bodies">
            <div class="slide-overlay overlay-bottom"></div>
            <div class="slide-overlay overlay-left"></div>
        </div>
    </div>
    <div class="cinematic-content">
        <div class="content-inner">
            <p class="slide-subtitle">Mountain Studies — Vol. III</p>
            <h2 class="slide-title">Eternal Silence</h2>
            <p class="slide-description">Where the air thins and the noise fades, only scale remains.</p>
            <p class="slide-meta">2024 · Dolomites, Italy</p>
        </div>
    </div>
    <div class="slider-controls">
        <button class="slider-control" aria-label="Previous slide"><span>←</span></button>
        <button class="slider-control" aria-label="Pause slideshow"><span>Ⅱ</span></button>
        <button class="slider-control" aria-label="Next slide"><span>→</span></button>
    </div>
    <div class="slider-progress"><div class="slider-progress-bar"></div></div>
    <div class="slider-counter"><span>01</span><span class="counter-separator">/</span><span>04</span></div>
</section>`,
  css: `.cinematic-slider {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    background: #000;
    color: #fff;
    box-sizing: border-box;
}

.cinematic-slider *,
.cinematic-slider *::before,
.cinematic-slider *::after {
    box-sizing: border-box;
}

/* SLIDES */

.cinematic-slides {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.cinematic-slide {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: scale(1.05);
    transition: opacity 1.2s ease, transform 1.2s ease;
    pointer-events: none;
}

.cinematic-slide.is-active {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
}

.cinematic-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* KEN BURNS */

.cinematic-slide.is-active img {
    animation: cinematicKenBurns 7s ease-out forwards;
}

@keyframes cinematicKenBurns {
    0% { transform: scale(1.08); }
    100% { transform: scale(1); }
}

/* OVERLAYS */

.slide-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.overlay-bottom {
    background: linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.30) 50%, rgba(0,0,0,.20));
}

.overlay-left {
    background: linear-gradient(to right, rgba(0,0,0,.60), transparent);
}

/* CONTENT */

.cinematic-content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    pointer-events: none;
}

.content-inner {
    width: 100%;
    padding: 0 8vw 80px;
}

.slide-subtitle {
    margin: 0 0 12px;
    font-family: "Courier New", monospace;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .3em;
    color: rgba(255,255,255,.5);
}

.slide-title {
    margin: 0;
    max-width: 800px;
    font-size: clamp(52px, 7vw, 112px);
    line-height: .95;
    font-weight: 300;
    letter-spacing: -.05em;
    animation: fadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
}

.slide-description {
    max-width: 430px;
    margin: 22px 0 0;
    font-size: 16px;
    line-height: 1.6;
    color: rgba(255,255,255,.6);
    animation: fadeUp .8s .08s cubic-bezier(.22,1,.36,1) both;
}

.slide-meta {
    margin: 15px 0 0;
    font-family: "Courier New", monospace;
    font-size: 11px;
    color: rgba(255,255,255,.3);
    animation: fadeUp .8s .15s cubic-bezier(.22,1,.36,1) both;
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* CONTROLS */

.slider-controls {
    position: absolute;
    right: 8vw;
    bottom: 48px;
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 20;
}

.slider-control {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    padding: 0;
    border: 0;
    background: transparent;
    color: rgba(255,255,255,.4);
    cursor: pointer;
    font-size: 20px;
    transition: color .3s ease, transform .3s ease;
}

.slider-control:hover {
    color: #fff;
    transform: scale(1.1);
}

.slider-control:focus-visible {
    outline: 1px solid #fff;
    outline-offset: 4px;
}

/* PROGRESS */

.slider-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255,255,255,.1);
    z-index: 20;
}

.slider-progress-bar {
    width: 0;
    height: 100%;
    background: rgba(255,255,255,.7);
}

.slider-progress-bar.animate {
    animation: cinematicProgress 5.5s linear forwards;
}

@keyframes cinematicProgress {
    from { width: 0; }
    to { width: 100%; }
}

/* COUNTER */

.slider-counter {
    position: absolute;
    top: 48px;
    left: 8vw;
    z-index: 20;
    font-family: "Courier New", monospace;
    font-size: 13px;
    color: rgba(255,255,255,.4);
}

.slider-counter #currentSlide {
    color: rgba(255,255,255,.9);
}

.counter-separator {
    margin: 0 5px;
}

/* RESPONSIVE */

@media (max-width: 768px) {
    .cinematic-slider {
        height: 600px;
    }
    .content-inner {
        padding: 0 25px 70px;
    }
    .slide-title {
        font-size: clamp(48px, 15vw, 80px);
    }
    .slide-description {
        font-size: 14px;
    }
    .slider-counter {
        top: 25px;
        left: 25px;
    }
    .slider-controls {
        right: 20px;
        bottom: 25px;
    }
}

/* Preview overrides */
.component-card__preview .cinematic-slider {
    height: 220px !important;
}

.component-card__preview .content-inner {
    padding: 0 15px 20px !important;
}

.component-card__preview .slide-subtitle {
    font-size: 8px !important;
    margin-bottom: 4px !important;
}

.component-card__preview .slide-title {
    font-size: 20px !important;
}

.component-card__preview .slide-description {
    font-size: 9px !important;
    margin-top: 6px !important;
    display: none;
}

.component-card__preview .slide-meta {
    font-size: 7px !important;
    margin-top: 4px !important;
}

.component-card__preview .slider-controls {
    right: 10px !important;
    bottom: 10px !important;
    gap: 4px !important;
}

.component-card__preview .slider-control {
    width: 24px !important;
    height: 24px !important;
    font-size: 12px !important;
}

.component-card__preview .slider-counter {
    top: 10px !important;
    left: 15px !important;
    font-size: 9px !important;
}

.component-card__preview .slider-progress {
    display: none !important;
}

.modal__preview .cinematic-slider {
    height: 420px !important;
}

.modal__preview .content-inner {
    padding: 0 40px 50px !important;
}

.modal__preview .slide-title {
    font-size: 48px !important;
}

.modal__preview .slide-description {
    display: block;
    font-size: 14px !important;
}
`,
  js: `(function() {
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

  window.initCinematicSlider = initCinematicSlider;

  function autoInit() {
    document.querySelectorAll('.cinematic-slider').forEach(initCinematicSlider);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
})();
`
},

{
  id: "coverflow-slider",
  name: "Coverflow Slider",
  description: "3D coverflow card slider with perspective transforms and touch support.",
  category: "sliders",
  tags: ["free", "interactive", "javascript"],
  injectScript: true,
  preview: `<div class="comp coverflow-component">
    <div class="coverflow-stage">
      <div class="coverflow-card is-active" data-index="0">
        <img src="${images[0]}" alt="" />
        <span class="coverflow-number">01</span>
        <div class="coverflow-info"><span>Geometric Studies</span><strong>Dark Facade</strong></div>
      </div>
      <div class="coverflow-card" data-index="1">
        <img src="${images[1]}" alt="" />
        <span class="coverflow-number">02</span>
        <div class="coverflow-info"><span>Urban Series</span><strong>Blue Sky</strong></div>
      </div>
      <div class="coverflow-card" data-index="2">
        <img src="${images[2]}" alt="" />
        <span class="coverflow-number">03</span>
        <div class="coverflow-info"><span>Color Theory</span><strong>Orange Lines</strong></div>
      </div>
      <div class="coverflow-card" data-index="3">
        <img src="${images[3]}" alt="" />
        <span class="coverflow-number">04</span>
        <div class="coverflow-info"><span>Minimalism</span><strong>White Panels</strong></div>
      </div>
    </div>
    <button class="coverflow-arrow coverflow-prev" aria-label="Previous">←</button>
    <button class="coverflow-arrow coverflow-next" aria-label="Next">→</button>
    <div class="coverflow-dots"></div>
  </div>`,
  html: `<div class="coverflow-component">
    <div class="coverflow-stage">
        <div class="coverflow-card" data-index="0">
            <img src="https://images.pexels.com/photos/17187918/pexels-photo-17187918.jpeg?auto=compress&cs=tinysrgb&h=800&w=600" alt="Dark Facade">
            <span class="coverflow-number">01</span>
            <div class="coverflow-info"><span>Geometric Studies</span><strong>Dark Facade</strong></div>
        </div>
        <div class="coverflow-card" data-index="1">
            <img src="https://images.pexels.com/photos/12903905/pexels-photo-12903905.jpeg?auto=compress&cs=tinysrgb&h=800&w=600" alt="Blue Sky">
            <span class="coverflow-number">02</span>
            <div class="coverflow-info"><span>Urban Series</span><strong>Blue Sky</strong></div>
        </div>
        <div class="coverflow-card" data-index="2">
            <img src="https://images.pexels.com/photos/29114530/pexels-photo-29114530.jpeg?auto=compress&cs=tinysrgb&h=800&w=600" alt="Orange Lines">
            <span class="coverflow-number">03</span>
            <div class="coverflow-info"><span>Color Theory</span><strong>Orange Lines</strong></div>
        </div>
        <div class="coverflow-card" data-index="3">
            <img src="https://images.pexels.com/photos/9458996/pexels-photo-9458996.jpeg?auto=compress&cs=tinysrgb&h=800&w=600" alt="White Panels">
            <span class="coverflow-number">04</span>
            <div class="coverflow-info"><span>Minimalism</span><strong>White Panels</strong></div>
        </div>
        <div class="coverflow-card" data-index="4">
            <img src="https://images.pexels.com/photos/26547201/pexels-photo-26547201.jpeg?auto=compress&cs=tinysrgb&h=800&w=600" alt="Window Grid">
            <span class="coverflow-number">05</span>
            <div class="coverflow-info"><span>Patterns</span><strong>Window Grid</strong></div>
        </div>
        <div class="coverflow-card" data-index="5">
            <img src="https://images.pexels.com/photos/26241922/pexels-photo-26241922.jpeg?auto=compress&cs=tinysrgb&h=800&w=600" alt="Glass Tower">
            <span class="coverflow-number">06</span>
            <div class="coverflow-info"><span>Perspective</span><strong>Glass Tower</strong></div>
        </div>
        <div class="coverflow-card" data-index="6">
            <img src="https://images.pexels.com/photos/9612453/pexels-photo-9612453.jpeg?auto=compress&cs=tinysrgb&h=800&w=600" alt="Sleek Lines">
            <span class="coverflow-number">07</span>
            <div class="coverflow-info"><span>Contemporary</span><strong>Sleek Lines</strong></div>
        </div>
    </div>
    <button class="coverflow-arrow coverflow-prev" aria-label="Previous">←</button>
    <button class="coverflow-arrow coverflow-next" aria-label="Next">→</button>
    <div class="coverflow-dots"></div>
</div>`,
  css: `.coverflow-component {
    position: relative;
    width: 100%;
    height: 520px;
    overflow: hidden;
    font-family: Inter, Arial, sans-serif;
    perspective: 1400px;
}

.coverflow-stage {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
}

.coverflow-card {
    position: absolute;
    width: 280px;
    height: 420px;
    overflow: hidden;
    border-radius: 4px;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(.22,1,.36,1), opacity 0.6s ease, filter 0.6s ease;
    user-select: none;
}

.coverflow-card img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    pointer-events: none;
}

.coverflow-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,.8), transparent 55%);
    opacity: 0;
    transition: opacity .5s ease;
}

.coverflow-card.is-active::after {
    opacity: 1;
}

.coverflow-number {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 5;
    font-family: monospace;
    font-size: 11px;
    color: rgba(255,255,255,.6);
    mix-blend-mode: difference;
}

.coverflow-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    padding: 24px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity .5s ease, transform .5s ease;
}

.coverflow-card.is-active .coverflow-info {
    opacity: 1;
    transform: translateY(0);
}

.coverflow-info span {
    display: block;
    margin-bottom: 6px;
    font-family: monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .12em;
    color: rgba(255,255,255,.5);
}

.coverflow-info strong {
    display: block;
    color: #fff;
    font-size: 24px;
    font-weight: 300;
}

.coverflow-arrow {
    position: absolute;
    top: 50%;
    z-index: 50;
    width: 44px;
    height: 44px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 50%;
    background: rgba(10,10,10,.5);
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    transform: translateY(-50%);
    transition: background .25s ease, border-color .25s ease, transform .25s ease;
}

.coverflow-arrow:hover {
    background: rgba(255,255,255,.1);
    border-color: rgba(255,255,255,.4);
    transform: translateY(-50%) scale(1.08);
}

.coverflow-prev {
    left: 24px;
}

.coverflow-next {
    right: 24px;
}

.coverflow-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    z-index: 50;
    display: flex;
    align-items: center;
    gap: 7px;
    transform: translateX(-50%);
}

.coverflow-dot {
    width: 6px;
    height: 6px;
    padding: 0;
    border: 0;
    border-radius: 10px;
    background: rgba(255,255,255,.25);
    cursor: pointer;
    transition: width .35s ease, background .35s ease;
}

.coverflow-dot.is-active {
    width: 30px;
    background: #fff;
}

@media (max-width: 768px) {
    .coverflow-component {
        height: 440px;
    }
    .coverflow-card {
        width: 230px;
        height: 350px;
    }
    .coverflow-prev {
        left: 10px;
    }
    .coverflow-next {
        right: 10px;
    }
}

@media (max-width: 480px) {
    .coverflow-component {
        height: 400px;
    }
    .coverflow-card {
        width: 210px;
        height: 320px;
    }
}

/* Preview overrides */
.component-card__preview .coverflow-component {
    height: 220px !important;
}

.component-card__preview .coverflow-card {
    width: 120px !important;
    height: 160px !important;
}

.component-card__preview .coverflow-arrow {
    width: 24px !important;
    height: 24px !important;
    font-size: 12px !important;
}

.component-card__preview .coverflow-prev {
    left: 8px !important;
}

.component-card__preview .coverflow-next {
    right: 8px !important;
}

.component-card__preview .coverflow-info {
    display: none !important;
}

.component-card__preview .coverflow-number {
    font-size: 8px !important;
    top: 6px !important;
    right: 6px !important;
}

.component-card__preview .coverflow-dots {
    bottom: 8px !important;
}

.component-card__preview .coverflow-dot {
    width: 4px !important;
    height: 4px !important;
}

.component-card__preview .coverflow-dot.is-active {
    width: 16px !important;
}

.modal__preview .coverflow-component {
    height: 420px !important;
}

.modal__preview .coverflow-card {
    width: 240px !important;
    height: 360px !important;
}
`,
  js: `(function() {
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

        card.style.transform = \`translateX(\${x}px) translateZ(\${z}px) rotateY(\${rotation}deg) scale(\${scale})\`;
        card.style.zIndex = 30 - distance;
        card.style.opacity = 1 - distance * .15;

        if (offset === 0) {
          card.classList.add('is-active');
          card.style.filter = 'none';
        } else {
          card.classList.remove('is-active');
          card.style.filter = \`brightness(\${.5 - distance * .1})\`;
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

  window.initCoverflow = initCoverflow;

  function autoInit() {
    document.querySelectorAll('.coverflow-component').forEach(initCoverflow);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
  } else {
    autoInit();
  }
})();
`
},
{
      id: "masonry-gallery",
      name: "Masonry Gallery",
      description: "Pinterest-style masonry image grid.",
      category: "gallery",
      tags: ["free", "css"],
      preview: `
        <div class="comp masonry-gallery">
          <div class="mg-item mg-item--tall"></div>
          <div class="mg-item"></div>
          <div class="mg-item"></div>
          <div class="mg-item mg-item--wide"></div>
          <div class="mg-item"></div>
        </div>
      `,
      html: `<div class="masonry-gallery">
  
  <div class="mg-item mg-item--tall"></div>
  <div class="mg-item"></div>
  <div class="mg-item"></div>
  <div class="mg-item mg-item--wide"></div>
</div>`,
      css: `.masonry-gallery {\n  display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 40px;\n  gap: 8px; width: 100%; max-width: 320px;\n}\n.mg-item { background: linear-gradient(135deg,#6366f1,#8b5cf6); border-radius: 10px; grid-row: span 2; }\n.mg-item--tall { grid-row: span 4; }\n.mg-item--wide { grid-column: span 2; }`,
      js: `// Pure CSS masonry grid. No JavaScript required.`
    },
{
      id: "image-reveal-gallery",
      name: "Image Reveal Gallery",
      description: "Hover to reveal hidden image layers.",
      category: "gallery",
      tags: ["free", "interactive", "css"],
      preview: `
        <div class="comp image-reveal">
          <div class="ir-layer"></div>
          <div class="ir-layer"></div>
          <div class="ir-layer"></div>
        </div>
      `,
      html: `<div class="image-reveal">\n  <div class="ir-layer"></div>\n  <div class="ir-layer"></div>\n  <div class="ir-layer"></div>\n</div>`,
      css: `.image-reveal {\n  position: relative; width: 180px; height: 140px; cursor: pointer;\n}\n.ir-layer {\n  position: absolute; inset: 0; border-radius: 12px;\n  background: linear-gradient(135deg,#6366f1,#8b5cf6);\n  transition: transform 400ms cubic-bezier(0.22,1,0.36,1), opacity 400ms ease;\n}\n.ir-layer:nth-child(2) { background: linear-gradient(135deg,#ec4899,#f43f5e); opacity: 0; }\n.ir-layer:nth-child(3) { background: linear-gradient(135deg,#10b981,#3b82f6); opacity: 0; }\n.image-reveal:hover .ir-layer:nth-child(1) { transform: translate(-12px,-12px); opacity: 0.5; }\n.image-reveal:hover .ir-layer:nth-child(2) { transform: translate(0,0); opacity: 1; }\n.image-reveal:hover .ir-layer:nth-child(3) { transform: translate(12px,12px); opacity: 1; }`,
      js: `// Hover-driven reveal. No JavaScript required.`
    },
{
      id: "testimonial-slider",
      name: "Testimonial Slider",
      description: "Auto-rotating quote slider with author info.",
      category: "reviews",
      tags: ["free", "interactive", "javascript"],
      preview: `
        <div class="comp testimonial-slider">
          <div class="ts-track">
            <div class="ts-slide">
              <div class="ts-stars">★★★★★</div>
              <p>"Clean code and smooth animations."</p>
              <cite>Sarah L.</cite>
            </div>
            <div class="ts-slide">
              <div class="ts-stars">★★★★★</div>
              <p>"Dropped it into our site in minutes."</p>
              <cite>Marcus R.</cite>
            </div>
          </div>
        </div>
      `,
      html: `<div class="testimonial-slider">
  <div class="ts-track">
    
    <div class="ts-slide">
      <div class="ts-stars">★★★★★</div>
      <p>"Your testimonial text here."</p>
      <cite>Author Name</cite>
    </div>
  </div>
</div>`,
      css: `.testimonial-slider { overflow: hidden; width: 100%; max-width: 300px; border-radius: 14px; }\n.ts-track { display: flex; animation: tsSlide 5s ease-in-out infinite; animation-play-state: paused; }\n@keyframes tsSlide { 0%,45%{transform:translateX(0)} 55%,95%{transform:translateX(-100%)} 100%{transform:translateX(0)} }\n.ts-slide {\n  flex: 0 0 100%; padding: 20px; background: #15171d;\n  border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; color: #f5f7ff;\n}\n.ts-stars { color: #fbbf24; margin-bottom: 10px; letter-spacing: 2px; }\n.ts-slide p { margin: 0 0 14px; font-size: 0.9rem; }\n.ts-slide cite { font-style: normal; font-weight: 700; font-size: 0.8rem; color: #a7adbe; }`,
      js: `// CSS animation starts on hover. No JavaScript required.`
    },
{
      id: "review-cards",
      name: "Review Cards",
      description: "Stacked review cards with hover lift.",
      category: "reviews",
      tags: ["free", "css"],
      preview: `
        <div class="comp review-cards">
          <div class="rc-card rc-card--back"></div>
          <div class="rc-card rc-card--mid"></div>
          <div class="rc-card rc-card--front">
            <div class="ts-stars">★★★★★</div>
            <p>"Great components."</p>
          </div>
        </div>
      `,
      html: `<div class="review-cards">
  
  <div class="rc-card rc-card--back"></div>
  <div class="rc-card rc-card--mid"></div>
  <div class="rc-card rc-card--front">
    <div class="ts-stars">★★★★★</div>
    <p>"Your review text here."</p>
  </div>
</div>`,
      css: `.review-cards { position: relative; width: 180px; height: 120px; }\n.rc-card {\n  position: absolute; inset: 0; border-radius: 14px; background: #15171d;\n  border: 1px solid rgba(255,255,255,0.08); padding: 16px; color: #f5f7ff;\n  transition: transform 400ms cubic-bezier(0.22,1,0.36,1);\n}\n.rc-card--back { transform: translateY(-16px) scale(0.9); opacity: 0.5; }\n.rc-card--mid { transform: translateY(-8px) scale(0.95); opacity: 0.75; }\n.review-cards:hover .rc-card--back { transform: translateY(-24px) scale(0.88); }\n.review-cards:hover .rc-card--mid { transform: translateY(-12px) scale(0.94); }\n.review-cards:hover .rc-card--front { transform: translateY(4px); }\n.rc-card .ts-stars { color: #fbbf24; margin-bottom: 8px; letter-spacing: 2px; font-size: 0.75rem; }\n.rc-card p { margin: 0; font-size: 0.8rem; }`,
      js: `// Pure CSS stacked card hover effect.`
    },
{
      id: "hover-card",
      name: "Hover Card",
      description: "Card that lifts and reveals content on hover.",
      category: "cards",
      tags: ["free", "css"],
      preview: `
        <div class="comp hover-card">
          <div class="hc-glow"></div>
          <div class="hc-body">
            <h4>Hover Me</h4>
            <p>Hidden details appear on hover.</p>
          </div>
        </div>
      `,
      html: `<div class="hover-card">
  
  <div class="hc-glow"></div>
  <div class="hc-body">
    <h4>Card Title</h4>
    <p>Card description text.</p>
  </div>
</div>`,
      css: `.hover-card {\n  position: relative; width: 170px; border-radius: 16px; overflow: hidden;\n  background: #15171d; border: 1px solid rgba(255,255,255,0.08);\n  transition: transform 300ms ease, box-shadow 300ms ease;\n}\n.hover-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.35); }\n.hc-glow {\n  position: absolute; top: 0; left: 0; right: 0; height: 4px;\n  background: linear-gradient(90deg,#6366f1,#8b5cf6); opacity: 0; transition: opacity 300ms ease;\n}\n.hover-card:hover .hc-glow { opacity: 1; }\n.hc-body { padding: 18px; color: #f5f7ff; }\n.hc-body h4 { margin: 0 0 8px; font-size: 1rem; }\n.hc-body p { margin: 0; font-size: 0.8rem; color: #a7adbe; }`,
      js: `// Pure CSS hover card.`
    },
{
      id: "tilt-card",
      name: "Tilt Card",
      description: "3D perspective tilt that follows the cursor.",
      category: "cards",
      tags: ["free", "interactive", "javascript"],
      preview: `
        <div class="comp tilt-card">
          <div class="tc-inner">
            <span>Tilt Card</span>
          </div>
        </div>
      `,
      html: `<div class="tilt-card">
  
  <div class="tc-inner"><span>Card Content</span></div>
</div>`,
      css: `.tilt-card {\n  width: 160px; height: 110px; perspective: 800px; cursor: pointer;\n}\n.tc-inner {\n  width: 100%; height: 100%; border-radius: 16px;\n  background: linear-gradient(135deg,#6366f1,#8b5cf6);\n  display: grid; place-items: center; color: #fff; font-weight: 800;\n  box-shadow: 0 16px 40px rgba(99,102,241,0.35);\n  transition: transform 150ms ease;\n}`,
      js: `const card = document.querySelector('.tilt-card');\nconst inner = card.querySelector('.tc-inner');\ncard.addEventListener('mousemove', e => {\n  const r = card.getBoundingClientRect();\n  const x = (e.clientX - r.left) / r.width - 0.5;\n  const y = (e.clientY - r.top) / r.height - 0.5;\n  inner.style.transform = \`rotateY(\${x*30}deg) rotateX(\${-y*30}deg)\`;\n});\ncard.addEventListener('mouseleave', () => inner.style.transform = 'rotateY(0) rotateX(0)');`
    },
{
      id: "infinite-text",
      name: "Infinite Text",
      description: "Seamlessly scrolling text marquee.",
      category: "marquee",
      tags: ["free", "css"],
      preview: `
        <div class="comp infinite-text">
          <div class="it-track">
            <span>PREMIUM COMPONENTS • PREMIUM COMPONENTS • </span>
            <span>PREMIUM COMPONENTS • PREMIUM COMPONENTS • </span>
          </div>
        </div>
      `,
      html: `<div class="infinite-text">
  <div class="it-track">
    
    <span>Your text here • </span>
    <span>Your text here • </span>
  </div>
</div>`,
      css: `.infinite-text { overflow: hidden; width: 100%; white-space: nowrap; }\n.it-track { display: inline-block; animation: itScroll 8s linear infinite; animation-play-state: paused; }\n@keyframes itScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }\n.it-track span { font-size: 1.2rem; font-weight: 800; color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.5); }`,
      js: `// Pure CSS infinite marquee.`
    },
{
      id: "logo-marquee",
      name: "Logo Marquee",
      description: "Infinite scrolling logo strip.",
      category: "marquee",
      tags: ["free", "css"],
      preview: `
        <div class="comp logo-marquee">
          <div class="lm-track">
            <div class="lm-logo">A</div><div class="lm-logo">B</div><div class="lm-logo">C</div>
            <div class="lm-logo">A</div><div class="lm-logo">B</div><div class="lm-logo">C</div>
          </div>
        </div>
      `,
      html: `<div class="logo-marquee">
  <div class="lm-track">
    
    <div class="lm-logo">Logo 1</div>
    <div class="lm-logo">Logo 2</div>
    <div class="lm-logo">Logo 3</div>
  </div>
</div>`,
      css: `.logo-marquee { overflow: hidden; width: 100%; }\n.lm-track { display: flex; gap: 16px; animation: lmScroll 6s linear infinite; animation-play-state: paused; width: max-content; }\n@keyframes lmScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }\n.lm-logo {\n  width: 56px; height: 56px; border-radius: 14px; background: #1f222c;\n  border: 1px solid rgba(255,255,255,0.08); display: grid; place-items: center;\n  color: #f5f7ff; font-weight: 800;\n}`,
      js: `// Duplicate children in HTML for seamless loop.`
    },
{
      id: "cursor-follow",
      name: "Cursor Follow",
      description: "An element that smoothly follows the cursor.",
      category: "cursor",
      tags: ["free", "interactive", "javascript"],
      preview: `
        <div class="comp cursor-follow">
          <div class="cf-target"></div>
          <p>Move your cursor</p>
        </div>
      `,
      html: `<div class="cursor-follow">
  
  <div class="cf-target"></div>
  <p>Move your cursor over this area</p>
</div>`,
      css: `.cursor-follow { position: relative; width: 200px; height: 130px; border-radius: 16px; background: #15171d; border: 1px solid rgba(255,255,255,0.08); overflow: hidden; display: grid; place-items: center; color: #a7adbe; font-size: 0.8rem; }\n.cf-target { position: absolute; width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg,#6366f1,#8b5cf6); pointer-events: none; transition: transform 120ms ease; }`,
      js: `const area = document.querySelector('.cursor-follow');\nconst target = area.querySelector('.cf-target');\narea.addEventListener('mousemove', e => {\n  const r = area.getBoundingClientRect();\n  target.style.transform = \`translate(\${e.clientX - r.left - 16}px, \${e.clientY - r.top - 16}px)\`;\n});`
    },
{
      id: "cursor-spotlight",
      name: "Cursor Spotlight",
      description: "Radial glow that follows the cursor inside a card.",
      category: "cursor",
      tags: ["free", "interactive", "javascript", "css"],
      preview: `
        <div class="comp cursor-spotlight">
          <div class="cs-glow"></div>
          <span>Spotlight</span>
        </div>
      `,
      html: `<div class="cursor-spotlight">
  
  <div class="cs-glow"></div>
  <span>Your content here</span>
</div>`,
      css: `.cursor-spotlight { position: relative; width: 180px; height: 120px; border-radius: 16px; background: #15171d; border: 1px solid rgba(255,255,255,0.08); overflow: hidden; display: grid; place-items: center; color: #f5f7ff; font-weight: 700; }\n.cs-glow { position: absolute; width: 120px; height: 120px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.5), transparent 70%); pointer-events: none; opacity: 0; transition: opacity 200ms ease; }\n.cursor-spotlight:hover .cs-glow { opacity: 1; }`,
      js: `const spot = document.querySelector('.cursor-spotlight');\nconst glow = spot.querySelector('.cs-glow');\nspot.addEventListener('mousemove', e => {\n  const r = spot.getBoundingClientRect();\n  glow.style.transform = \`translate(\${e.clientX - r.left - 60}px, \${e.clientY - r.top - 60}px)\`;\n});`
    },
{
      id: "reveal-text",
      name: "Reveal Text",
      description: "Text that reveals with a sliding mask on hover.",
      category: "text",
      tags: ["free", "css"],
      preview: `
        <div class="comp reveal-text">
          <span class="rt-base">Reveal</span>
          <span class="rt-active">Reveal</span>
        </div>
      `,
      html: `<div class="reveal-text">
  
  <span class="rt-base">Your Text</span>
  <span class="rt-active">Your Text</span>
</div>`,
      css: `.reveal-text { position: relative; font-size: 2rem; font-weight: 900; cursor: default; }\n.rt-base { color: rgba(255,255,255,0.15); }\n.rt-active { position: absolute; left: 0; top: 0; color: #6366f1; clip-path: inset(0 100% 0 0); transition: clip-path 500ms cubic-bezier(0.22,1,0.36,1); }\n.reveal-text:hover .rt-active { clip-path: inset(0 0 0 0); }`,
      js: `// Pure CSS text reveal.`
    },
{
      id: "gradient-text",
      name: "Gradient Text",
      description: "Animated gradient flow inside text.",
      category: "text",
      tags: ["free", "css"],
      preview: `
        <div class="comp gradient-text">Gradient</div>
      `,
      html: `<div class="gradient-text">Your Text Here</div>`,
      css: `.gradient-text {\n  font-size: 2rem; font-weight: 900;\n  background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899, #6366f1);\n  background-size: 300% 100%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: gtFlow 3s linear infinite;\n}\n@keyframes gtFlow { 0%{background-position:0% 50%} 100%{background-position:100% 50%} }`,
      js: `// Pure CSS animated gradient text.`
    },
{
      id: "magnetic-button",
      name: "Magnetic Button",
      description: "Button that magnetically pulls toward the cursor.",
      category: "buttons",
      tags: ["free", "interactive", "javascript"],
      preview: `
        <div class="comp magnetic-button">
          <button>Hover Me</button>
        </div>
      `,
      html: `<div class="magnetic-button">
  
  <button>Hover Me</button>
</div>`,
      css: `.magnetic-button { padding: 20px; }\n.magnetic-button button {\n  padding: 12px 28px; border: 0; border-radius: 999px;\n  background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff;\n  font-weight: 700; cursor: pointer; transition: transform 150ms ease;\n}`,
      js: `const wrap = document.querySelector('.magnetic-button');\nconst btn = wrap.querySelector('button');\nwrap.addEventListener('mousemove', e => {\n  const r = wrap.getBoundingClientRect();\n  const x = e.clientX - r.left - r.width/2;\n  const y = e.clientY - r.top - r.height/2;\n  btn.style.transform = \`translate(\${x*0.3}px, \${y*0.3}px)\`;\n});\nwrap.addEventListener('mouseleave', () => btn.style.transform = 'translate(0,0)');`
    },
{
      id: "liquid-button",
      name: "Liquid Button",
      description: "Button with a liquid fill hover effect.",
      category: "buttons",
      tags: ["free", "css"],
      preview: `
        <div class="comp liquid-button">
          <button><span>Liquid</span></button>
        </div>
      `,
      html: `<div class="liquid-button">
  
  <button><span>Button Text</span></button>
</div>`,
      css: `.liquid-button button {\n  position: relative; padding: 12px 28px; border: 1px solid rgba(255,255,255,0.12);\n  border-radius: 999px; background: transparent; color: #f5f7ff; font-weight: 700; overflow: hidden;\n}\n.liquid-button button::before {\n  content: ''; position: absolute; inset: 0; background: linear-gradient(135deg,#6366f1,#8b5cf6);\n  transform: translateY(100%); transition: transform 400ms cubic-bezier(0.22,1,0.36,1);\n}\n.liquid-button button:hover::before { transform: translateY(0); }\n.liquid-button button span { position: relative; z-index: 1; }`,
      js: `// Pure CSS liquid button.`
    },
{
      id: "navbar",
      name: "Navbar",
      description: "Clean sticky navbar with blur background.",
      category: "navigation",
      tags: ["free", "css"],
      preview: `
        <nav class="comp comp-navbar">
          <span class="cn-logo">Logo</span>
          <div class="cn-links"><a href="#">Home</a><a href="#">About</a><a href="#">Contact</a></div>
        </nav>
      `,
      html: `<nav class="comp-navbar">
  
  <span class="cn-logo">Your Logo</span>
  
  <div class="cn-links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
      css: `.comp-navbar {\n  display: flex; align-items: center; justify-content: space-between; gap: 16px;\n  width: 100%; max-width: 320px; padding: 12px 18px;\n  background: rgba(21,23,29,0.8); backdrop-filter: blur(12px);\n  border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #f5f7ff;\n}\n.cn-logo { font-weight: 800; }\n.cn-links { display: flex; gap: 14px; }\n.cn-links a { font-size: 0.8rem; color: #a7adbe; transition: color 200ms ease; }\n.cn-links a:hover { color: #fff; }`,
      js: `// Pure CSS navbar component.`
    },
{
      id: "mobile-menu",
      name: "Mobile Menu",
      description: "Animated hamburger menu toggle.",
      category: "navigation",
      tags: ["free", "interactive", "javascript"],
      preview: `
        <div class="comp mobile-menu">
          <button class="mm-btn" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
      `,
      html: `<div class="mobile-menu">
  
  <button class="mm-btn" aria-label="Menu"><span></span><span></span><span></span></button>
</div>`,
      css: `.mobile-menu { padding: 10px; }\n.mm-btn { width: 44px; height: 44px; border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; background: #15171d; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 5px; }\n.mm-btn span { width: 20px; height: 2px; background: #f5f7ff; border-radius: 2px; transition: transform 300ms ease, opacity 300ms ease; }\n.mm-btn.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }\n.mm-btn.is-open span:nth-child(2) { opacity: 0; }\n.mm-btn.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }`,
      js: `const btn = document.querySelector('.mm-btn');\nbtn.addEventListener('click', () => btn.classList.toggle('is-open'));`
    },
{
      id: "gradient-hero",
      name: "Gradient Hero",
      description: "Hero section with animated gradient background.",
      category: "hero",
      tags: ["free", "css"],
      preview: `
        <div class="comp gradient-hero">
          <h3>Build faster.</h3>
          <p>Premium components for modern sites.</p>
        </div>
      `,
      html: `<section class="gradient-hero">
  
  <h3>Your Headline</h3>
  <p>Your description text.</p>
</section>`,
      css: `.gradient-hero {\n  width: 100%; max-width: 340px; padding: 36px; border-radius: 18px;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);\n  background-size: 200% 200%; animation: ghMove 6s ease infinite;\n  color: #fff; text-align: center;\n}\n@keyframes ghMove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }\n.gradient-hero h3 { margin: 0 0 8px; font-size: 1.4rem; }\n.gradient-hero p { margin: 0; font-size: 0.85rem; opacity: 0.9; }`,
      js: `// Pure CSS animated gradient hero.`
    },
{
      id: "split-hero",
      name: "Split Hero",
      description: "Two-column hero with image and text.",
      category: "hero",
      tags: ["free", "css"],
      preview: `
        <div class="comp split-hero">
          <div class="sh-text"><strong>Ship faster.</strong></div>
          <div class="sh-visual"></div>
        </div>
      `,
      html: `<div class="split-hero">
  
  <div class="sh-text"><strong>Your Headline</strong></div>
  
  <div class="sh-visual"></div>
</div>`,
      css: `.split-hero {\n  display: grid; grid-template-columns: 1fr 1fr; gap: 12px; width: 100%; max-width: 320px;\n  padding: 16px; border-radius: 16px; background: #15171d; border: 1px solid rgba(255,255,255,0.08);\n}\n.sh-text { display: grid; place-items: center; color: #f5f7ff; font-size: 1rem; }\n.sh-visual { min-height: 80px; border-radius: 12px; background: linear-gradient(135deg,#6366f1,#8b5cf6); }`,
      js: `// Pure CSS split hero layout.`
    },
{
      id: "spinner-loader",
      name: "Spinner Loader",
      description: "Animated circular loading spinner.",
      category: "loaders",
      tags: ["free", "css"],
      preview: `
        <div class="comp spinner-loader">
          <div class="spinner"></div>
        </div>
      `,
      html: `<div class="spinner-loader">
  
  <div class="spinner"></div>
</div>`,
      css: `.spinner-loader { padding: 10px; }\n.spinner { width: 44px; height: 44px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.1); border-top-color: #6366f1; animation: spin 800ms linear infinite; }\n@keyframes spin { to { transform: rotate(360deg); } }`,
      js: `// Pure CSS spinner.`
    },
{
      id: "skeleton-loader",
      name: "Skeleton Loader",
      description: "Pulsing skeleton placeholder blocks.",
      category: "loaders",
      tags: ["free", "css"],
      preview: `
        <div class="comp skeleton-loader">
          <div class="sk-circle"></div>
          <div class="sk-lines"><div></div><div></div></div>
        </div>
      `,
      html: `<div class="skeleton-loader">
  
  <div class="sk-circle"></div>
  <div class="sk-lines"><div></div><div></div></div>
</div>`,
      css: `.skeleton-loader { display: flex; align-items: center; gap: 12px; width: 220px; }\n.sk-circle { width: 44px; height: 44px; border-radius: 50%; background: rgba(255,255,255,0.08); animation: pulse 1.5s ease-in-out infinite; }\n.sk-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; }\n.sk-lines div { height: 10px; border-radius: 999px; background: rgba(255,255,255,0.08); animation: pulse 1.5s ease-in-out infinite; }\n.sk-lines div:nth-child(2) { width: 70%; }\n@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`,
      js: `// Pure CSS skeleton loader.`
    },
{
      id: "gradient-mesh",
      name: "Gradient Mesh",
      description: "Animated soft mesh gradient background.",
      category: "backgrounds",
      tags: ["free", "css"],
      preview: `
        <div class="comp gradient-mesh"></div>
      `,
      html: `<div class="gradient-mesh"></div>`,
      css: `.gradient-mesh {\n  width: 100%; max-width: 300px; height: 160px; border-radius: 18px;\n  background:\n    radial-gradient(circle at 20% 30%, rgba(99,102,241,0.6), transparent 40%),\n    radial-gradient(circle at 80% 70%, rgba(236,72,153,0.5), transparent 40%),\n    radial-gradient(circle at 50% 50%, rgba(139,92,246,0.4), transparent 50%);\n  background-size: 200% 200%; animation: meshMove 8s ease infinite;\n}\n@keyframes meshMove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }`,
      js: `// Pure CSS animated mesh gradient.`
    },
{
      id: "particle-background",
      name: "Particle Background",
      description: "Floating particle dots with CSS.",
      category: "backgrounds",
      tags: ["free", "css"],
      preview: `
        <div class="comp particle-background">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      `,
      html: `<div class="particle-background">
  
  <span></span><span></span><span></span><span></span><span></span>
</div>`,
      css: `.particle-background { position: relative; width: 100%; max-width: 300px; height: 160px; border-radius: 18px; background: #15171d; border: 1px solid rgba(255,255,255,0.08); overflow: hidden; }\n.particle-background span { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.4); animation: float 4s ease-in-out infinite; }\n.particle-background span:nth-child(1){left:10%;top:20%;animation-delay:0s}\n.particle-background span:nth-child(2){left:30%;top:60%;animation-delay:1s}\n.particle-background span:nth-child(3){left:50%;top:30%;animation-delay:2s}\n.particle-background span:nth-child(4){left:70%;top:70%;animation-delay:1.5s}\n.particle-background span:nth-child(5){left:90%;top:40%;animation-delay:0.5s}\n@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }`,
      js: `// Pure CSS floating particles.`
    },
{
      id: "floating-object",
      name: "Floating Object",
      description: "CSS 3D floating cube animation.",
      category: "webgl",
      tags: ["free", "css", "3d"],
      preview: `
        <div class="comp floating-object">
          <div class="fo-cube">
            <div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
        </div>
      `,
      html: `<div class="floating-object">
  
  <div class="fo-cube"><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>`,
      css: `.floating-object { width: 120px; height: 120px; perspective: 400px; display: grid; place-items: center; }\n.fo-cube { position: relative; width: 48px; height: 48px; transform-style: preserve-3d; animation: foFloat 4s ease-in-out infinite, foRotate 8s linear infinite; }\n.fo-cube div { position: absolute; width: 48px; height: 48px; background: rgba(99,102,241,0.5); border: 1px solid rgba(255,255,255,0.2); }\n.fo-cube div:nth-child(1){transform:rotateY(0deg) translateZ(24px)}\n.fo-cube div:nth-child(2){transform:rotateY(90deg) translateZ(24px)}\n.fo-cube div:nth-child(3){transform:rotateY(180deg) translateZ(24px)}\n.fo-cube div:nth-child(4){transform:rotateY(-90deg) translateZ(24px)}\n.fo-cube div:nth-child(5){transform:rotateX(90deg) translateZ(24px)}\n.fo-cube div:nth-child(6){transform:rotateX(-90deg) translateZ(24px)}\n@keyframes foFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }\n@keyframes foRotate { to { transform: rotateX(360deg) rotateY(360deg); } }`,
      js: `// Pure CSS 3D floating cube.`
    },
{
      id: "3d-background",
      name: "3D Background",
      description: "Rotating 3D card plane background effect.",
      category: "webgl",
      tags: ["free", "css", "3d"],
      preview: `
        <div class="comp d3-background">
          <div class="d3-plane"></div>
        </div>
      `,
      html: `<div class="d3-background"><div class="d3-plane"></div></div>`,
      css: `.d3-background { width: 100%; max-width: 300px; height: 160px; border-radius: 18px; background: #15171d; border: 1px solid rgba(255,255,255,0.08); overflow: hidden; perspective: 600px; display: grid; place-items: center; }\n.d3-plane { width: 160%; height: 160%; background-image: linear-gradient(rgba(99,102,241,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.2) 1px, transparent 1px); background-size: 30px 30px; transform: rotateX(60deg); animation: d3Move 6s linear infinite; }\n@keyframes d3Move { to { background-position: 0 30px; } }`,
      js: `// Pure CSS 3D grid background.`
    },
{
      id: "input-field",
      name: "Input Field",
      description: "Premium animated form input with focus glow.",
      category: "forms",
      tags: ["free", "css"],
      preview: `
        <div class="comp input-field">
          <input type="text" placeholder="Enter your email" />
        </div>
      `,
      html: `<div class="input-field">
  
  <input type="text" placeholder="Enter your text" />
</div>`,
      css: `.input-field { width: 100%; max-width: 260px; }\n.input-field input {\n  width: 100%; height: 44px; padding: 0 16px; border: 1px solid rgba(255,255,255,0.12);\n  border-radius: 12px; background: #15171d; color: #f5f7ff; outline: none;\n  transition: border-color 200ms ease, box-shadow 200ms ease;\n}\n.input-field input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.15); }\n.input-field input::placeholder { color: #a7adbe; }`,
      js: `// Pure CSS input field.`
    },
{
      id: "toggle-switch",
      name: "Toggle Switch",
      description: "Animated on/off toggle switch.",
      category: "forms",
      tags: ["free", "interactive", "javascript"],
      preview: `
        <div class="comp toggle-switch">
          <button class="ts-btn" aria-pressed="false"><span></span></button>
        </div>
      `,
      html: `<div class="toggle-switch">
  
  <button class="ts-btn" aria-pressed="false"><span></span></button>
</div>`,
      css: `.toggle-switch { padding: 10px; }\n.ts-btn { width: 56px; height: 30px; border-radius: 999px; border: 0; background: #2a2e3b; cursor: pointer; position: relative; transition: background 300ms ease; }\n.ts-btn span { position: absolute; top: 3px; left: 3px; width: 24px; height: 24px; border-radius: 50%; background: #fff; transition: transform 300ms cubic-bezier(0.22,1,0.36,1); }\n.ts-btn.is-on { background: linear-gradient(135deg,#6366f1,#8b5cf6); }\n.ts-btn.is-on span { transform: translateX(26px); }`,
      js: `const btn = document.querySelector('.ts-btn');\nbtn.addEventListener('click', () => {\n  btn.classList.toggle('is-on');\n  btn.setAttribute('aria-pressed', btn.classList.contains('is-on'));\n});`
    },
{
      id: "accordion",
      name: "Accordion",
      description: "Collapsible content panels.",
      category: "misc",
      tags: ["free", "interactive", "javascript"],
      preview: `
        <div class="comp accordion">
          <div class="acc-item is-open">
            <button class="acc-header">What is included? <span>−</span></button>
            <div class="acc-body"><p>HTML, CSS, and JS for every component.</p></div>
          </div>
          <div class="acc-item">
            <button class="acc-header">Can I use it anywhere? <span>+</span></button>
            <div class="acc-body"><p>Yes. No frameworks required.</p></div>
          </div>
        </div>
      `,
      html: `<div class="accordion">
  
  <div class="acc-item">
    <button class="acc-header">Question <span>+</span></button>
    <div class="acc-body"><p>Answer text here.</p></div>
  </div>
</div>`,
      css: `.accordion { width: 100%; max-width: 300px; }\n.acc-item { border-bottom: 1px solid rgba(255,255,255,0.08); }\n.acc-header { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 12px 0; background: transparent; border: 0; color: #f5f7ff; font-weight: 700; font-size: 0.85rem; }\n.acc-body { max-height: 0; overflow: hidden; transition: max-height 300ms ease; }\n.acc-item.is-open .acc-body { max-height: 100px; }\n.acc-body p { margin: 0 0 12px; font-size: 0.8rem; color: #a7adbe; }`,
      js: `document.querySelectorAll('.acc-header').forEach(h => {\n  h.addEventListener('click', () => h.parentElement.classList.toggle('is-open'));\n});`
    },
{
      id: "tabs",
      name: "Tabs",
      description: "Simple content switcher tabs.",
      category: "misc",
      tags: ["free", "interactive", "javascript"],
      preview: `
        <div class="comp tabs">
          <div class="tab-nav"><button class="is-active">Tab 1</button><button>Tab 2</button></div>
          <div class="tab-panels"><div class="tab-panel is-active">Content 1</div><div class="tab-panel">Content 2</div></div>
        </div>
      `,
      html: `<div class="tabs">
  
  <div class="tab-nav">
    <button class="is-active">Tab 1</button>
    <button>Tab 2</button>
  </div>
  
  <div class="tab-panels">
    <div class="tab-panel is-active">Content 1</div>
    <div class="tab-panel">Content 2</div>
  </div>
</div>`,
      css: `.tabs { width: 100%; max-width: 280px; }\n.tab-nav { display: flex; gap: 6px; margin-bottom: 12px; }\n.tab-nav button { padding: 8px 14px; border: 0; border-radius: 8px; background: transparent; color: #a7adbe; font-weight: 700; font-size: 0.8rem; cursor: pointer; }\n.tab-nav button.is-active { background: #1f222c; color: #fff; }\n.tab-panel { display: none; padding: 14px; border-radius: 10px; background: #15171d; border: 1px solid rgba(255,255,255,0.08); color: #f5f7ff; font-size: 0.85rem; }\n.tab-panel.is-active { display: block; }`,
      js: `document.querySelectorAll('.tabs').forEach(tabs => {\n  const btns = tabs.querySelectorAll('.tab-nav button');\n  const panels = tabs.querySelectorAll('.tab-panel');\n  btns.forEach((btn, i) => btn.addEventListener('click', () => {\n    btns.forEach(b => b.classList.remove('is-active'));\n    panels.forEach(p => p.classList.remove('is-active'));\n    btn.classList.add('is-active');\n    panels[i].classList.add('is-active');\n  }));\n});`
    }
];

  // ============================================================
  // Preview initializers
  // ============================================================
  const previewInits = {
    "basic-slider": (el) => {
      const track = el.querySelector(".bs-track");
      const slides = el.querySelectorAll(".bs-slide");
      let i = 0;
      el.querySelector(".bs-next").onclick = () => { i = (i + 1) % slides.length; track.style.transform = `translateX(${-i * 100}%)`; };
      el.querySelector(".bs-prev").onclick = () => { i = (i - 1 + slides.length) % slides.length; track.style.transform = `translateX(${-i * 100}%)`; };
    },
    "cinematic-slider": (el) => {
      window.initCinematicSlider(el);
    },
    "coverflow-slider": (el) => {
      window.initCoverflow(el);
    },
    "tilt-card": (el) => {
      const inner = el.querySelector(".tc-inner");
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        inner.style.transform = `rotateY(${((e.clientX - r.left) / r.width - 0.5) * 30}deg) rotateX(${-((e.clientY - r.top) / r.height - 0.5) * 30}deg)`;
      });
      el.addEventListener("mouseleave", () => inner.style.transform = "rotateY(0) rotateX(0)");
    },
    "cursor-follow": (el) => {
      const target = el.querySelector(".cf-target");
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        target.style.transform = `translate(${e.clientX - r.left - 16}px, ${e.clientY - r.top - 16}px)`;
      });
    },
    "cursor-spotlight": (el) => {
      const glow = el.querySelector(".cs-glow");
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        glow.style.transform = `translate(${e.clientX - r.left - 60}px, ${e.clientY - r.top - 60}px)`;
      });
    },
    "magnetic-button": (el) => {
      const btn = el.querySelector("button");
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
      });
      el.addEventListener("mouseleave", () => btn.style.transform = "translate(0,0)");
    },
    "mobile-menu": (el) => {
      el.querySelector(".mm-btn").onclick = (e) => e.currentTarget.classList.toggle("is-open");
    },
    "toggle-switch": (el) => {
      const btn = el.querySelector(".ts-btn");
      btn.onclick = () => {
        btn.classList.toggle("is-on");
        btn.setAttribute("aria-pressed", btn.classList.contains("is-on"));
      };
    },
    "accordion": (el) => {
      el.querySelectorAll(".acc-header").forEach((h) =>
        h.onclick = () => h.parentElement.classList.toggle("is-open")
      );
    },
    "tabs": (el) => {
      const btns = el.querySelectorAll(".tab-nav button");
      const panels = el.querySelectorAll(".tab-panel");
      btns.forEach((btn, i) =>
        btn.onclick = () => {
          btns.forEach((b) => b.classList.remove("is-active"));
          panels.forEach((p) => p.classList.remove("is-active"));
          btn.classList.add("is-active");
          panels[i].classList.add("is-active");
        }
      );
    },
    "ghl-infinite-carousel": (el) => {
      const track = el.querySelector(".ghl-carousel-preview__track");
      const dots = el.querySelectorAll(".ghl-carousel-preview__dots span");
      const prevBtn = el.querySelector(".ghl-carousel-preview__prev");
      const nextBtn = el.querySelector(".ghl-carousel-preview__next");

      const originals = Array.from(track.children);
      const originalCount = originals.length;
      if (originalCount === 0) return;

      const before = document.createDocumentFragment();
      const after = document.createDocumentFragment();
      originals.forEach((card) => {
        const clone1 = card.cloneNode(true);
        const clone2 = card.cloneNode(true);
        clone1.setAttribute("aria-hidden", "true");
        clone2.setAttribute("aria-hidden", "true");
        before.appendChild(clone1);
        after.appendChild(clone2);
      });
      track.insertBefore(before, track.firstChild);
      track.appendChild(after);

      const allCards = Array.from(track.children);
      let physicalIndex = originalCount;
      let logicalIndex = 0;
      let cardWidth = 0;
      let gap = 16;

      function getCardWidth() {
        return allCards[0].offsetWidth + gap;
      }

      function setPosition(animate) {
        cardWidth = getCardWidth();
        track.style.transition = animate ? "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)" : "none";
        track.style.transform = `translate3d(${-physicalIndex * cardWidth}px, 0, 0)`;
        dots.forEach((d, i) => d.classList.toggle("active", i === logicalIndex));
      }

      function normalize() {
        let changed = false;
        while (physicalIndex >= originalCount * 2) {
          physicalIndex -= originalCount;
          changed = true;
        }
        while (physicalIndex < originalCount) {
          physicalIndex += originalCount;
          changed = true;
        }
        logicalIndex = ((physicalIndex - originalCount) % originalCount + originalCount) % originalCount;
        if (changed) setPosition(false);
      }

      function next() {
        physicalIndex += 1;
        logicalIndex = (logicalIndex + 1) % originalCount;
        setPosition(true);
      }

      function prev() {
        physicalIndex -= 1;
        logicalIndex = (logicalIndex - 1 + originalCount) % originalCount;
        setPosition(true);
      }

      track.addEventListener("transitionend", (e) => {
        if (e.propertyName !== "transform") return;
        normalize();
      });

      prevBtn.onclick = () => { resetAutoplay(); prev(); };
      nextBtn.onclick = () => { resetAutoplay(); next(); };

      let isDragging = false;
      let startX = 0;
      let currentX = 0;
      let startTranslate = 0;

      track.addEventListener("pointerdown", (e) => {
        isDragging = true;
        startX = e.clientX;
        currentX = startX;
        cardWidth = getCardWidth();
        startTranslate = -physicalIndex * cardWidth;
        track.classList.add("is-dragging");
        track.style.transition = "none";
        try { track.setPointerCapture(e.pointerId); } catch (_) {}
        pauseAutoplay();
      });

      track.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        currentX = e.clientX;
        track.style.transform = `translate3d(${startTranslate + (currentX - startX)}px, 0, 0)`;
      });

      track.addEventListener("pointerup", () => {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove("is-dragging");
        const delta = currentX - startX;
        if (delta < -40) next();
        else if (delta > 40) prev();
        else setPosition(true);
        resumeAutoplay();
      });

      let autoplayTimer = null;
      let isPaused = false;

      function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(() => {
          if (!isPaused && !isDragging) next();
        }, 3000);
      }

      function stopAutoplay() {
        if (autoplayTimer) {
          clearInterval(autoplayTimer);
          autoplayTimer = null;
        }
      }

      function pauseAutoplay() { isPaused = true; }
      function resumeAutoplay() { isPaused = false; }
      function resetAutoplay() { stopAutoplay(); startAutoplay(); }

      el.addEventListener("mouseenter", pauseAutoplay);
      el.addEventListener("mouseleave", resumeAutoplay);

      setPosition(false);
      startAutoplay();
    },
    "ghl-infinite-scroll": (el) => {
      const track = el.querySelector(".ghl-infinite-scroll-preview__track");
      const originals = Array.from(track.children);
      const originalCount = originals.length;
      if (originalCount === 0) return;

      const copies = 4;
      for (let i = 0; i < copies; i++) {
        originals.forEach((card) => {
          const clone = card.cloneNode(true);
          clone.setAttribute("aria-hidden", "true");
          track.appendChild(clone);
        });
      }

      const allCards = Array.from(track.children);

      function getCardWidth() {
        const viewport = track.parentElement.offsetWidth;
        if (window.innerWidth <= 767) return viewport - 32;
        if (window.innerWidth <= 1024) return (viewport - 32) / 3;
        return (viewport - 48) / 4;
      }

      function applyWidth() {
        const width = getCardWidth();
        allCards.forEach((card) => {
          card.style.flex = `0 0 ${width}px`;
          card.style.width = `${width}px`;
          card.style.minWidth = `${width}px`;
        });
      }

      function getSetWidth() {
        if (originalCount === 0 || allCards.length < originalCount * 2) return 0;
        const first = allCards[0];
        const nextSetFirst = allCards[originalCount];
        return nextSetFirst.offsetLeft - first.offsetLeft;
      }

      applyWidth();
      track.getBoundingClientRect();

      let setWidth = getSetWidth();
      let position = 0;
      const speed = 0.5;
      let animationFrame;
      let isPaused = false;

      function animate() {
        if (!isPaused) {
          position -= speed;
          if (setWidth > 0 && position <= -setWidth) {
            position += setWidth;
          }
          track.style.transform = `translate3d(${position}px, 0, 0)`;
        }
        animationFrame = requestAnimationFrame(animate);
      }

      el.addEventListener("mouseenter", () => { isPaused = true; });
      el.addEventListener("mouseleave", () => { isPaused = false; });

      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        cancelAnimationFrame(animationFrame);
        resizeTimer = setTimeout(() => {
          applyWidth();
          requestAnimationFrame(() => {
            setWidth = getSetWidth();
            position = 0;
            track.style.transform = `translate3d(0,0,0)`;
            animationFrame = requestAnimationFrame(animate);
          });
        }, 250);
      });

      animationFrame = requestAnimationFrame(animate);
    },
    "review-testimonial-slider": (el) => {
      if (typeof window.initReviewTestimonialSlider === "function") {
        window.initReviewTestimonialSlider(el);
      }
    }
  };

  // ============================================================
  // DOM refs
  // ============================================================
  const categoryNav = document.getElementById("category-nav");
  const componentGrid = document.getElementById("component-grid");
  const emptyState = document.getElementById("empty-state");
  const categoryEyebrow = document.getElementById("category-eyebrow");
  const categoryTitle = document.getElementById("category-title");
  const categoryDesc = document.getElementById("category-desc");
  const searchInput = document.querySelector(".search__input");
  const filterChips = document.querySelectorAll(".filter-chip");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebarClose = document.querySelector(".sidebar__close");
  const themeToggle = document.querySelector(".theme-toggle");
  const modal = document.getElementById("code-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.querySelector(".modal__close");
  const toast = document.getElementById("toast");
  const previewViewport = document.getElementById("preview-viewport");
  const previewStage = document.querySelector("[data-preview-stage]");
  const previewWorkspace = document.querySelector(".preview-workspace");
  const modalBody = document.querySelector(".modal__body");

  function closeMobileSidebar() {
    sidebar.classList.remove("is-open");
    sidebarOverlay.classList.remove("is-open");
  }

  // ============================================================
  // Render sidebar
  // ============================================================
  function renderSidebar() {
    categoryNav.innerHTML = "";

    categories.forEach((cat) => {
      const items = components.filter((c) => c.category === cat.id).map((c) => c.name);

      const btn = document.createElement("button");
      btn.className = `sidebar__category ${cat.id === currentCategory ? "is-active" : ""}`;
      btn.setAttribute("data-category", cat.id);
      btn.innerHTML = `<span>${cat.name}</span>${items.length ? `<span class="sidebar__arrow">›</span>` : ""}`;
      if (items.length) {
        btn.classList.toggle("is-open", cat.id === currentCategory);
      }
      categoryNav.appendChild(btn);

      if (items.length) {
        const list = document.createElement("div");
        list.className = "sidebar__items";
        items.forEach((name) => {
          const item = document.createElement("div");
          item.className = "sidebar__item";
          item.textContent = name;
          item.onclick = (e) => {
            e.stopPropagation();
            const comp = components.find((c) => c.category === cat.id && c.name === name);
            if (comp) openModal(comp);
          };
          list.appendChild(item);
        });
        categoryNav.appendChild(list);
      }
    });
  }

  // ============================================================
  // Render grid
  // ============================================================
  function renderGrid() {
    const filtered = components.filter((c) => {
      const matchesCategory = currentCategory === "all" || c.category === currentCategory;
      const matchesFilter = currentFilter === "all" || c.tags.includes(currentFilter);
      const matchesSearch = !searchQuery ||
        c.name.toLowerCase().includes(searchQuery) ||
        c.description.toLowerCase().includes(searchQuery) ||
        c.category.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesFilter && matchesSearch;
    });

    componentGrid.innerHTML = "";

    if (filtered.length === 0) {
      componentGrid.hidden = true;
      emptyState.hidden = false;
      return;
    }

    componentGrid.hidden = false;
    emptyState.hidden = true;

    filtered.forEach((comp) => {
      const card = document.createElement("article");
      card.className = "component-card";
      card.innerHTML = `
        <div class="component-card__preview" data-preview="${comp.id}"></div>
        <div class="component-card__body">
          <div class="component-card__meta">
            <span class="component-card__category">${getCategoryName(comp.category)}</span>
            ${comp.tags.slice(0, 2).map((t) => `<span class="component-card__tag">${t}</span>`).join("")}
          </div>
          <h3 class="component-card__title">${escapeHtml(comp.name)}</h3>
          <p class="component-card__desc">${escapeHtml(comp.description)}</p>
          <div class="component-card__actions">
            <button class="component-card__btn" data-preview-btn="${comp.id}">Preview</button>
            <button class="component-card__btn component-card__btn--primary" data-code-btn="${comp.id}">Get Code</button>
          </div>
        </div>
      `;
      componentGrid.appendChild(card);

      const previewContainer = card.querySelector(`[data-preview="${comp.id}"]`);
      injectPreview(previewContainer, comp);

      card.querySelector(`[data-preview-btn="${comp.id}"]`).onclick = () => openModal(comp);
      card.querySelector(`[data-code-btn="${comp.id}"]`).onclick = () => openModal(comp);
    });

    const cat = categories.find((c) => c.id === currentCategory);
    categoryEyebrow.textContent = cat.id === "all" ? "Library" : cat.name;
    categoryTitle.textContent = cat.id === "all" ? "All Components" : cat.name;
    categoryDesc.textContent = cat.desc;
  }

  function injectPreview(container, comp) {
    const styleId = `style-${comp.id}`;
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = comp.css;
      document.head.appendChild(style);
    }

    if (comp.injectScript) {
      const scriptId = `script-${comp.id}`;
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.textContent = comp.js;
        document.head.appendChild(script);
      }
    }

    container.innerHTML = comp.preview;
    if (previewInits[comp.id]) {
      const inner = container.firstElementChild;
      if (inner) {
        try {
          previewInits[comp.id](inner);
        } catch (err) {
          console.error(`Preview init failed for ${comp.id}:`, err);
        }
      }
    }
  }

  function getCategoryName(id) {
    return categories.find((c) => c.id === id)?.name || id;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderCode(code) {
    return escapeHtml(code || "")
      .split("\n")
      .map((line) => `<span class="code-line"><span class="code-line__text">${line || " "}</span></span>`)
      .join("");
  }

  function setPreviewViewport(size) {
    previewViewport.classList.remove("is-desktop", "is-tablet", "is-mobile");
    previewViewport.classList.add(`is-${size}`);
    modal.querySelectorAll("[data-viewport]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.viewport === size);
    });
    updatePreviewScale();
  }

  function updatePreviewScale() {
    previewViewport.style.setProperty("--preview-scale", "1");
  }

  function refreshModalPreview() {
    if (!activeModalComponent) return;
    injectPreview(document.getElementById("modal-preview"), activeModalComponent);
  }

  function getStandalonePreviewHtml(comp) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(comp.name)}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      min-height: 100vh;
      margin: 0;
      padding: 48px;
      display: grid;
      place-items: center;
      background: #0b0c10;
      color: #f5f7ff;
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    body > * { width: min(100%, 1100px); }
${comp.css}
  </style>
</head>
<body>
${comp.html || comp.preview}
  <script>
${comp.js || ""}
  <\/script>
</body>
</html>`;
  }

  // ============================================================
  // Modal
  // ============================================================
  function openModal(comp) {
    activeModalComponent = comp;
    document.getElementById("modal-category").textContent = getCategoryName(comp.category);
    document.getElementById("modal-title").textContent = comp.name;
    document.getElementById("modal-tags").textContent = comp.tags
      .slice(0, 3)
      .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1))
      .join(" · ");

    const previewContainer = document.getElementById("modal-preview");
    injectPreview(previewContainer, comp);

    const htmlCode = document.getElementById("modal-code-html-content");
    const cssCode = document.getElementById("modal-code-css-content");
    const jsCode = document.getElementById("modal-code-js-content");
    htmlCode.dataset.rawCode = comp.html || "";
    cssCode.dataset.rawCode = comp.css || "";
    jsCode.dataset.rawCode = comp.js || "";
    htmlCode.innerHTML = renderCode(comp.html);
    cssCode.innerHTML = renderCode(comp.css);
    jsCode.innerHTML = renderCode(comp.js);

    modal.querySelectorAll(".code-tabs__tab").forEach((tab) => {
      tab.classList.remove("is-active");
      tab.setAttribute("aria-selected", "false");
    });
    modal.querySelectorAll(".code-tabs__panel").forEach((panel) => {
      panel.classList.remove("is-active");
      panel.hidden = true;
    });
    const htmlTab = modal.querySelector('[data-tab="html"]');
    htmlTab.classList.add("is-active");
    htmlTab.setAttribute("aria-selected", "true");
    document.getElementById("modal-code-html").classList.add("is-active");
    document.getElementById("modal-code-html").hidden = false;

    setPreviewViewport("desktop");
    previewStage.classList.remove("is-fullscreen");
    modalBody.classList.remove("show-code");
    modal.querySelectorAll("[data-modal-view]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.modalView === "preview");
    });

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      updatePreviewScale();
      refreshModalPreview();
    });
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    activeModalComponent = null;
    previewStage.classList.remove("is-fullscreen");
  }

  // ============================================================
  // Code tabs
  // ============================================================
  function initModalTabs() {
    const tabs = modal.querySelectorAll("[data-tab]");
    const panels = modal.querySelectorAll("[data-panel]");

    tabs.forEach((tab) => {
      tab.onclick = () => {
        tabs.forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        panels.forEach((p) => {
          p.classList.remove("is-active");
          p.hidden = true;
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        const panel = document.getElementById(`modal-code-${tab.dataset.tab}`);
        panel.classList.add("is-active");
        panel.hidden = false;
      };
    });

    modal.querySelectorAll("[data-copy-btn]").forEach((copyBtn) => {
      copyBtn.onclick = async () => {
        const activePanel = copyBtn.closest(".code-tabs__panel");
        if (!activePanel) return;
        const codeEl = activePanel.querySelector("code");
        const code = codeEl.dataset.rawCode || codeEl.textContent;

        try {
          await navigator.clipboard.writeText(code);
          showCopyFeedback(copyBtn);
        } catch {
          const textarea = document.createElement("textarea");
          textarea.value = code;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
          showCopyFeedback(copyBtn);
        }
      };
    });

    modal.querySelectorAll("[data-viewport]").forEach((btn) => {
      btn.onclick = () => setPreviewViewport(btn.dataset.viewport);
    });

    modal.querySelector("[data-preview-refresh]").onclick = refreshModalPreview;

    modal.querySelector("[data-preview-fullscreen]").onclick = () => {
      previewStage.classList.toggle("is-fullscreen");
      requestAnimationFrame(updatePreviewScale);
    };

    modal.querySelector("[data-preview-open]").onclick = () => {
      if (!activeModalComponent) return;
      const blob = new Blob([getStandalonePreviewHtml(activeModalComponent)], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank", "noopener,noreferrer");
      setTimeout(() => URL.revokeObjectURL(url), 30000);
    };

    modal.querySelectorAll("[data-modal-view]").forEach((btn) => {
      btn.onclick = () => {
        const showCode = btn.dataset.modalView === "code";
        modalBody.classList.toggle("show-code", showCode);
        modal.querySelectorAll("[data-modal-view]").forEach((viewBtn) => {
          viewBtn.classList.toggle("is-active", viewBtn === btn);
        });
        requestAnimationFrame(updatePreviewScale);
      };
    });

    window.addEventListener("resize", updatePreviewScale);
  }

  function showCopyFeedback(btn) {
    btn.classList.add("is-success");
    const previousText = btn.textContent;
    btn.textContent = "Copied";

    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add("is-visible"));

    setTimeout(() => {
      btn.classList.remove("is-success");
      btn.textContent = previousText;

      toast.classList.remove("is-visible");
      setTimeout(() => (toast.hidden = true), 200);
    }, 2000);
  }

  // ============================================================
  // Events
  // ============================================================
  function initEvents() {
    categoryNav.addEventListener("click", (e) => {
      const catBtn = e.target.closest(".sidebar__category");
      if (!catBtn) return;
      currentCategory = catBtn.dataset.category;
      renderSidebar();
      renderGrid();
      closeMobileSidebar();
    });

    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderGrid();
    });

    filterChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        filterChips.forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        currentFilter = chip.dataset.filter;
        renderGrid();
      });
    });

    menuToggle.addEventListener("click", () => {
      sidebar.classList.add("is-open");
      sidebarOverlay.classList.add("is-open");
    });

    sidebarClose.addEventListener("click", closeMobileSidebar);
    sidebarOverlay.addEventListener("click", closeMobileSidebar);

    themeToggle.addEventListener("click", () => {
      const html = document.documentElement;
      const current = html.getAttribute("data-theme");
      html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
    });

    modalClose.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });
  }

  // ============================================================
  // Boot
  // ============================================================
  function init() {
    renderSidebar();
    renderGrid();
    initModalTabs();
    initEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
