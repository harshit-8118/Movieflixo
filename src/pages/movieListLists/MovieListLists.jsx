import "./movieListLists.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { deleteList, getLists } from "../../context/listsContext/ListsApiCalls";
import { ListsContext } from "../../context/listsContext/ListsContext";

function MovieListLists() {
  const {lists, dispatch} = useContext(ListsContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch])
  
  const handleDelete = (listID) => {
    deleteList(listID, dispatch);
  }
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: "150",
      renderCell: (params) => {
        return (
          <>
          <Link to={`/lists/${params.row._id}`} state={{list: params.row}}>
            <button className="movieListListsEdit">Edit</button>
          </Link>
            <DeleteOutline className="movieListListsDelete" onClick={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="movieListLists">
      <div className="movieListListsTitleContainer">
        <h1 className="movieListListsTitle">Listing Movie Lists</h1>
        <Link to="/newList">
          <button className="movieListListsAddButton">Create new List</button>
        </Link>
      </div>
      <DataGrid
        rows={lists}
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

export default MovieListLists;
