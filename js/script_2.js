// Calculator button functionality (placeholder for future enhancement)
document
  .querySelector(".calculator-btn")
  .addEventListener("click", function () {
    // This could open a modal with advanced calculator features
    console.log("Calculator clicked - future enhancement");

    // For now, just focus on the points input
    document.getElementById("plusAmount").focus();
  });

(function () {
  const burger = document.getElementById("burger");
  const drawer = document.getElementById("drawer");

  function closeDrawer() {
    drawer.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
  function toggleDrawer() {
    const willOpen = !drawer.classList.contains("open");
    drawer.classList.toggle("open", willOpen);
    burger.setAttribute("aria-expanded", String(willOpen));
  }

  burger?.addEventListener("click", toggleDrawer);
  drawer?.addEventListener("click", (e) => {
    if (e.target === drawer) closeDrawer(); // tap outside to close
    if (e.target.classList?.contains("drawer-link")) closeDrawer(); // link click
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
})();

// Tabs toggle (accessibility-friendly)
(function () {
  const tabSell = document.getElementById("tab-sell");
  const tabBuy = document.getElementById("tab-buy");
  const panelSell = document.getElementById("panel-sell");
  const panelBuy = document.getElementById("panel-buy");

  function activate(tab) {
    const isSell = tab === "sell";

    tabSell.classList.toggle("active", isSell);
    tabBuy.classList.toggle("active", !isSell);

    tabSell.setAttribute("aria-selected", String(isSell));
    tabBuy.setAttribute("aria-selected", String(!isSell));

    panelSell.hidden = !isSell;
    panelBuy.hidden = isSell;

    document.title = `PLUS ქულები • ${
      isSell ? "გაყიდვა" : "ყიდვა"
    } PLUS ქულების`;
  }

  tabSell?.addEventListener("click", () => activate("sell"));
  tabBuy?.addEventListener("click", () => activate("buy"));

  // Optional: allow switching with arrow keys
  [tabSell, tabBuy].forEach((el) => {
    el?.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        (el === tabSell ? tabBuy : tabSell).focus();
      }
      if (e.key === "Enter" || e.key === " ") el.click();
    });
  });
})();

// ===== Generic modal open/close (უდინამიკო რაოდენობის ტრიგერები) =====
function closeModal(modal) {
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  // თუ ვიდეო მოდალია — გაჩერება
  const iframe = modal.querySelector("iframe");
  if (iframe) iframe.src = "";
}

function openModal(modal, trigger) {
  if (!modal) return;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  // თუ ვიდეო მოდალია — დატვირთე src და ჩართე autoplay
  const iframe = modal.querySelector("iframe");
  if (iframe) {
    const base =
      trigger?.getAttribute("data-video-src") ||
      iframe.getAttribute("data-src") ||
      "";
    if (base) {
      const clean = base.replace(/([?&])autoplay=1/g, "").replace(/[#].*$/, "");
      iframe.src = clean + (clean.includes("?") ? "&" : "?") + "autoplay=1";
    }
  }
}

// დელეგირებული click ჰენდლერი — ნებისმიერ ღილაკზე იმუშავებს, რომელსაც აქვს data-modal-target
document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-modal-target]");
  if (openBtn) {
    const selector = openBtn.getAttribute("data-modal-target");
    const modal = document.querySelector(selector);
    openModal(modal, openBtn);
    return;
  }

  const closeBtn = e.target.closest("[data-modal-close]");
  if (closeBtn) {
    const modal = closeBtn.closest(".modal");
    closeModal(modal);
    return;
  }

  // overlay click — დახურვა
  const overlay = e.target.classList?.contains("modal") ? e.target : null;
  if (overlay && overlay.getAttribute("aria-hidden") === "false")
    closeModal(overlay);
});

// Esc-ით დახურვა
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document
      .querySelectorAll('.modal[aria-hidden="false"]')
      .forEach(closeModal);
  }
});

// INIT: თუ iframe-ს უკვე აქვს src HTML-ში, გადაიტანე data-src-ში და გამორთე წინასწარი ჩატვირთვა
document.addEventListener("DOMContentLoaded", () => {
  const vm = document.getElementById("videoModal");
  if (!vm) return;
  const iframe = vm.querySelector("iframe");
  if (iframe && iframe.src && !iframe.dataset.src) {
    // ამოვიღოთ ნებისმიერი autoplay=1 და hash, data-src-ში შევინახოთ სუფთა მისამართი
    const clean = iframe.src
      .replace(/([?&])autoplay=1/g, "")
      .replace(/#.*$/, "");
    iframe.setAttribute("data-src", clean);
    iframe.removeAttribute("src"); // აღარ ჩაიტვირთება სანამ მოდალს არ გახსნი
  }
});

// ===== Carousel Logic (Manual only, loop-enabled) =====
(function () {
  const track = document.getElementById("track");
  const slides = Array.from(track.children);
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const dotsWrap = document.getElementById("dots");
  let index = 0;
  const loop = true; // ბოლოიდან პირველზე/პირიქით გადადის

  // დოთები
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.className = "dot";
    b.type = "button";
    b.setAttribute("aria-label", `სლაიდი ${i + 1}`);
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function update() {
    track.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((d, i) =>
      d.setAttribute("aria-current", i === index ? "true" : "false")
    );
  }
  function goTo(i) {
    index = loop
      ? (i + slides.length) % slides.length
      : Math.max(0, Math.min(i, slides.length - 1));
    update();
  }
  function nextSlide() {
    goTo(index + 1);
  }
  function prevSlide() {
    goTo(index - 1);
  }

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  // კლავიატურა — იმუშავოს მხოლოდ როცა კარუსელის მოდალი ღიაა
  document.addEventListener("keydown", (e) => {
    const open =
      document.getElementById("carouselModal").getAttribute("aria-hidden") ===
      "false";
    if (!open) return;
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  update();
})();
