(function () {
  const d = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  // Teks sederhana
  document.querySelectorAll("[data-bind]").forEach((el) => {
    el.textContent = d[el.dataset.bind] || "";
  });
  document.title = `${d.name} — ${d.role}`;
  $("#year").textContent = new Date().getFullYear();

  // Marquee (diduplikasi agar bergulir tanpa putus)
  const items = d.skills.map((s) => `<span class="marquee-item">${esc(s)} <span class="star">✦</span></span>`).join("");
  $("#marqueeTrack").innerHTML = items + items;

  // About
  $("#aboutPhoto").innerHTML = d.photo
    ? `<img src="${esc(d.photo)}" alt="Foto ${esc(d.name)}" />`
    : `<span class="initials">${esc(d.name.split(" ").map((w) => w[0]).slice(0, 2).join(""))}</span>`;
  $("#aboutText").innerHTML = d.about.map((p) => `<p>${esc(p)}</p>`).join("");
  if (!d.stats || !d.stats.length) $("#stats").remove();
  else $("#stats").innerHTML = d.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
  $("#skillChips").innerHTML = d.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join("");

  // Projects
  const projectImages = (p) => (p.images && p.images.length ? p.images : p.image ? [p.image] : []);
  $("#projects").innerHTML = d.projects
    .map((p, i) => {
      const imgs = projectImages(p);
      let thumb = `<div class="placeholder">${String(i + 1).padStart(2, "0")}</div>`;
      if (imgs.length) {
        const slides = imgs
          .map((src, j) => `<img src="${esc(src)}" alt="${esc(p.title)} — gambar ${j + 1}" loading="lazy" data-project="${i}" data-index="${j}" />`)
          .join("");
        const controls =
          imgs.length > 1
            ? `<button class="slide-btn prev" aria-label="Gambar sebelumnya">‹</button>
               <button class="slide-btn next" aria-label="Gambar berikutnya">›</button>
               <div class="slide-dots">${imgs.map((_, j) => `<span class="${j ? "" : "on"}"></span>`).join("")}</div>
               <span class="slide-count">1 / ${imgs.length}</span>`
            : "";
        thumb = `<div class="slides" data-current="0">${slides}</div>${controls}`;
      }
      const links = [
        p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Live Demo ↗</a>` : "",
        p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Source Code ↗</a>` : "",
      ].join("");
      return `
        <article class="project reveal">
          <div class="project-thumb">${thumb}</div>
          <div class="project-body">
            <div class="project-meta"><span class="cat">${esc(p.category)}</span><span>${esc(p.year)}</span></div>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.description)}</p>
            <div class="tags">${(p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
            <div class="project-links">${links}</div>
          </div>
        </article>`;
    })
    .join("");

  // Slider gambar proyek
  const goTo = (thumb, n) => {
    const slides = thumb.querySelector(".slides");
    const total = slides.children.length;
    const cur = (n + total) % total;
    slides.dataset.current = cur;
    slides.style.transform = `translateX(-${cur * 100}%)`;
    thumb.querySelectorAll(".slide-dots span").forEach((dot, j) => dot.classList.toggle("on", j === cur));
    const count = thumb.querySelector(".slide-count");
    if (count) count.textContent = `${cur + 1} / ${total}`;
  };
  $("#projects").addEventListener("click", (e) => {
    const thumb = e.target.closest(".project-thumb");
    if (!thumb) return;
    const cur = +(thumb.querySelector(".slides")?.dataset.current || 0);
    if (e.target.closest(".prev")) goTo(thumb, cur - 1);
    else if (e.target.closest(".next")) goTo(thumb, cur + 1);
    else if (e.target.tagName === "IMG") openLightbox(+e.target.dataset.project, +e.target.dataset.index);
  });
  // Geser (swipe) di HP
  document.querySelectorAll(".project-thumb").forEach((thumb) => {
    let x0 = null;
    thumb.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    thumb.addEventListener("touchend", (e) => {
      if (x0 === null || !thumb.querySelector(".slide-btn")) return;
      const dx = e.changedTouches[0].clientX - x0;
      const cur = +thumb.querySelector(".slides").dataset.current;
      if (Math.abs(dx) > 40) goTo(thumb, cur + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  });

  // Lightbox (lihat gambar layar penuh)
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lb-close" aria-label="Tutup">×</button>
    <button class="lb-nav lb-prev" aria-label="Sebelumnya">‹</button>
    <img alt="" />
    <button class="lb-nav lb-next" aria-label="Berikutnya">›</button>
    <p class="lb-caption"></p>`;
  document.body.appendChild(lb);
  let lbImgs = [], lbIdx = 0, lbTitle = "";
  const lbShow = (n) => {
    lbIdx = (n + lbImgs.length) % lbImgs.length;
    lb.querySelector("img").src = lbImgs[lbIdx];
    lb.querySelector("img").alt = `${lbTitle} — gambar ${lbIdx + 1}`;
    lb.querySelector(".lb-caption").textContent = `${lbTitle} · ${lbIdx + 1} / ${lbImgs.length}`;
  };
  function openLightbox(pi, idx) {
    lbImgs = projectImages(d.projects[pi]);
    lbTitle = d.projects[pi].title;
    lb.classList.toggle("single", lbImgs.length < 2);
    lbShow(idx);
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  const closeLightbox = () => {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  };
  lb.addEventListener("click", (e) => {
    if (e.target.closest(".lb-prev")) lbShow(lbIdx - 1);
    else if (e.target.closest(".lb-next")) lbShow(lbIdx + 1);
    else if (e.target.tagName !== "IMG") closeLightbox();
  });
  addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbShow(lbIdx - 1);
    if (e.key === "ArrowRight") lbShow(lbIdx + 1);
  });

  // Timeline
  const timeline = (list) =>
    list
      .map(
        (e) => `
        <li class="reveal">
          <span class="period">${esc(e.period)}</span>
          <h4>${esc(e.title)}</h4>
          <div class="place">${esc(e.place)}</div>
          <p>${esc(e.description)}</p>
        </li>`
      )
      .join("");
  $("#experience").innerHTML = timeline(d.experience);
  $("#education").innerHTML = timeline(d.education);

  // Contact & socials
  $("#mailBtn").href = `mailto:${d.email}`;
  $("#mailText").textContent = d.email;
  if (d.cv) $("#cvBtn").href = d.cv;
  else $("#cvBtn").remove();
  $("#socials").innerHTML = d.socials
    .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`)
    .join("");

  // Tema
  $("#themeToggle").addEventListener("click", () => {
    const root = document.documentElement;
    const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Menu mobile
  const menuBtn = $("#menuBtn");
  const navLinks = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Navbar saat scroll + link aktif
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const links = [...navLinks.querySelectorAll("a")];
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

  // Animasi muncul
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
