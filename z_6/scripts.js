arr = [
  "index.html",
  "http://google.com",
  "https://itstep.org",
  "https://mystat.itstep.org",
  "/images/cat.jpg",
  "/local/path",
];

let ul = document.querySelector("ul");

for (const elem of arr) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.href = "#";
  a.textContent = elem;
  if (elem.indexOf("http") == -1) {
    a.style.textDecoration = "none";
  }
  li.append(a);
  ul.append(li);
}
