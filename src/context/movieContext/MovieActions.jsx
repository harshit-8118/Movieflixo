export const getMoviesStart = () => ({
    type: "GET_MOVIES_START"
})

export const getMoviesSuccess = (movie) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movie
})

export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE"
})

// delete movie 
export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START"
})

export const deleteMovieSuccess = (movieID) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: movieID
})

export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE"
})
