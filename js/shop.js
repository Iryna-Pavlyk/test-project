import { list } from "./cart.js";
const drugsList = document.querySelector(".drugs-list");
// const drugsItem = document.querySelector(".drugs-item");
const localeStorageKey = "key";

drugsList.addEventListener("click", (event) => {
  const values = event.target.name;
  localStorage.setItem(localeStorageKey, JSON.stringify(values));
  //   console.log(values);
  getItem();
});

function getItem() {
  const localStorageValue = JSON.parse(localStorage.getItem(localeStorageKey));
  console.log(localStorageValue);
  let markup = `<li class="drugs-item"><img src="./img/pill-min.jpg" alt="">
                            <h3 class="drugs-title">${localStorageValue}</h3>`;
  if (localStorageValue) {
    return list.insertAdjacentHTML("beforeend", markup);
  }
}
