export const getListsStart = () => ({
    type: "GET_LISTS_START"
})

export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists
})

export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE"
})

// create list
export const createListStart = () => ({
    type: "CREATE_LIST_START"
})

export const createListSuccess = (movie) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: movie
})

export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE"
})

//update
export const updateListStart = () => ({
    type: "UPDATE_LIST_START"
})

export const updateListSuccess = (movie) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: movie
})

export const updateListFailure = () => ({
    type: "UPDATE_LIST_FAILURE"
})

// delete list 
export const deleteListStart = () => ({
    type: "DELETE_LIST_START"
})

export const deleteListSuccess = (listID) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: listID
})

export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE"
})
