const d = document;

export default function hamburguerMenu(menuBtn, navMenu, menuLink) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
      d.querySelector(navMenu).classList.toggle("open");
      d.querySelector(menuBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(navMenu).classList.remove("open");
      d.querySelector(menuBtn).classList.remove("is-active");
    }
  });
}
