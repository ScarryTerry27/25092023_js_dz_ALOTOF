let arr_photo = [
  "/img/photo1.jpg",
  "/img/photo2.jpg",
  "/img/photo3.jpg",
  "/img/photo4.jpg",
];

let right = document.getElementById("right");
let left = document.getElementById("left");
let bg = document.querySelector("img");

right.addEventListener("click", (e) => {
  bg.src = arr_photo[1];
  let elem = arr_photo.shift();
  arr_photo.push(elem);
});

left.addEventListener("click", (e) => {
  let elem = arr_photo.pop();
  arr_photo.shift(elem);
  bg.src = arr_photo[0];
});
