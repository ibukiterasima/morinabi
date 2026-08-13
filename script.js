/* =========================
   もりナビ
   script.js
   ========================= */

const dishes = {
  classic: {
    title: "定番",
    image: "classic.PNG"
  },

  cafe: {
    title: "カフェ風",
    image: "cafe.PNG"
  },

  "japanese food": {
    title: "和食",
    image: "japanese food.PNG"
  },

  "western-style food": {
    title: "洋食",
    image: "western-style food.PNG"
  },

  pasta: {
    title: "麺・パスタ",
    image: "pasta.PNG"
  },

  udon: {
    title: "うどん",
    image: "udon.PNG"
  },

  fruit: {
    title: "フルーツ",
    image: "fruit.PNG"
  },

  desert1: {
    title: "デザート",
    image: "desert1.PNG"
  },

  desert2: {
    title: "デザート 2",
    image: "desert2.PNG"
  }
};


function showDish(id) {

  const dish = dishes[id];

  if (!dish) {
    console.error("料理が見つかりません:", id);
    return;
  }

  const dishArea = document.getElementById("dishArea");

  dishArea.innerHTML = `
    <h2 class="dish-title">${dish.title}</h2>

    <img
      class="dish-image"
      src="${dish.image}"
      alt="${dish.title}の盛り付けガイド"
    >

    <button
      class="back-button"
      onclick="backToCategories()"
    >
      カテゴリーに戻る
    </button>
  `;

  dishArea.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


function backToCategories() {

  const dishArea = document.getElementById("dishArea");

  dishArea.innerHTML = `
    <p class="hint">
      カテゴリーを選ぶと<br>
      盛り付けガイドが表示されます。
    </p>
  `;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
