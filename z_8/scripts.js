flag = false;
let div = document.getElementById("textarea");
let container = document.querySelector(".container");
let textarea = document.createElement("textarea");

document.documentElement.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.code == "KeyE" && !flag) {
    event.preventDefault();
    funcChangeText();
    flag = true;
  } else if (event.ctrlKey && event.code == "KeyS" && flag) {
    event.preventDefault();
    saveText();
    flag = false;
  }
});

function funcChangeText() {
  div.style.display = "none";
  textarea.style.width = "250px";
  textarea.style.height = "150px";
  textarea.textContent = div.textContent;
  container.append(textarea);
}

function saveText() {
  div.textContent = textarea.value;
  textarea.remove();
  div.style.display = "block";
}
