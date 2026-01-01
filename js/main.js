const items = document.querySelectorAll(".accordion__item");

items.forEach((item) => {
  const header = item.querySelector(".accordion__header");
  const btn = item.querySelector(".accordion__btn");
  const icon = btn.querySelector("img");

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("active");

    btn.setAttribute("aria-expanded", isOpen);

    icon.src = isOpen ? "./images/icon-minus.svg" : "./images/icon-plus.svg";

    icon.classList.toggle("rotate", isOpen);
  });
});
