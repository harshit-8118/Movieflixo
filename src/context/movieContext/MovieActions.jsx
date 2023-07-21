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

// create movie
export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START"
})

export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie
})

export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE"
})

//update
export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START"
})

export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie
})

export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE"
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
