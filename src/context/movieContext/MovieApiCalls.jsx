import {getMoviesStart, getMoviesSuccess, getMoviesFailure, deleteMovieStart, deleteMovieSuccess, deleteMovieFailure} from './MovieActions'
import axios from 'axios';

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try{
        const res = await axios.get('/movies', {
            headers: {token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken}
        });
        dispatch(getMoviesSuccess(res.data));
    }catch(err){
        dispatch(getMoviesFailure());
    }
}

export const deleteMovie = async (movieID, dispatch) => {
    dispatch(deleteMovieStart());
    try{
        await axios.delete(`/movies/${movieID}`, {
            headers: {token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken}
        });
        dispatch(deleteMovieSuccess(movieID));
    }catch(err){
        dispatch(deleteMovieFailure());
    }
}