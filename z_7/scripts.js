let listItems = document.querySelectorAll("li");

listItems.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.ctrlKey) {
      if (elem.classList.length == 1) {
        elem.classList.remove("selected");
      } else {
        elem.classList.add("selected");
      }
    } else if (event.shiftKey) {
      event.preventDefault();
      funcShift(elem);
    } else {
      for (const item of listItems) {
        item.classList.remove("selected");
      }
      elem.classList.add("selected");
    }
  });
});

function funcShift(elem) {
  let flag = false;
  for (let i = listItems.length - 1; i > 0; i--) {
    if (listItems[i] == elem) {
      listItems[i].classList.add("selected");
      flag = true;
    } else if (flag && listItems[i].classList.length == 0) {
      listItems[i].classList.add("selected");
    } else if (flag && listItems[i].classList.length == 1) {
      flag = false;
      break;
    }
  }
}
