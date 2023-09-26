let listTh = document.querySelectorAll("th");
let elem1 = document.getElementById("1");
let elem2 = document.getElementById("2");
let elem3 = document.getElementById("3");
let elem4 = document.getElementById("4");
let tbody = document.querySelector("tbody");

let objSort = {
  Firstname: 0,
  LastName: 1,
  Age: 2,
  Company: 3,
};

listTh.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    sortedTable(objSort[event.target.textContent]);
  });
});

function sortedTable(target) {
  console.log(elem1.lastElementChild.previousElementSibling);
  arr = [elem1, elem2, elem3, elem4];
  if (target == 0) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j].firstElementChild > arr[j + 1].firstElementChild) {
          let c = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = c;
        }
      }
    }
  }
  if (target == 1) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (
          arr[j].firstElementChild.nextElementSibling >
          arr[j + 1].firstElementChild.nextElementSibling
        ) {
          let c = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = c;
        }
      }
    }
  }

  if (target == 2) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (
          arr[j].lastElementChild.previousElementSibling >
          arr[j + 1].lastElementChild.previousElementSibling
        ) {
          let c = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = c;
        }
      }
    }
  }

  if (target == 3) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j].lastElementChild > arr[j + 1].lastElementChild) {
          let c = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = c;
        }
      }
    }
  }
  for (const a of arr) {
    console.log(a);
  }
}

function funcSort(target) {
  console;
}
