function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-engine-input");
  let cityElement = document.querySelector("#location");
  cityElement.innerHTML = searchInput.value;
}

let searchEngineElement = document.querySelector("#search-engine");
searchEngineElement.addEventListener("submit", handleSearchSubmit);
