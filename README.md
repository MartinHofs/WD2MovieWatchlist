# WD2MovieWatchlist

Github Link: https://github.com/MartinHofs/WD2MovieWatchlist

Movie Properties:
    form (This is the form of the site)
    titleInput (This is where you put in the Movie's Title)
    genreSelect (This is where you select the Movie's Genre)
        genre (genreSelect draws from this)
    message (This displays error messages with the form)
    movieList (This is a list containing all your Movies)
    emptyMessage (This displays a message if your list is empty)
    option (Take a wild guess)
    watchlist (This holds all your movies)
    card (This is the list item)
    title (This is the header for the list item)
    details1 & details2 (These hold the genre and watched status respectively)
    toggleButton & removeButton (These are the buttons to Toggle if you watched a movie and to remove a movie respectively)
    titleValue & genreValue (These hold the values of title and genre)

Methods:
    saveMovies()
        This uses localStorage and JSON.stringify to save watchlist.movies
    loadMovies()
        This uses localStorage, an if-else statement, a try-catch bucket, and JSON.parse to load saved data
    renderMovies()
        This makes sure that only one of each movie is loaded, as well as their toggleButton and removeButton
    addMovie()
        This adds a movie via the usage of push, if statements, and other things