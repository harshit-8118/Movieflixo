import "./movieList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect, useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/MovieApiCalls";

function MovieList() {
  const {movies, dispatch} = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch])
  
  const handleDelete = (movieID) => {
    deleteMovie(movieID, dispatch);
  }
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="movieListItem">
            <img src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "year", headerName: "Year", width: 150 },
    { field: "limit", headerName: "Limit", width: 150 },
    { field: "isSeries", headerName: "isSeries", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: "150",
      renderCell: (params) => {
        return (
          <>
          <Link to={`/movies/${params.row._id}`} state={{movie: params.row}}>
            <button className="movieListEdit">Edit</button>
          </Link>
            <DeleteOutline className="movieListDelete" onClick={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="movieList">
      <div className="movieListTitleContainer">
        <h1 className="movieListTitle">Movie list</h1>
        <Link to="/newMovie">
          <button className="movieListAddButton">Create new Movie</button>
        </Link>
      </div>
      <DataGrid
        rows={movies}
        columns={columns}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10, 15]}
        getRowId={(r) => r._id}
      />
    </div>
  );
}

export default MovieList;
