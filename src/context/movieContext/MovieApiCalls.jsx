import {getMoviesStart, getMoviesSuccess, getMoviesFailure, deleteMovieStart, deleteMovieSuccess, deleteMovieFailure, createMovieStart, createMovieSuccess, createMovieFailure, updateMovieStart, updateMovieSuccess, updateMovieFailure} from './MovieActions'
import axios from 'axios';
import {baseUrl} from '../../App';

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try{
        const res = await axios.get(baseUrl + 'movies', {
            headers: {token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken}
        });
        dispatch(getMoviesSuccess(res.data));
    }catch(err){
        dispatch(getMoviesFailure());
    }
}

//create
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try{
        const res = await axios.post(baseUrl + `movies`, movie, {
            headers: {token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken}
        });
        dispatch(createMovieSuccess(res.data));
    }catch(err){
        dispatch(createMovieFailure());
    }
}

// update
export const updateMovie = async (movie, dispatch) => {
    dispatch(updateMovieStart());
    try{
        const res = await axios.put(baseUrl + `movies/${movie._id}`, movie, {
            headers: {token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken}
        });
        console.log('update successful')
        dispatch(updateMovieSuccess(res.data));
    }catch(err){
        dispatch(updateMovieFailure());
    }
}

//delete
export const deleteMovie = async (movieID, dispatch) => {
    dispatch(deleteMovieStart());
    try{
        await axios.delete(baseUrl + `movies/${movieID}`, {
            headers: {token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken}
        });
        dispatch(deleteMovieSuccess(movieID));
    }catch(err){
        dispatch(deleteMovieFailure());
    }
}