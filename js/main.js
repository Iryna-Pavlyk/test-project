const drugsList = document.querySelector(".drugs-list");
const list = document.querySelector(".total-list-cart");
const formData = document.querySelector(".form-data");
const BASE_URL = "https://65ef278dead08fa78a4fefb5.mockapi.io/contacts/data";
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

async function inputHandler(event) {
  try {
    const text = event.target.value;
    await postData({ data: text });
  } catch (error) {
    console.log(error);
  }
}

function postData(data) {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText || response.status);
    }
    return response.json();
  });
}
