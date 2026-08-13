/* =========================
   もりナビ
   script.js
   ========================= */

// 料理データ
const dishes = {
  classic: {
    title: "定番",
    image: "images/classic.png"
  },

  cafe: {
    title: "カフェ風",
    image: "images/cafe.png"
  },

  "japanese food": {
    title: "和食",
    image: "images/japanese food.png"
  },

  "western-style food": {
    title: "洋食",
    image: "images/western-style food.png"
  },

  pasta: {
    title: "麺・パスタ",
    image: "images/pasta.png"
  },

  udon: {
    title: "うどん",
    image: "images/udon.png"
  },

  fruit: {
    title: "フルーツ",
    image: "images/fruit.png"
  },

  desert1: {
    title: "デザート",
    image: "images/desert1.png"
  },

  desert2: {
    title: "デザート 2",
    image: "images/desert2.png"
  }
};


// カテゴリーを選んだとき
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

    <button class="back-button" onclick="backToCategories()">
      カテゴリーに戻る
    </button>
  `;

  // 画像のところまで移動
  dishArea.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


// カテゴリー画面に戻る
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
