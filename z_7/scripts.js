let listItems = document.querySelectorAll("li");

listItems.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.ctrlKey) {
      console.log(elem.classList);
      if (elem.classList) {
        elem.classList.remove("selected");
      } else {
        elem.classList.add("selected");
      }
    } else if (event.shiftKey) {
      funcShift();
    } else {
      for (const item of listItems) {
        item.classList.remove("selected");
      }
      elem.classList.add("selected");
    }
  });
});
