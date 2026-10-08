const form = document.getElementById("movie-form");
const titleInput = document.getElementById("movie-title");
const genreSelect = document.getElementById("movie-genre");
const message = document.getElementById("form-message");
const movieList = document.getElementById("movie-list");
const emptyMessage = document.getElementById("empty-message");

const genre = ["Adventure", "Mystery", "Horror", "Comedy", "Superhero"]
genre.forEach((genre) => {
  console.log(genre)

  let option = document.createElement("option")
  option.innerText = genre
  option.value = genre

  console.log(option)

  genreSelect.appendChild(option)
})


const watchlist = {
  movies: [],
  toggleWatched(index) {
    // TODO (Step 4)
    this.movies[index].watched = !this.movies[index].watched
  },
  removeMovie(index) {
    // TODO (Step 4)
    this.movies.splice(index, 1)
  }
};

function saveMovies() {
  // TODO (Step 6)
  localStorage.setItem('movies', JSON.stringify(watchlist.movies))
}

function loadMovies() {
  // TODO (Step 6)
  let saved = JSON.parse(localStorage.getItem('movies'))
  console.log(saved)

  if (saved != null && saved != "") {
    try {
      watchlist.movies = saved
    } catch (err) {
      
    }
  } else {
    
  }
}

function renderMovies() {
  // TODO (Step 3)
  movieList.replaceChildren()
  watchlist.movies.forEach((movie, index) => {
    const card = document.createElement("li")
    const title = document.createElement("h3")
    title.textContent = movie.title

    const details1 = document.createElement("p")
    details1.textContent = movie.genre
    const details2 = document.createElement("p")
    details2.textContent = movie.watched ? "Watched" : "Not Watched"

    const toggleButton = document.createElement("button")
    toggleButton.type = "button"
    toggleButton.textContent = movie.watched ? "Mark Unwatched ★" : "Mark Watched ☆"
    toggleButton.addEventListener("click", () => {
      watchlist.toggleWatched(index)
      saveMovies()
      renderMovies()
    })

    const removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.textContent = "Remove"
    removeButton.addEventListener("click", () => {
      watchlist.removeMovie(index)
      saveMovies()
      renderMovies()
    })

    card.append(title, details1, details2, toggleButton, removeButton)
    movieList.append(card)
  })
  if (watchlist.movies.length == 0) {
    emptyMessage.textContent = "Your Watchlist is Empty. Add a movie to get started."
  } else {
    emptyMessage.textContent = ""
  }
}

form.addEventListener("submit", (event) => {
  // TODO (Step 5)
  event.preventDefault()

  let titleValue = titleInput.value.trim()
  let genreValue = genreSelect.value
  if (titleValue == "") {
    message.textContent = "Enter a movie title"
    return
  }
  if (genreValue == "") {
    message.textContent = "Enter a genre"
    return
  }
  if (titleValue && genreValue) {
    const newMovie = {
      title: titleValue,
      genre: genreValue,
      watched: false
    }
    watchlist.movies.push(newMovie)
    saveMovies()
    renderMovies()
    titleInput.value = ""
    message.textContent = ""
  }
});

loadMovies();
renderMovies();