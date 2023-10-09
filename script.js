const apiKey = "1d6a8992";
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const movieDetails = document.getElementById("movieDetails");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  if (searchTerm.trim() !== "") {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
