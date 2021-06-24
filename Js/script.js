const searchBtn = document.getElementById("btn-search");
const searchInput = document.getElementById("input-search");
const item = document.getElementById("item");
const NoOfCountries = countryList.length;

//event listner for displaying search bar
searchBtn.addEventListener("click", () => {
  searchInput.classList.add("search");
});

// event listner for displaying suggestion list
searchInput.addEventListener("keyup", (e) => {
  const inputValue = capitalizeFirstLetter(e.target.value);

  // // searching words
  const resultWords = findMatchingWords(inputValue);

  // // add to ul
  item.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const country = Object.keys(resultWords[Object.keys(resultWords)[i]]);
    item.innerHTML += `<li onclick="handleClick(this)" >${country}</li>`;
  }
});

function handleClick(e) {
  const text = e.innerHTML;
  searchInput.value = text;
  item.innerHTML = "";
}
