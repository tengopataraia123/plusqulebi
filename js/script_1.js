const rate = { plus: 400, gel: 1.1 }; // editable baseline
const rateText = document.getElementById("rateText");
const plusAmount = document.getElementById("plusAmount");
const gelAmount = document.getElementById("gelAmount");
const tabBuy = document.getElementById("tab-buy");
const tabSell = document.getElementById("tab-sell");
const profileIdEl = document.getElementById("profileId");
const copyId = document.getElementById("copyId");
const copyId2 = document.getElementById("copyId2");
plusAmount.value = 400;

function fmt(n) {
  return new Intl.NumberFormat("ka-GE", {
    maximumFractionDigits: 2,
  }).format(n);
}

function updateRateText() {
  rateText.textContent = `${rate.plus} Plus → ${rate.gel.toFixed(2)} ₾`;
}

function calculate() {
  const p = Number(plusAmount.value || 0);
  const pricePerPlus = rate.gel / rate.plus; // ₾ per point
  const gel = p * pricePerPlus;
  gelAmount.value = `${fmt(gel)} ₾`;
}

function setMode(mode) {
  const isBuy = mode === "buy";
  tabBuy.classList.toggle("active", isBuy);
  tabSell.classList.toggle("active", !isBuy);
  document.title = `PLUS ქულები • ${isBuy ? "გაყიდვა" : "ყიდვა"} PLUS ქულების`;
}

plusAmount.addEventListener("input", calculate);
tabBuy.addEventListener("click", () => setMode("buy"));
tabSell.addEventListener("click", () => setMode("sell"));
copyId.addEventListener("click", () => {
  navigator.clipboard.writeText(profileIdEl.textContent.trim());
  copyId.style.borderColor = "var(--brand)";
  copyId.title = "დაკოპირებულია";
  setTimeout(() => (copyId.style.borderColor = "rgba(255,255,255,.14)"), 900);
});
copyId2.addEventListener("click", () => {
  navigator.clipboard.writeText(profileIdEl.textContent.trim());
  copyId2.style.borderColor = "var(--brand)";
  copyId2.title = "დაკოპირებულია";
  setTimeout(() => (copyId2.style.borderColor = "rgba(255,255,255,.14)"), 900);
});

// mock trades
var trades = []
fetch("https://plusqulebi.ge/lastTrans.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse JSON
  })
  .then(data => {
    trades = data
    
  const list = document.getElementById("trades");
  trades.forEach((t) => {
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `<div><strong>${t.name}</strong><div class="muted">${
      t.time
    }</div></div>
                        <div><div class="muted">PLUS ქულა:</div><strong>${fmt(
                          t.plus
                        )}</strong></div>
                        <div><div class="muted">₾ თანხა:</div><strong>${fmt(
                          t.gel
                        )} ₾</strong></div>`;
    list.appendChild(el);
  });
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });

// stats
document.getElementById("statDeals").textContent = trades.length;
document.getElementById("statPoints").textContent = fmt(
  trades.reduce((a, b) => a + b.plus, 0)
);

// misc
updateRateText();

calculate();
document.getElementById("y").textContent = new Date().getFullYear();
