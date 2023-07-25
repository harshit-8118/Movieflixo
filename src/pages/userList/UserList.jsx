import { DeleteOutline } from "@mui/icons-material";
import "./userList.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../context/userContext/UserContext";
import { deleteUser, getUsers } from "../../context/userContext/UserApiCalls";

function UserList() {
  const {users, dispatch} =  useContext(UsersContext);
  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch])
  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "username",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.profilePic} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: "150",
      renderCell: (params) => {
        return (
          <>
          <Link to={`/user/${params.row._id}`} state={{user: params.row}}>
            <button className="userListEdit">Edit</button>
          </Link>
            <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },
  ];
  
  return (
    <div className="userList">
      <div className="userTitleContainer">
        <h1 className="userTitle">Users list</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}

export default UserList;
