const drugsList = document.querySelector(".drugs-list");
const list = document.querySelector(".total-list-cart");
const btnSubmit = document.querySelector(".btn-submit-cart");
const formData = document.querySelector(".form-data");
const BASE_URL = "http://127.0.0.1:5500/index.html";
const localeStorageKey = "key";

drugsList.addEventListener("click", (event) => {
  const values = event.target.name;
  localStorage.setItem(localeStorageKey, JSON.stringify(values));
  getItem();
});

function getItem() {
  const localStorageValue = JSON.parse(localStorage.getItem(localeStorageKey));
  let markup = `<li class="drugs-item"><img src="./img/pill-min.jpg" alt="">
                            <h3 class="drugs-title">${localStorageValue}</h3>`;
  if (localStorageValue) {
    return list.insertAdjacentHTML("beforeend", markup);
  }
}

formData.addEventListener("input", inputHandler);

let values;
function inputHandler(event) {
  const name = event.target.value;
  const email = event.target.value;
  const phone = event.target.value;
  const address = event.target.value;
  values = [name, email, phone, address];
  getData();
}

function getData() {
  fetch(BASE_URL).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText || response.status);
    }
    return response.json();
  });
}

// btnSubmit.addEventListener("submit", submitHandler);

// function submitHandler(event) {
//   event.preventDefault();
//   getData();
// }

// function getData() {}
