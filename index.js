"use strict";

//Global variables

const main = document.querySelector(".main");
let img;
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

photoArr.forEach((singlePhoto) => {
  img = document.createElement("img");
  img.classList.add("main__img");
  img.alt = singlePhoto.alt;
  img.src = singlePhoto.src;
  img.append(singlePhoto.src);
  main.append(img);

  img.addEventListener("click", (event) => {
    // body.prepend(photoPopup);
    // imgNew.src = singlePhoto.src;
    // imgNew.alt = singlePhoto.alt;
    // body.append(imgClass);
    // //Save the index of the currently pressed photo and then add ++ the index, event.target.src may be used
    // imgClass.innerHTML = null;
    // imgClass.append(imgNew);
    // imgClass.prepend(leftArrow, rightArrow);

    photoArr.forEach((singlePhoto, i) => {
      singlePhoto["index"] = i;
      if (singlePhoto.index === 0) {
        singlePhoto.index++;
        body.prepend(photoPopup);
        imgNew.src = singlePhoto.src;
        imgNew.alt = singlePhoto.alt;
        body.append(imgClass);
        //Save the index of the currently pressed photo and then add ++ the index, event.target.src may be used
        imgClass.innerHTML = null;
        imgClass.append(imgNew);
        imgClass.prepend(leftArrow, rightArrow);
      }
      console.log(singlePhoto);
    });

    rightArrow.addEventListener("click", (event) => {
      if (singlePhoto.index === 0) {
      }
      // photoArr.forEach((singlePhoto, i) => {
      //   imgNew.innerHTML = null;
      //   imgNew.src = singlePhoto.src;
      //   console.log(singlePhoto, i);
      // });
    });
    leftArrow.addEventListener("click", () => {
      imgNew.innerHTML = null;
      imgNew.src = singlePhoto.src;
      console.log(singlePhoto);
    });
  });
  photoPopup.addEventListener("click", () => {
    rightArrow.remove();
    leftArrow.remove();
    photoPopup.remove();
    imgNew.remove();
  });
});
