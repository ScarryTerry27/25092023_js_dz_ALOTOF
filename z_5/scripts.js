let btn = document.getElementById("btn");
let input1 = document.getElementById("month");
let input2 = document.getElementById("year");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let month = input1.value - 1;
  let year = input2.value;
  let date = new Date(year, month);
  getDT(date);
});

function getDT(dt) {
  let day = dt.getDay();
  let month = dt.getMonth();
  count = 1;
  arr = [];
  while (month === dt.getMonth()) {
    arr.push(count);
    count++;
    dt = new Date(dt.getYear(), dt.getMonth(), count);
  }
  getTable(arr, day);
}

function getTable(arr, day) {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let th2 = document.createElement("th");
  th2.textContent = "Пн";
  let th3 = document.createElement("th");
  th3.textContent = "Вт";
  let th4 = document.createElement("th");
  th4.textContent = "Ср";
  let th5 = document.createElement("th");
  th5.textContent = "Чт";
  let th6 = document.createElement("th");
  th6.textContent = "Пт";
  let th7 = document.createElement("th");
  th7.textContent = "Сб";
  let th1 = document.createElement("th");
  th1.textContent = "Вск";

  thead.append(th2, th3, th4, th5, th6, th7, th1);

  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  for (i = 1; i < day; i++) {
    let td = document.createElement("td");
    td.textContent = "-";
    tr.append(td);
  }
  let count = day;
  for (const el of arr) {
    if (count > 7) {
      tbody.append(tr);
      tr = document.createElement("tr");
      count = 1;
    }
    let td = document.createElement("td");
    td.textContent = el;
    tr.append(td);
    count++;
  }
  tbody.append(tr);
  table.append(thead, tbody);
  document.body.append(table);
}
