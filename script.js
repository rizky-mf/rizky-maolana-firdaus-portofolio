(function () {
  const d = window.PORTFOLIO;
  const $ = (s) => document.querySelector(s);
  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  // Ikon teknologi dari devicon.dev
  const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
  const DARK_ICONS = ["express", "github", "nextjs", "flask", "vercel"];
  const iconImg = (s) => {
    const cls = DARK_ICONS.includes(s.icon) ? ' class="invert"' : "";
    return `<img src="${DEVICON}/${esc(s.icon)}/${esc(s.icon)}-original.svg" alt="${esc(s.name)}" title="${esc(s.name)}"${cls}
      onerror="this.onerror=null;this.src='${DEVICON}/${esc(s.icon)}/${esc(s.icon)}-plain.svg'" loading="lazy" />`;
  };

  // Ikon SVG kecil
  const svg = (p) => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  const ICONS = {
    calendar: svg('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>'),
    code: svg('<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>'),
    smile: svg('<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>'),
    trophy: svg('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>'),
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    phone: svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'),
    pin: svg('<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>'),
  };
  const fill = (p) => `<svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">${p}</svg>`;
  const SOCIAL = {
    github: fill('<path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/>'),
    linkedin: fill('<path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.3a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.4c0-1.1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V19h-3v-9h2.9v1.2a3.2 3.2 0 0 1 2.9-1.6c3 0 3.6 2 3.6 4.6z"/>'),
    instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>'),
    twitter: fill('<path d="M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.9 2.3h7l4.8 6.4zm-1.2 17.9h1.9L7.1 4.2H5.1z"/>'),
  };
  SOCIAL.x = SOCIAL.twitter;

  // Teks sederhana
  document.querySelectorAll("[data-bind]").forEach((el) => {
    el.textContent = d[el.dataset.bind] || "";
  });
  document.title = `${d.name} — ${d.role}`;
  $("#year").textContent = new Date().getFullYear();

  // ---------- Hero ----------
  $("#techIcons").innerHTML = d.skills.map(iconImg).join("");
  const photo = $("#heroPhoto");
  if (d.photo) {
    photo.src = d.photo;
    photo.alt = `Foto ${d.name}`;
  } else photo.remove();

  const str = (s) => `<span class="tk-s">"${esc(s)}"</span>`;
  $("#codeBlock").innerHTML =
    `<span class="tk-k">const</span> developer = {\n` +
    `  <span class="tk-p">name</span>: ${str(d.nickname)},\n` +
    `  <span class="tk-p">skills</span>: [${d.skills.slice(0, 4).map((s) => str(s.name)).join(", ")}],\n` +
    `  <span class="tk-p">passion</span>: ${str(d.passion)}\n};`;

  const cvBtn = $("#cvBtn");
  if (d.cv) cvBtn.href = d.cv;
  else cvBtn.remove();

  // ---------- About ----------
  $("#aboutTitle").textContent = d.about.title;
  $("#aboutText").innerHTML = d.about.text.map((p) => `<p>${esc(p)}</p>`).join("");
  if (d.stats && d.stats.length) {
    $("#stats").innerHTML = d.stats
      .map(
        (s) => `<div class="stat"><div class="stat-icon">${ICONS[s.icon] || ICONS.code}</div>
          <div><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div></div>`
      )
      .join("");
  } else {
    $("#stats").remove();
    $("#aboutGrid").classList.add("no-stats");
  }

  // ---------- Skills ----------
  $("#skillGrid").innerHTML = d.skills
    .map(
      (s) => `<div class="skill reveal">${iconImg(s)}
        <div class="skill-top">${esc(s.name)}<span>${s.level}%</span></div>
        <div class="bar"><i data-level="${s.level}"></i></div></div>`
    )
    .join("");

  // ---------- Projects ----------
  const projectImages = (p) => (p.images && p.images.length ? p.images : p.image ? [p.image] : []);
  const track = $("#projectTrack");
  track.innerHTML = d.projects
    .map((p, i) => {
      const imgs = projectImages(p);
      const num = String(i + 1).padStart(2, "0");
      let thumb = `<div class="placeholder">&lt;/&gt;</div>`;
      if (imgs.length) {
        const slides = imgs
          .map((src, j) => `<img src="${esc(src)}" alt="${esc(p.title)} — gambar ${j + 1}" loading="lazy" data-project="${i}" data-index="${j}" />`)
          .join("");
        const controls =
          imgs.length > 1
            ? `<button class="slide-btn prev" aria-label="Gambar sebelumnya">‹</button>
               <button class="slide-btn next" aria-label="Gambar berikutnya">›</button>
               <div class="slide-dots">${imgs.map((_, j) => `<span class="${j ? "" : "on"}"></span>`).join("")}</div>`
            : "";
        thumb = `<div class="slides" data-current="0">${slides}</div>${controls}`;
      }
      const links = [
        p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Lihat Project ↗</a>` : "",
        p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Source Code ↗</a>` : "",
      ].join("");
      return `
        <article class="project">
          <div class="project-thumb"><span class="project-num">${num}</span>${thumb}</div>
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

  // Titik navigasi daftar proyek (per halaman)
  const dotsBox = $("#trackDots");
  const pages = () => Math.max(1, Math.round(track.scrollWidth / track.clientWidth));
  const renderDots = () => {
    const n = pages();
    dotsBox.innerHTML = n > 1 ? Array.from({ length: n }, (_, i) => `<button aria-label="Halaman ${i + 1}" data-page="${i}"></button>`).join("") : "";
    updateDots();
  };
  const updateDots = () => {
    const cur = Math.round(track.scrollLeft / track.clientWidth);
    dotsBox.querySelectorAll("button").forEach((b, i) => b.classList.toggle("on", i === cur));
  };
  dotsBox.addEventListener("click", (e) => {
    if (e.target.dataset.page) track.scrollTo({ left: e.target.dataset.page * track.clientWidth, behavior: "smooth" });
  });
  track.addEventListener("scroll", updateDots, { passive: true });
  addEventListener("resize", renderDots);
  renderDots();

  // Slider gambar di dalam kartu
  const goTo = (thumb, n) => {
    const slides = thumb.querySelector(".slides");
    const total = slides.children.length;
    const cur = (n + total) % total;
    slides.dataset.current = cur;
    slides.style.transform = `translateX(-${cur * 100}%)`;
    thumb.querySelectorAll(".slide-dots span").forEach((dot, j) => dot.classList.toggle("on", j === cur));
  };
  track.addEventListener("click", (e) => {
    const thumb = e.target.closest(".project-thumb");
    if (!thumb) return;
    const cur = +(thumb.querySelector(".slides")?.dataset.current || 0);
    if (e.target.closest(".prev")) goTo(thumb, cur - 1);
    else if (e.target.closest(".next")) goTo(thumb, cur + 1);
    else if (e.target.tagName === "IMG") openLightbox(+e.target.dataset.project, +e.target.dataset.index);
  });

  // ---------- Lightbox ----------
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

  // ---------- Journey ----------
  const timeline = (list) =>
    list
      .map(
        (e) => `<li>
          <span class="period">${esc(e.period)}</span>
          <h4>${esc(e.title)}</h4>
          <div class="place">${esc(e.place)}</div>
          <p>${esc(e.description)}</p>
        </li>`
      )
      .join("");
  $("#experience").innerHTML = timeline(d.experience);
  $("#education").innerHTML = timeline(d.education);

  // ---------- Contact ----------
  $("#mailBtn").href = `mailto:${d.email}`;
  const t = d.testimonial;
  if (t) {
    const avatar = t.photo
      ? `<img src="${esc(t.photo)}" alt="${esc(t.name)}" />`
      : `<span class="avatar">${esc(t.name.charAt(0))}</span>`;
    $("#testimonial").innerHTML = `<span class="q">“</span><blockquote>${esc(t.quote)}</blockquote>
      <figcaption>${avatar}<div><b>${esc(t.name)}</b><span>${esc(t.role)}</span></div></figcaption>`;
  } else {
    $("#testimonial").remove();
    $("#contactGrid").classList.add("no-testimonial");
  }
  $("#socials").innerHTML = d.socials
    .map((s) => {
      const icon = SOCIAL[s.label.toLowerCase()] || esc(s.label.charAt(0));
      return `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}">${icon}</a>`;
    })
    .join("");
  $("#contactList").innerHTML = [
    d.email && `<li>${ICONS.mail}<a href="mailto:${esc(d.email)}">${esc(d.email)}</a></li>`,
    d.phone && `<li>${ICONS.phone}<a href="tel:${esc(d.phone.replace(/[^\d+]/g, ""))}">${esc(d.phone)}</a></li>`,
    d.location && `<li>${ICONS.pin}<span>${esc(d.location)}</span></li>`,
  ]
    .filter(Boolean)
    .join("");

  // ---------- Navigasi ----------
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

  // ---------- Animasi muncul + skill bar ----------
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        const bar = en.target.querySelector(".bar i");
        if (bar) bar.style.width = bar.dataset.level + "%";
        io.unobserve(en.target);
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
