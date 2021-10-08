"use strict";

//Global variables

const main = document.querySelector(".main");
let img;
let photoIndex = -1;
const photoPopup = document.createElement("div");
const imgNew = document.createElement("img");
const imgClass = document.createElement("div");
const rightArrow = document.createElement("img");
const leftArrow = document.createElement("img");
const body = document.querySelector("body");

//Adding classes
rightArrow.classList.add("main__popup__arrow--right");
leftArrow.classList.add("main__popup__arrow--left");
photoPopup.classList.add("main__popup");
imgClass.classList.add("main__screen__img");
imgNew.classList.add("main__img__popup");

//Adding arrows

rightArrow.src = "/img/arrow-right.png";
leftArrow.src = "/img/arrow-left.png";
const photoArr = [
  {
    src: "https://images.unsplash.com/photo-1615195627275-48660e9cd84f",
    alt: "nebula cloud",
  },
  {
    src: "https://images.unsplash.com/photo-1570032257806-7272438f38da",
    alt: "mountains reflection on water",
  },
  {
    src: "https://images.unsplash.com/photo-1525054098605-8e762c017741",
    alt: "strong waves",
  },
  {
    src: "https://images.unsplash.com/photo-1562207520-19c0ebd8264f",
    alt: "green mountains and blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1617191519105-d07b98b10de6",
    alt: "blue and purple galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4",
    alt: "blue wavy water",
  },
  {
    src: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a",
    alt: "brown and black galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1552604660-a8c4dde15b2e",
    alt: "person on clif in canyon",
  },
  {
    src: "https://images.unsplash.com/photo-1564295644023-16f14ac50b93",
    alt: "whale tale above water surface",
  },
];

// const photoArrCopy = [...photoArr];

//Global functions

function swipeRight() {
  photoIndex++;
  if (photoIndex === 0) {
    imgNew.src = photoArr[0].src;
  }
  if (photoIndex === 1) {
    imgNew.src = photoArr[1].src;
  }
  if (photoIndex === 2) {
    imgNew.src = photoArr[2].src;
  }
  if (photoIndex === 3) {
    imgNew.src = photoArr[3].src;
  }
  if (photoIndex === 4) {
    imgNew.src = photoArr[4].src;
  }
  if (photoIndex === 5) {
    imgNew.src = photoArr[5].src;
  }
  if (photoIndex === 6) {
    imgNew.src = photoArr[6].src;
  }
  if (photoIndex === 7) {
    imgNew.src = photoArr[7].src;
  }
  if (photoIndex === 8) {
    imgNew.src = photoArr[8].src;
  }
  if (photoIndex === 9) {
    photoIndex = 0;
    imgNew.src = photoArr[0].src;
  }
}
function swipeLeft() {
  photoIndex--;
  if (photoIndex === 0) {
    imgNew.src = photoArr[0].src;
  }
  if (photoIndex === 1) {
    imgNew.src = photoArr[1].src;
  }
  if (photoIndex === 2) {
    imgNew.src = photoArr[2].src;
  }
  if (photoIndex === 3) {
    imgNew.src = photoArr[3].src;
  }
  if (photoIndex === 4) {
    imgNew.src = photoArr[4].src;
  }
  if (photoIndex === 5) {
    imgNew.src = photoArr[5].src;
  }
  if (photoIndex === 6) {
    imgNew.src = photoArr[6].src;
  }
  if (photoIndex === 7) {
    imgNew.src = photoArr[7].src;
  }
  if (photoIndex === 8) {
    imgNew.src = photoArr[8].src;
  }
  if (photoIndex === -1) {
    photoIndex = 8;
    imgNew.src = photoArr[8].src;
  }
}
function remove() {
  rightArrow.remove();
  leftArrow.remove();
  photoPopup.remove();
  imgNew.remove();
}
photoArr.forEach((singlePhoto, i) => {
  img = document.createElement("img");
  img.classList.add("main__img");
  img.alt = singlePhoto.alt;
  img.src = singlePhoto.src;
  main.append(img);
  //On click we add photo's index inside the index variable
  img.addEventListener("click", () => {
    photoIndex = i;
    imgNew.src = singlePhoto.src;
    body.prepend(photoPopup);
    imgNew.alt = singlePhoto.alt;
    body.append(imgClass);
    imgClass.innerHTML = null;
    imgClass.append(imgNew);
    imgClass.prepend(leftArrow, rightArrow);
  });
});
rightArrow.addEventListener("click", () => {
  swipeRight();
});
leftArrow.addEventListener("click", () => {
  swipeLeft();
});

photoPopup.addEventListener("click", () => {
  remove();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && photoPopup) {
    remove();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && photoPopup) {
    swipeRight();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && photoPopup) {
    swipeLeft();
  }
});
