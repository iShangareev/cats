"use strict";
const productCatalog = document.querySelector(".main-page__catalog");

const cardHandlers = () => {
  productCatalog.addEventListener("click", (e) => {
    e.preventDefault();

    const cardWrap = e.target.closest(".product-wrapper");
    const card = cardWrap.querySelector(".product-card");
    const cardText = cardWrap.querySelector(".product-card__ad-text");
    const cardTag = cardWrap.querySelector(".product-card__ad-text-selected");
    const cardTagline = cardWrap.querySelector(".product-card__tagline");
    const cardDisabled = card.classList.contains("product-card--disabled");
    const cardSelected = !card.classList.contains("product-card--selected");
    const cardBuy = cardWrap.querySelector(".product-card__buy");

    if (!card || !cardBuy) {
      return;
    }
    if (!productCatalog.contains(card) || !productCatalog.contains(cardBuy)) {
      return;
    }

    if (!cardDisabled) {
      card.classList.toggle("product-card--selected");
      cardText.classList.toggle("product-card__ad-text--disabled");
      cardTag.classList.toggle("product-card__ad-text-selected--open");
    }

    if (cardSelected && !cardDisabled) {
      card.onmouseover = function () {
        cardTagline.innerText = "Сказочное заморское яство";
        cardTagline.style.color = "#666666";
      };
      card.onmouseout = function () {
        cardTagline.innerText = "Котэ не одобряет?";
        cardTagline.style.color = "#e62e7a";
      };
    } else if (!cardSelected) {
      card.onmouseover = function () {};
      card.onmouseout = function () {};
    }
  });
};

cardHandlers();
