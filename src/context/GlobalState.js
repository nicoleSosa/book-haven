
import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    readinglist: localStorage.getItem("readinglist") ? JSON.parse(localStorage.getItem("readinglist"))
    : [],
}

// create context and export it 
export const GlobalContext = createContext(initialState);


// provider components
export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    useEffect(() => {
        localStorage.setItem("readinglist", JSON.stringify(state.readinglist));
      }, [state]);
    

    // actions
    const addBookToReadinglist = (book) => {
      dispatch({ type: "ADD_BOOK_TO_READINGLIST", payload: book });
    };
    const removeBookFromReadinglist = (id) => {
      dispatch({ type: "REMOVE_BOOK_FROM_READINGLIST", payload: id });
     };
  
  
  
    return (
      <GlobalContext.Provider
        value={{
          readinglist: state.readinglist,
          addBookToReadinglist,
          removeBookFromReadinglist,
      
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
  };