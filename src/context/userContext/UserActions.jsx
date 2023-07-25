export const getUsersStart = () => ({
    type: "GET_USERS_START"
})

export const getUsersSuccess = (user) => ({
    type: "GET_USERS_SUCCESS",
    payload: user
})

export const getUsersFailure = () => ({
    type: "GET_USERS_FAILURE"
})

// create user
export const createUserStart = () => ({
    type: "CREATE_USER_START"
})

export const createUserSuccess = (user) => ({
    type: "CREATE_USER_SUCCESS",
    payload: user
})

export const createUserFailure = () => ({
    type: "CREATE_USER_FAILURE"
})

//update
export const updateUserStart = () => ({
    type: "UPDATE_USER_START"
})

export const updateUserSuccess = (User) => ({
    type: "UPDATE_USER_SUCCESS",
    payload: User
})

export const updateUserFailure = () => ({
    type: "UPDATE_USER_FAILURE"
})

// delete user 
export const deleteUserStart = () => ({
    type: "DELETE_USER_START"
})

export const deleteUserSuccess = (userID) => ({
    type: "DELETE_USER_SUCCESS",
    payload: userID
})

export const deleteUserFailure = () => ({
    type: "DELETE_User_FAILURE"
})
