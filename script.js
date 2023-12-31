const apiKey = "7b76ad1f";
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const movieDetails = document.getElementById("movieDetails");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  if (searchTerm.trim() !== "") {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          movieDetails.innerHTML = `
                        <h2>${data.Title}</h2>
                        <img src="${data.Poster}" alt="${data.Title} Poster">
                        <p>${data.Plot}</p>
                        <p><b>Released</b>: ${data.Released}</p>
                        <p><b>Genre</b>: ${data.Genre}</p>
                    `;
        } else {
          movieDetails.innerHTML = "<p>Movie not found.</p>";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
