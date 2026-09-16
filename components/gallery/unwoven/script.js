(function() {
  "use strict";

  const stages = document.querySelectorAll(".unwoven-component .unwoven-stage");
  stages.forEach((stage) => { initUnwoven(stage); });

  function initUnwoven(stage) {
    const CONFIG = {
      threads: 26, segments: 20, cardMaxHeight: 452, cardAspect: 0.75,
      cardGapRatio: 0.11, cardRadius: 20, scrollSpeed: 95, flingMax: 4200,
      tearZoneRatio: 0.26, tearZoneMax: 380,
    };

    const IMAGE_URLS = [
      "./img/motion_blur_portrait_01.jpg", "./img/motion_blur_portrait_02.jpg",
      "./img/motion_blur_portrait_03.jpg", "./img/motion_blur_portrait_04.jpg",
      "./img/motion_blur_portrait_05.jpg", "./img/motion_blur_portrait_06.jpg",
    ];

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const PALETTES = [
      { base: ["#f6d5c3", "#e7a48b"], blobs: ["#f2b8a0", "#b86b4b", "#ffe9d9"], accent: "#5a2e1c" },
      { base: ["#dfeeea", "#a9cfc3"], blobs: ["#7fb3a2", "#3f7263", "#eefaf4"], accent: "#1e4034" },
      { base: ["#dfe7f5", "#9fb4d8"], blobs: ["#7d97c6", "#3a5387", "#f0f4ff"], accent: "#1c2a4d" },
      { base: ["#f7e6ee", "#e3a9c6"], blobs: ["#d886b0", "#8f3a68", "#ffeef6"], accent: "#54173c" },
      { base: ["#f5eedd", "#e3ce9d"], blobs: ["#d9b96f", "#8f7331", "#fff8e6"], accent: "#4d3a12" },
      { base: ["#e4e4ec", "#b3b3c6"], blobs: ["#9494ad", "#4c4c66", "#f4f4fa"], accent: "#22222f" },
    ];

    function drawPlaceholder(palette, seed) {
      const w = 640, h = 832;
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      let s = seed * 9301 + 49297;
      const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, palette.base[0]); gradient.addColorStop(1, palette.base[1]);
      ctx.fillStyle = gradient; ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 5; i++) {
        const color = palette.blobs[i % palette.blobs.length];
        const cx = rnd() * w, cy = rnd() * h, r = (0.35 + rnd() * 0.55) * w;
        const blob = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        blob.addColorStop(0, color + "cc"); blob.addColorStop(1, color + "00");
        ctx.fillStyle = blob; ctx.fillRect(0, 0, w, h);
      }
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = palette.accent + "22"; ctx.beginPath();
      ctx.arc(w * (0.3 + rnd() * 0.4), h * (0.25 + rnd() * 0.5), w * (0.10 + rnd() * 0.12), 0, Math.PI * 2); ctx.fill();
      const frame = ctx.getImageData(0, 0, w, h); const px = frame.data;
      for (let i = 0; i < px.length; i += 4) { const n = (rnd() - 0.5) * 14; px[i] += n; px[i + 1] += n; px[i + 2] += n; }
      ctx.putImageData(frame, 0, 0); return canvas;
    }

    const SLOT_COUNT = IMAGE_URLS.length || PALETTES.length;
    const placeholders = Array.from({ length: SLOT_COUNT }, (_, i) => drawPlaceholder(PALETTES[i % PALETTES.length], i + 7));

    let renderer = null;
    if (window.THREE && window.gsap) { try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (err) { renderer = null; } }
    if (!renderer) { startMarquee(); return; }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    stage.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -100, 100);

    const VERTEX_SHADER = `
      attribute float aThread; attribute float aRim;
      uniform float uTime; uniform float uHalfWidth; uniform float uZone;
      uniform float uStrength; uniform float uWobble; uniform float uSeed;
      varying vec2 vUv; varying float vTear; varying float vRim; varying float vRandom;
      float hash(float n) { return fract(sin(n * 127.1 + 311.7) * 43758.5453); }
      void main() {
        vUv = uv; vRim = aRim;
        vec4 world = modelMatrix * vec4(position, 1.0);
        float x = world.x;
        float left = 1.0 - smoothstep(-uHalfWidth, -uHalfWidth + uZone, x);
        float right = smoothstep(uHalfWidth - uZone, uHalfWidth, x);
        float tear = max(left, right) * uStrength;
        float direction = x < 0.0 ? -1.0 : 1.0;
        float randomA = hash(aThread + uSeed * 57.0);
        float randomB = hash(aThread * 3.7 + uSeed * 91.0);
        vRandom = randomA;
        float t = pow(tear, 1.4);
        float run = t * (60.0 + randomA * 420.0);
        run *= 0.85 + 0.15 * sin(uTime * (1.0 + randomB * 2.0) + randomA * 6.2831);
        world.x += direction * run;
        world.y += (randomA - 0.5) * 170.0 * t * t;
        world.y += sin(world.x * 0.02 + uTime * (1.6 + randomA * 2.2) + randomA * 6.2831) * (5.0 + 13.0 * randomA) * t * uWobble;
        vTear = tear;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `;

    const FRAGMENT_SHADER = `
      precision highp float;
      uniform sampler2D uMap; uniform vec2 uCardSize; uniform float uRadius; uniform float uImageAspect;
      varying vec2 vUv; varying float vTear; varying float vRim; varying float vRandom;
      float sdRoundBox(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
      void main() {
        float tear = vTear; float rim = abs(vRim);
        float coreWidth = mix(0.8, 0.16 + vRandom * 0.12, smoothstep(0.0, 0.85, tear));
        float threadAlpha = 1.0 - smoothstep(coreWidth - 0.10, coreWidth + 0.06, rim);
        threadAlpha = mix(1.0, threadAlpha, smoothstep(0.03, 0.30, tear));
        vec2 p = (vUv - 0.5) * uCardSize;
        float cardAlpha = 1.0 - smoothstep(-1.5, 0.5, sdRoundBox(p, uCardSize * 0.5, uRadius));
        float fade = 1.0 - smoothstep(0.75, 1.0, tear) * 0.65;
        float alpha = cardAlpha * threadAlpha * fade;
        if (alpha < 0.003) discard;
        float cardAspect = uCardSize.x / uCardSize.y;
        vec2 scale = cardAspect > uImageAspect ? vec2(1.0, uImageAspect / cardAspect) : vec2(cardAspect / uImageAspect, 1.0);
        vec3 color = texture2D(uMap, (vUv - 0.5) * scale + 0.5).rgb;
        color *= 1.0 - tear * 0.4 * rim * rim;
        color += tear * 0.18 * (1.0 - smoothstep(0.0, 0.45, rim));
        color = mix(color, vec3(1.0), smoothstep(0.55, 1.0, tear) * 0.8);
        gl_FragColor = vec4(color, alpha);
      }
    `;

    function buildRibbonGeometry(width, height, threads, segments) {
      const columns = segments + 1, perThread = columns * 2, total = threads * perThread;
      const positions = new Float32Array(total * 3), uvs = new Float32Array(total * 2);
      const rims = new Float32Array(total), threadIds = new Float32Array(total), indices = [];
      let v = 0;
      for (let t = 0; t < threads; t++) {
        for (let row = 0; row < 2; row++) {
          const vy = (t + row) / threads;
          for (let c = 0; c < columns; c++) {
            const ux = c / segments;
            positions[v * 3] = (ux - 0.5) * width; positions[v * 3 + 1] = (vy - 0.5) * height; positions[v * 3 + 2] = 0;
            uvs[v * 2] = ux; uvs[v * 2 + 1] = vy; rims[v] = row === 0 ? -1 : 1; threadIds[v] = t; v++;
          }
        }
        const base = t * perThread;
        for (let c = 0; c < segments; c++) { indices.push(base + c, base + c + 1, base + columns + c, base + c + 1, base + columns + c + 1, base + columns + c); }
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
      geometry.setAttribute("aRim", new THREE.BufferAttribute(rims, 1));
      geometry.setAttribute("aThread", new THREE.BufferAttribute(threadIds, 1));
      geometry.setIndex(indices); return geometry;
    }

    const shared = {
      uTime: { value: 0 }, uHalfWidth: { value: 1 }, uZone: { value: 1 }, uStrength: { value: 0 },
      uWobble: { value: reduceMotion ? 0 : 1 }, uCardSize: { value: new THREE.Vector2(1, 1) }, uRadius: { value: CONFIG.cardRadius },
    };

    function createTexture(source) {
      const texture = new THREE.Texture(source);
      texture.minFilter = THREE.LinearFilter; texture.magFilter = THREE.LinearFilter;
      texture.wrapS = THREE.ClampToEdgeWrapping; texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.generateMipmaps = false; texture.needsUpdate = true; return texture;
    }

    const slots = placeholders.map((canvas, i) => {
      const texture = createTexture(canvas);
      const material = new THREE.ShaderMaterial({
        vertexShader: VERTEX_SHADER, fragmentShader: FRAGMENT_SHADER, transparent: true, depthTest: false, depthWrite: false,
        uniforms: {
          uMap: { value: texture }, uSeed: { value: (i + 1) * 0.731 }, uImageAspect: { value: canvas.width / canvas.height },
          uTime: shared.uTime, uHalfWidth: shared.uHalfWidth, uZone: shared.uZone, uStrength: shared.uStrength,
          uWobble: shared.uWobble, uCardSize: shared.uCardSize, uRadius: shared.uRadius,
        },
      });
      return { texture, material };
    });

    IMAGE_URLS.forEach((url, i) => {
      if (i >= slots.length) return;
      const image = new Image(); image.crossOrigin = "anonymous";
      image.onload = () => { slots[i].texture.image = image; slots[i].texture.needsUpdate = true; slots[i].material.uniforms.uImageAspect.value = image.naturalWidth / image.naturalHeight; };
      image.onerror = () => console.warn(`Unwoven image failed to load: ${url}`);
      image.src = url;
    });

    const cards = []; let geometry = null;
    let cardWidth = 0, cardHeight = 0, pitch = 0, stripSpan = 0, viewportWidth = 0, viewportHeight = 0;

    function rebuildStrip() {
      cards.forEach(card => scene.remove(card.mesh)); cards.length = 0;
      if (geometry) geometry.dispose();
      geometry = buildRibbonGeometry(cardWidth, cardHeight, CONFIG.threads, CONFIG.segments);
      const count = Math.max(8, Math.ceil((viewportWidth + pitch * 3) / pitch)); stripSpan = count * pitch;
      for (let i = 0; i < count; i++) {
        const mesh = new THREE.Mesh(geometry, slots[i % slots.length].material); mesh.frustumCulled = false;
        scene.add(mesh); cards.push({ mesh, baseX: i * pitch });
      }
    }

    function resize() {
      viewportWidth = stage.clientWidth; viewportHeight = stage.clientHeight;
      renderer.setSize(viewportWidth, viewportHeight);
      camera.left = -viewportWidth / 2; camera.right = viewportWidth / 2;
      camera.top = viewportHeight / 2; camera.bottom = -viewportHeight / 2; camera.updateProjectionMatrix();
      cardHeight = Math.min(CONFIG.cardMaxHeight, viewportHeight * 0.62); cardWidth = cardHeight * CONFIG.cardAspect;
      pitch = cardWidth + Math.max(24, cardWidth * CONFIG.cardGapRatio);
      shared.uHalfWidth.value = viewportWidth / 2;
      shared.uZone.value = Math.min(viewportWidth * CONFIG.tearZoneRatio, CONFIG.tearZoneMax);
      shared.uCardSize.value.set(cardWidth, cardHeight); rebuildStrip();
    }

    const baseSpeed = reduceMotion ? 0 : CONFIG.scrollSpeed;
    const motion = { velocity: 0 }; let offset = 0;
    gsap.to(motion, { velocity: baseSpeed, duration: 2.4, ease: "power2.out", delay: 0.35 });
    gsap.to(shared.uStrength, { value: 1, duration: 1.8, ease: "power3.inOut", delay: 0.2 });

    let dragging = false, lastX = 0, lastTime = 0, dragVelocity = 0;
    stage.addEventListener("pointerdown", (event) => { dragging = true; lastX = event.clientX; lastTime = performance.now(); dragVelocity = 0; stage.classList.add("is-dragging"); stage.setPointerCapture(event.pointerId); gsap.killTweensOf(motion); });
    stage.addEventListener("pointermove", (event) => { if (!dragging) return; const now = performance.now(); const dx = event.clientX - lastX; const dt = Math.max(1, now - lastTime) / 1000; offset -= dx; dragVelocity += (-dx / dt - dragVelocity) * 0.35; lastX = event.clientX; lastTime = now; });
    function endDrag() { if (!dragging) return; dragging = false; stage.classList.remove("is-dragging"); motion.velocity = gsap.utils.clamp(-CONFIG.flingMax, CONFIG.flingMax, dragVelocity); gsap.to(motion, { velocity: baseSpeed, duration: 2.2, ease: "power3.out" }); }
    stage.addEventListener("pointerup", endDrag); stage.addEventListener("pointercancel", endDrag); stage.addEventListener("lostpointercapture", endDrag);

    gsap.ticker.add((time, deltaMS) => {
      if (!dragging) offset += motion.velocity * (deltaMS / 1000);
      shared.uTime.value = time; const half = stripSpan / 2;
      for (const card of cards) { const x = ((card.baseX - offset) % stripSpan + stripSpan) % stripSpan; card.mesh.position.x = x - half; }
      renderer.render(scene, camera);
    });

    window.addEventListener("resize", resize); resize();

    function startMarquee() {
      const wrap = document.createElement("div"); wrap.className = "unwoven-marquee";
      const track = document.createElement("div"); track.className = "unwoven-marquee__track";
      [...placeholders, ...placeholders].forEach((canvas) => {
        const img = document.createElement("img"); img.src = canvas.toDataURL("image/jpeg", 0.85); img.alt = ""; track.appendChild(img);
      });
      wrap.appendChild(track); stage.appendChild(wrap); stage.style.cursor = "default";
    }
  }
})();
