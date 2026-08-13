/* =========================
   もりナビ
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
   ガイド画面を開く
   ========================= */

function showDish(id) {

  const dish = dishes[id];

  if (!dish) {
    console.error("料理が見つかりません:", id);
    return;
  }


  const homeScreen =
    document.getElementById("homeScreen");

  const guideScreen =
    document.getElementById("guideScreen");

  const guideTitle =
    document.getElementById("guideTitle");

  const guideImage =
    document.getElementById("guideImage");


  guideTitle.textContent = dish.title;

  guideImage.src = dish.image;

  guideImage.alt =
    dish.title + "の盛り付けガイド";


  homeScreen.classList.remove("active");

  guideScreen.classList.add("active");


  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


/* =========================
   ホームに戻る
   ========================= */

function backToHome() {

  const homeScreen =
    document.getElementById("homeScreen");

  const guideScreen =
    document.getElementById("guideScreen");


  guideScreen.classList.remove("active");

  homeScreen.classList.add("active");


  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}
