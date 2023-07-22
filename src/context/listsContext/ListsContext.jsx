import { createContext, useReducer} from "react";
import ListsReducer from "./ListsReducer";

const INITIAL_STATE = {
    lists: [],
    isFetching: false,
    error: false
}

export const ListsContext = createContext(INITIAL_STATE);

export const ListsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(ListsReducer, INITIAL_STATE);

  return (
    <ListsContext.Provider value={{
        lists: state.lists,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
    }}>
      {children}
    </ListsContext.Provider>
  )
}

