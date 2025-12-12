// Global variables
let activeTab = "exchange";
let isMobileMenuOpen = false;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  calculateConversion();
});

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuBtn = document.querySelector(".mobile-menu-btn");

  isMobileMenuOpen = !isMobileMenuOpen;

  if (isMobileMenuOpen) {
    mobileMenu.classList.add("active");
    menuBtn.classList.add("active");
  } else {
    mobileMenu.classList.remove("active");
    menuBtn.classList.remove("active");
  }
}

// Tab switching functionality
function setActiveTab(tab) {
  activeTab = tab;

  // Update button states
  const exchangeBtn = document.getElementById("exchangeBtn");
  const buyBtn = document.getElementById("buyBtn");

  if (tab === "exchange") {
    exchangeBtn.classList.add("active");
    buyBtn.classList.remove("active");
  } else {
    buyBtn.classList.add("active");
    exchangeBtn.classList.remove("active");
  }

  // Update text content based on active tab
  updateTabContent();
}

// Update content based on active tab
function updateTabContent() {
  const instructionText = document.getElementById("instructionText");
  const pointsLabel = document.getElementById("pointsLabel");
  const lariLabel = document.getElementById("lariLabel");
  const ibanNumber = document.getElementById("iban-number");

  if (activeTab === "exchange") {
    instructionText.textContent = "გაცვალეთ თქვენი PLUS ქულები ლარში";
    pointsLabel.textContent = "გასაცემი PLUS ქულების რაოდენობა";
    lariLabel.textContent = "დარიცხვა ლარში";
    ibanNumber.textContent = "37001056274";
  } else {
    instructionText.textContent = "იყიდეთ PLUS ქულები ლარით";
    pointsLabel.textContent = "სასყიდი PLUS ქულების რაოდენობა";
    lariLabel.textContent = "საფასური ლარში";
    ibanNumber.textContent = "ibannumber";
  }
}

// Copy phone number to clipboard
async function copyPhoneNumber() {
  const phoneNumber = document.getElementById("iban-number").textContent;
  const copyBtn = document.getElementById("copyBtn");

  try {
    await navigator.clipboard.writeText(phoneNumber);

    // Update button appearance
    copyBtn.classList.add("copied");
    copyBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
        `;

    // Reset after 2 seconds
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      copyBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            `;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy phone number:", err);

    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = phoneNumber;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Still show success feedback
    copyBtn.classList.add("copied");
    setTimeout(() => {
      copyBtn.classList.remove("copied");
    }, 2000);
  }
}

// Calculate currency conversion
function calculateConversion() {
  const plusPointsInput = document.getElementById("plusPoints");
  const lariAmountInput = document.getElementById("lariAmount");

  const plusPoints = parseFloat(plusPointsInput.value) || 0;

  // Conversion rate: 400 Plus points = 1.01 GEL
  const conversionRate = 1.01 / 400;
  const lariAmount = (plusPoints * conversionRate).toFixed(2);

  lariAmountInput.value = lariAmount;
}

// Smooth scrolling for navigation links (if needed)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar");
  const mobileMenu = document.getElementById("mobileMenu");

  if (isMobileMenuOpen && !navbar.contains(event.target)) {
    toggleMobileMenu();
  }
});

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && isMobileMenuOpen) {
    toggleMobileMenu();
  }
});

// Add smooth transitions on page load
window.addEventListener("load", function () {
  document.body.style.opacity = "1";
});

// Keyboard accessibility
document.addEventListener("keydown", function (event) {
  // Close mobile menu with Escape key
  if (event.key === "Escape" && isMobileMenuOpen) {
    toggleMobileMenu();
  }

  // Copy phone number with Ctrl+C when focused on copy button
  if (
    event.ctrlKey &&
    event.key === "c" &&
    document.activeElement.id === "copyBtn"
  ) {
    event.preventDefault();
    copyPhoneNumber();
  }
});

// Add loading animation
function showLoading() {
  // This function can be used for future AJAX calls or API integrations
  console.log("Loading...");
}

// Form validation (if needed for future enhancements)
function validateForm() {
  const plusPoints = document.getElementById("plusPoints").value;

  if (!plusPoints || plusPoints <= 0) {
    alert("გთხოვთ შეიყვანოთ სწორი ქულების რაოდენობა");
    return false;
  }

  return true;
}

// Calculator button functionality (placeholder for future enhancement)
document
  .querySelector(".calculator-btn")
  .addEventListener("click", function () {
    // This could open a modal with advanced calculator features
    console.log("Calculator clicked - future enhancement");

    // For now, just focus on the points input
    document.getElementById("plusPoints").focus();
  });
