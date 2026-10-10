(() => {
  "use strict";
  const menuButton = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#nav");
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }));

  const filters = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll(".story-card")];
  const status = document.querySelector("#filter-status");
  const empty = document.querySelector("#empty-state");
  const names = {all:"all stories", wellbeing:"wellbeing stories", learning:"learning stories", design:"design stories"};
  filters.forEach(button => button.addEventListener("click", () => {
    const topic = button.dataset.filter;
    let count = 0;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    cards.forEach(card => {
      const show = topic === "all" || card.dataset.topic === topic;
      card.hidden = !show;
      if (show) count++;
    });
    empty.hidden = count > 0;
    status.textContent = `Showing ${count} ${names[topic]}.`;
  }));

  const form = document.querySelector("#newsletter-form");
  const email = document.querySelector("#email");
  const error = document.querySelector("#email-error");
  const success = document.querySelector("#success");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const value = email.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    success.hidden = true;
    email.removeAttribute("aria-invalid");
    if (!valid) {
      email.setAttribute("aria-invalid", "true");
      error.textContent = value ? "Enter a valid email address, such as name@example.com." : "Enter your email address to continue.";
      error.hidden = false;
      email.focus();
      return;
    }
    error.hidden = true;
    success.textContent = "Thanks! Your email passed the demo validation. No data was sent or saved.";
    success.hidden = false;
    form.reset();
  });
  email.addEventListener("input", () => {
    if (email.getAttribute("aria-invalid") === "true") {
      email.removeAttribute("aria-invalid");
      error.hidden = true;
    }
  });
})();