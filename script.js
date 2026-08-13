/* =========================
   料理の盛り付け
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
    image: "fruit.jpg"
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


/* =========================
   食卓の盛り付け
   ========================= */

const tables = {

  wasyoku: {
    title: "和食",
    image: "wasyoku.png"
  },

  youshoku: {
    title: "洋食",
    image: "yousyoku.png"
  },

  kobachi: {
    title: "小鉢いっぱい",
    image: "kobachi.png"
  }

};


/* =========================
   画面切り替え
   ========================= */

function hideAllScreens() {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });

}


/* =========================
   料理を表示
   ========================= */

function showDish(id) {

  const dish = dishes[id];

  if (!dish) {
    console.error("料理が見つかりません:", id);
    return;
  }

  const guideTitle =
    document.getElementById("guideTitle");

  const guideImage =
    document.getElementById("guideImage");


  guideTitle.textContent = dish.title;

  guideImage.src = dish.image;

  guideImage.alt =
    dish.title + "の盛り付けガイド";


  hideAllScreens();

  document
    .getElementById("guideScreen")
    .classList.add("active");


  window.scrollTo(0, 0);
}


/* =========================
   食卓メニューを開く
   ========================= */

function openTableMenu() {

  hideAllScreens();

  document
    .getElementById("tableScreen")
    .classList.add("active");

  window.scrollTo(0, 0);
}


/* =========================
   食卓ガイドを表示
   ========================= */

function showTable(id) {

  const table = tables[id];

  if (!table) {
    console.error("食卓ガイドが見つかりません:", id);
    return;
  }

  const guideTitle =
    document.getElementById("guideTitle");

  const guideImage =
    document.getElementById("guideImage");


  guideTitle.textContent = table.title;

  guideImage.src = table.image;

  guideImage.alt =
    table.title + "の食卓配置ガイド";


  hideAllScreens();

  document
    .getElementById("guideScreen")
    .classList.add("active");

  window.scrollTo(0, 0);
}


/* =========================
   ホームへ戻る
   ========================= */

function backToHome() {

  hideAllScreens();

  document
    .getElementById("homeScreen")
    .classList.add("active");

  window.scrollTo(0, 0);
}
