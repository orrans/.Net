let form = document.querySelector("#form");
let txtInput = document.querySelector("#txtInput");
let addButton = document.querySelector("#submit");
let ul = document.querySelector(".ul");
let rmvBtnHTML;
let list = ul.querySelectorAll("li");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const item = document.createElement("li");
  const input = document.createTextNode(txtInput.value);
  const rmvBTN = document.createElement("button");
  rmvBTN.classList.add("rmvBTN");
  rmvBTN.innerText = "Remove";
  item.appendChild(input);
  item.appendChild(rmvBTN);
  ul.appendChild(item);
  txtInput.value = "";
  txtInput.focus();
  rmvBTN.addEventListener("click", function (event) {
    event.preventDefault();
    item.remove();
  });
});
