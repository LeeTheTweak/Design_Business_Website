let yearDiv = document.getElementsByClassName("year")[0];

let date = new Date();
let year = date.getFullYear();

yearDiv.textContent = year;