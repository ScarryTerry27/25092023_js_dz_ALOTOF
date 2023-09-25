let box = document.querySelector(".box");
let line = document.querySelector(".line");
let style = window.getComputedStyle(box);
let bottomEL = style.getPropertyValue("bottom");
let container = document.querySelector(".container");

box.onmousedown = function (event) {
  line.append(box);
  moveAt(event.pageX);

  function moveAt(pageX) {
    let leftEl = pageX - 250;
    if (750 >= leftEl && leftEl >= 0) {
      box.style.left = leftEl + "px";
    } else if (leftEl < 0) {
      box.style.left = -1 + "px";
      document.body.removeEventListener("mousemove", onMouseMove);
      box.onmouseup = null;
    } else {
      box.style.left = 750 + "px";
      document.body.removeEventListener("mousemove", onMouseMove);
    }
  }

  box.style.bottom = bottomEL;

  function onMouseMove(event) {
    moveAt(event.pageX);
  }
  document.body.addEventListener("mousemove", onMouseMove);

  box.onmouseup = function () {
    document.body.removeEventListener("mousemove", onMouseMove);
    box.onmouseup = null;
  };
};
