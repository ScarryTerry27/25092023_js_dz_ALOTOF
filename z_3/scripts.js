let arrInfo = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam magni tenetur debitis quod libero doloremque voluptate quam recusandae natus dignissimos, commodi iusto nemo incidunt explicabo iste aut blanditiis asperiores minima rem nesciunt. Asperiores pariatur obcaecati quidem dolorum, voluptate debitis sapiente error iste perspiciatis rem, natus ducimus soluta? ",
  " asperiores minima rem nesciunt. Asperiores pariatur obcaecati quidem dolorum, voluptate debitis sapiente error iste perspiciatis rem, natus ducimus soluta? Aliquid laboriosam ab quod. Voluptatum culpa neque dolorem",
  "earum tempora facilis sequi possimus molestiae ad architecto, perspiciatis alias natus laboriosam eius adipisci atque, illo non ipsa et, praesentium cum? Modi quisquam officiis tempora, minus quis itaque impedit molestias",
  "fugit fugiat doloremque sequi similique necessitatibus totam id, voluptatem ducimus qui rerum at amet.",
];

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let show = document.createElement("div");
show.classList.add("selected");

one.addEventListener("click", (event) => {
  createEl(0);
  one.append(show);
});

two.addEventListener("click", (event) => {
  createEl(1);
  two.append(show);
});

three.addEventListener("click", (event) => {
  createEl(2);
  three.append(show);
});

four.addEventListener("click", (event) => {
  createEl(3);
  four.append(show);
});

function createEl(indx) {
  show.textContent = arrInfo[indx];
}
